import { Injectable, OnInit } from '@angular/core';
import { Observable, lastValueFrom, take } from 'rxjs';
import {
  Consumer,
  CreateConsumerDto,
  CreateUserDto,
  CreateVendorDto,
  User,
} from './user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Envelope } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  private user: User | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    if (userJson) this.user = JSON.parse(userJson);
  }

  getUser(): User | null {
    return this.user;
  }

  setUser(user: User | null) {
    if (!user) {
      localStorage.removeItem('user');
      this.user = null;
    }

    const userJson = JSON.stringify(user);
    localStorage.setItem('user', userJson);
    this.user = user;
  }

  getAuthToken(): string | null {
    const tokenJson = localStorage.getItem('token');
    if (!tokenJson) return null;
    return tokenJson;
  }

  private async registerUser(userData: CreateUserDto) {
    const res$ = this.http
      .post<Envelope<User>>(environment.apiUrl + '/users', userData)
      .pipe(take(1));
    const res = await lastValueFrom(res$);

    const user = res.data;

    this.setUser(user);
    return user;
  }

  async registerConsumer(
    userData: CreateUserDto,
    consumerData: Omit<CreateConsumerDto, 'userId'>
  ) {
    const user = await this.registerUser(userData);

    const consumerRes$ = this.http
      .post<Envelope<Consumer>>(environment.apiUrl + '/consumers', {
        ...consumerData,
        userId: user.id,
      })
      .pipe(take(1));
    const consumerRes = await lastValueFrom(consumerRes$);

    const consumer = consumerRes.data;

    this.setUser({ ...user, consumer });
    return this.getUser();
  }

  async registerVendor(
    userData: CreateUserDto,
    vendorData: Omit<CreateVendorDto, 'userId'>
  ) {
    const user = await this.registerUser(userData);

    const vendorRes$ = this.http
      .post<Envelope<Consumer>>(environment.apiUrl + '/vendors', {
        ...vendorData,
        userId: user.id,
      })
      .pipe(take(1));
    const vendorRes = await lastValueFrom(vendorRes$);

    const vendor = vendorRes.data;

    this.setUser({ ...user, vendor });
    return this.getUser();
  }
}

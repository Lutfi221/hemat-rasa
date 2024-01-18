export type Location = {
  type: 'Point';
  coordinates: [number, number];
};

export interface CreateUserDto {
  username: string;
  firstName: string;
  lastName: string;
}

export interface User extends CreateUserDto {
  id: number;
  coins: number;

  vendor?: Vendor;
  consumer?: Consumer;
}

export interface CreateVendorDto {
  userId: number;
  name: string;
  location: Location;
  address: string;
}

export interface Vendor {
  id: number;
}

export interface CreateConsumerDto {
  userId: number;
  location: Location;
  address: string;
}

export interface Consumer extends CreateConsumerDto {
  id: number;
}

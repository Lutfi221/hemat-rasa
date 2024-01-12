import { Service } from "typedi";
import { CreateUserDto } from "./users.dto";
import { AppDataSource } from "@/data-source";
import { UserEntity } from "./user.entity";

@Service()
export class UserService {
  public async createUser(userData: CreateUserDto) {
    const user = new UserEntity();
    user.firstName = userData.firstName;
    user.lastName = userData.lastName;
    user.username = userData.username;
    user.coins = 0;
    return AppDataSource.getRepository(UserEntity).save(user);
  }
}

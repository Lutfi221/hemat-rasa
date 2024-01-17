import { Service } from "typedi";
import { AUTH_CONFIG } from "@/app-config";
import jwt from "jsonwebtoken";
import { AppDataSource } from "@/data-source";
import { TokenData } from "./types";
import { ConsumerEntity } from "../consumer/consumer.entity";
import { VendorEntity } from "../vendors/vendor.entity";

@Service()
export class AuthService {
  async createUserToken(userId: number) {
    const data: TokenData = { userId };

    const consumer = await AppDataSource.getRepository(ConsumerEntity).findOne({
      where: { user: { id: userId } },
    });
    if (consumer) data.consumerId = consumer.id;

    const vendor = await AppDataSource.getRepository(VendorEntity).findOne({
      where: { user: { id: userId } },
    });
    if (vendor) data.vendorId = vendor.id;

    const token = jwt.sign(data, AUTH_CONFIG.jwtSecret, {
      expiresIn: AUTH_CONFIG.jwtExpiresIn,
    });
    return token;
  }
}

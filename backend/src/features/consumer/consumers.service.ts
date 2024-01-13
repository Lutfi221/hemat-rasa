import { AppDataSource } from "@/data-source";
import { Service } from "typedi";
import { ConsumerEntity } from "./consumer.entity";
import { UserEntity } from "../users/user.entity";
import { CartEntity } from "../orders/entities/cart.entity";

@Service()
export class ConsumersService {
  public async createConsumer(userId: number) {
    const consumer = new ConsumerEntity();
    const user = new UserEntity();
    user.id = userId;
    consumer.user = user;

    await AppDataSource.transaction(async (manager) => {
      await manager.save(consumer);

      const cart = new CartEntity();
      cart.consumer = consumer;
      await manager.save(cart);
    });

    return consumer;
  }
}

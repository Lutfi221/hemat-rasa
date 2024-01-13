import { AppDataSource } from "@/data-source";
import { Service } from "typedi";
import { OrderEntity } from "../entities/order.entity";
import { OrderLineEntity } from "../entities/order-line.entity";
import { CreateOrderLineDto } from "../dtos/order-line.dto";
import { ProductEntity } from "@/features/inventories/entities/product.entity";
import { ConsumerEntity } from "@/features/consumer/consumer.entity";

@Service()
export class OrdersService {
  public async createOrder(consumerId: number) {
    const order = new OrderEntity();
    order.consumer = new ConsumerEntity();
    order.consumer.id = consumerId;

    return AppDataSource.getRepository(OrderEntity).save(order);
  }

  public async getOrder(orderId: number) {
    return AppDataSource.getRepository(OrderEntity).findOne({
      where: { id: orderId },
    });
  }

  public async createOrderLine(
    orderId: number,
    orderLineData: CreateOrderLineDto
  ) {
    const orderLine = new OrderLineEntity();
    orderLine.orderId = orderId;
    orderLine.quantity = orderLineData.quantity;

    let product: ProductEntity;
    let orderLineSaved: OrderLineEntity;

    await AppDataSource.transaction(async (manager) => {
      product = await AppDataSource.getRepository(ProductEntity).findOne({
        where: { id: orderLineData.productId },
      });
      orderLine.pricePerItem = product.price;
      orderLine.product = product;
      orderLineSaved = await manager.save(orderLine);
    });

    return orderLineSaved;
  }
}

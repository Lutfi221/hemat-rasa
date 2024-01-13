import { JsonController } from "routing-controllers";

@JsonController("/orders/:orderId/order-lines/:orderLineId")
export class OrderLinesController {}

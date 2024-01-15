export const ORDER_STATUSES = [
  "PENDING",
  "WAITING_PAYMENT",
  "CONFIRMED",
  "PROCESSING",
  "READY_FOR_PICKUP",
  "COMPLETED",
  "CANCELLED",
  "RETURNED",
] as const;

export type OrderStatus = (typeof ORDER_STATUSES)[number];

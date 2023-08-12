import { OrderStatus } from 'src/order/entities/order.entity';

export class OrderStatusUpdatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly status: OrderStatus,
  ) {}
}

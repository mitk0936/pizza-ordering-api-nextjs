import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { OrderStatusUpdatedEvent } from 'src/common/events/order-status-updated.event';

@EventsHandler(OrderStatusUpdatedEvent)
export class OrderStatusUpdateHandler
  implements IEventHandler<OrderStatusUpdatedEvent>
{
  handle(event: OrderStatusUpdatedEvent) {
    console.log(
      `PaymentStatus for OrderID ${event.orderId} updated to ${event.status}`,
    );
  }
}

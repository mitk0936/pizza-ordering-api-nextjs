import { BadRequestException } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { OrderStatusUpdatedEvent } from 'src/common/events/order-status-updated.event';
import { OrderStatus } from 'src/order/entities/order.entity';
import { OrderStateMachineService } from 'src/order/services/order-state-transitions.service';
import { OrderStoreService } from 'src/order/services/order-store.service';

@EventsHandler(OrderStatusUpdatedEvent)
export class OrderStatusUpdateHandler
  implements IEventHandler<OrderStatusUpdatedEvent>
{
  constructor(
    private readonly orderStoreService: OrderStoreService,
    private readonly orderStateMachineService: OrderStateMachineService,
  ) {}

  paymentStatuses: OrderStatus[] = [
    OrderStatus.FailedPayment,
    OrderStatus.Paid,
  ];

  handle(event: OrderStatusUpdatedEvent) {
    const order = this.orderStoreService.findOne(event.orderId);

    if (!order) {
      throw new BadRequestException(
        'Trying to update order that does not exist.',
      );
    }

    if (
      !this.orderStateMachineService.canTransition(order.status, event.status)
    ) {
      throw new BadRequestException('Trying to set invalid order status.');
    }

    this.orderStoreService.update(event.orderId, {
      status: event.status,
      statusHistory: [...order.statusHistory, event.status],
    });
  }
}

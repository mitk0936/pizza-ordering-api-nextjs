import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { CompleteOrderCommand } from 'src/order/commands/complete-order.command';
import { OrderStatusUpdatedEvent } from 'src/common/events/order-status-updated.event';
import { OrderStatus } from 'src/order/entities/order.entity';

@CommandHandler(CompleteOrderCommand)
export class CompleteOrderCommandHandler
  implements ICommandHandler<CompleteOrderCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: CompleteOrderCommand) {
    const { orderId } = command;

    const event = new OrderStatusUpdatedEvent(orderId, OrderStatus.Completed);
    this.eventBus.publish(event);
  }
}

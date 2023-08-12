import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { OrderStatusUpdatedEvent } from 'src/common/events/order-status-updated.event';
import { OrderStatus } from 'src/order/entities/order.entity';
import { TakeOrderForDeliveryCommand } from 'src/order/commands/take-order-for-delivery.command';

@CommandHandler(TakeOrderForDeliveryCommand)
export class TakeOrderForDeliveryCommandHandler
  implements ICommandHandler<TakeOrderForDeliveryCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: TakeOrderForDeliveryCommand) {
    const { orderId } = command;

    const event = new OrderStatusUpdatedEvent(orderId, OrderStatus.Delivering);
    this.eventBus.publish(event);
  }
}

import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { TakeOrderInKitchenCommand } from 'src/order/commands/take-order-in-kitchen.command';
import { OrderStatusUpdatedEvent } from 'src/common/events/order-status-updated.event';
import { OrderStatus } from 'src/order/entities/order.entity';

@CommandHandler(TakeOrderInKitchenCommand)
export class TakeOrderInKitchenHandler
  implements ICommandHandler<TakeOrderInKitchenCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: TakeOrderInKitchenCommand) {
    const { orderId } = command;

    const event = new OrderStatusUpdatedEvent(orderId, OrderStatus.Cooking);
    this.eventBus.publish(event);
  }
}

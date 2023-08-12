import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { OrderStatusUpdatedEvent } from 'src/common/events/order-status-updated.event';
import { OrderStatus } from 'src/order/entities/order.entity';
import { SetOrderReadyForDeliveryCommand } from 'src/order/commands/set-ready-for-delivery.command';

@CommandHandler(SetOrderReadyForDeliveryCommand)
export class SetOrderReadyForDeliveryCommandHandler
  implements ICommandHandler<SetOrderReadyForDeliveryCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: SetOrderReadyForDeliveryCommand) {
    const { orderId } = command;

    const event = new OrderStatusUpdatedEvent(
      orderId,
      OrderStatus.ReadyForDelivery,
    );
    this.eventBus.publish(event);
  }
}

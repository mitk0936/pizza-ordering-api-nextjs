import { EventBus } from '@nestjs/cqrs';

import { Controller, Post, Body } from '@nestjs/common';
import { PaymentStatus, PaymentWebhookDto } from './dto/payment-webhook.dto';
import { OrderStatusUpdatedEvent } from 'src/common/events/order-status-updated.event';
import { OrderStatus } from 'src/order/entities/order.entity';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly eventBus: EventBus) {}

  @Post('webhook')
  handlePaymentWebhook(@Body() payload: PaymentWebhookDto): PaymentWebhookDto {
    const orderStatus: OrderStatus = Boolean(
      payload.status === PaymentStatus.Success,
    )
      ? OrderStatus.Paid
      : OrderStatus.FailedPayment;

    // Probably save transactionId and orderId relation somewhere

    // Probably need to check if the order exists, and the amount is same
    this.eventBus.publish(
      new OrderStatusUpdatedEvent(payload.orderId, orderStatus),
    );

    return payload;
  }
}

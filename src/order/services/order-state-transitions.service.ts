import { Injectable } from '@nestjs/common';
import { OrderStatus } from '../entities/order.entity';

@Injectable()
export class OrderStateMachineService {
  private readonly transitions = new Map<OrderStatus, OrderStatus[]>([
    [
      OrderStatus.ProcessingPayment,
      [OrderStatus.Paid, OrderStatus.FailedPayment],
    ],
    [OrderStatus.Paid, [OrderStatus.Cooking]],
    [OrderStatus.Cooking, [OrderStatus.ReadyForDelivery]],
    [OrderStatus.ReadyForDelivery, [OrderStatus.Delivering]],
    [OrderStatus.Delivering, [OrderStatus.Completed]],
  ]);

  public canTransition(
    currentStatus: OrderStatus,
    targetStatus: OrderStatus,
  ): boolean {
    const allowedTransitions = this.transitions.get(currentStatus);
    return allowedTransitions?.includes(targetStatus) ?? false;
  }
}

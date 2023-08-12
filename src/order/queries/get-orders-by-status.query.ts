import { IsEnum } from 'class-validator';
import { OrderStatus } from '../entities/order.entity';

export class StatusParamDto {
  @IsEnum(OrderStatus)
  status: OrderStatus;
}

export class GetOrdersByStatusQuery {
  @IsEnum(OrderStatus)
  public readonly status: OrderStatus;

  constructor(status: OrderStatus) {
    this.status = status;
  }
}

import { IsString } from 'class-validator';

export class CompleteOrderCommand {
  @IsString()
  public readonly orderId: string;

  constructor(orderId: string) {
    this.orderId = orderId;
  }
}

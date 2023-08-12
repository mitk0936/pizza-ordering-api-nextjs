import { IsString } from 'class-validator';

export class TakeOrderForDeliveryCommand {
  @IsString()
  public readonly orderId: string;

  constructor(orderId: string) {
    this.orderId = orderId;
  }
}

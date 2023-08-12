import { IsString } from 'class-validator';

export class TakeOrderInKitchenCommand {
  @IsString()
  public readonly orderId: string;

  constructor(orderId: string) {
    this.orderId = orderId;
  }
}

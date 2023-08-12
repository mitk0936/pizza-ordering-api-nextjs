import { IsString } from 'class-validator';

export class SetOrderReadyForDeliveryCommand {
  @IsString()
  public readonly orderId: string;

  constructor(orderId: string) {
    this.orderId = orderId;
  }
}

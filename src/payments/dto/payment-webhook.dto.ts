import { IsNotEmpty, IsString, IsNumber, IsEnum } from 'class-validator';
import { Currency } from '../enums/currency.enum';

export enum PaymentStatus {
  Success = 'success',
  Fail = 'fail',
}

export class PaymentWebhookDto {
  @IsNotEmpty()
  @IsString()
  orderId: string;

  @IsNotEmpty()
  @IsEnum(PaymentStatus)
  status: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsEnum(Currency)
  currency: Currency;

  @IsNotEmpty()
  timestamp: Date;
}

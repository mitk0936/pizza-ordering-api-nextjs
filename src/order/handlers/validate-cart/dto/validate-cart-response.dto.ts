import { Currency } from 'src/payments/enums/currency.enum';

export class ValidateCartResponseDto {
  productIds: string[];
  totalPrice: number;
  currency: Currency;
}

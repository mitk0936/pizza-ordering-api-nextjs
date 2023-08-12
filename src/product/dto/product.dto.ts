import { Currency } from 'src/payments/enums/currency.enum';

export class ProductDto {
  id?: string;
  name: string;
  ingredients: string[];
  notes?: string;
  price: number;
  currency: Currency;
}

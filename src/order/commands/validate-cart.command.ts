import { Currency } from 'src/payments/enums/currency.enum';
import { IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class ValidateCartCommand {
  @IsArray()
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  public readonly productIds: string[];

  @IsEnum(Currency)
  public readonly currency: Currency;

  constructor(validateCart: ValidateCartCommand) {
    Object.assign(this, validateCart);
  }
}

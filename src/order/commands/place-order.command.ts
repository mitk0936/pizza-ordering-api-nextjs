import {
  IsArray,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';
import { GeolocationDto } from 'src/common/dto/geolocation.dto';

export class PlaceOrderCommand {
  @IsArray()
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  productIds: string[];

  @IsPhoneNumber()
  clientPhoneNumber: string;

  @ValidateNested({ each: true })
  @Type(() => GeolocationDto)
  deliveryAddress: GeolocationDto;

  constructor(PlaceOrder: PlaceOrderCommand) {
    Object.assign(this, PlaceOrder);
  }
}

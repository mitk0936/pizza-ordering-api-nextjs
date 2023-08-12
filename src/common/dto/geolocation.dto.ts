import { IsNumber, IsLatitude, IsLongitude } from 'class-validator';

export class GeolocationDto {
  @IsNumber()
  @IsLatitude() // Using class-validator's latitude decorator
  latitude: number;

  @IsNumber()
  @IsLongitude() // Using class-validator's longitude decorator
  longitude: number;
}

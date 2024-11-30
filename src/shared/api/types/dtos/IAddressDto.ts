import { type IGeoDto } from './IGeoDto';

export interface IAddressDto {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeoDto;
}

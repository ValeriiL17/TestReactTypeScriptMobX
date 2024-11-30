import { type IAddressDto } from './IAddressDto';
import { type ICompanyDto } from './ICompanyDto';

export interface IUserDto {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddressDto;
  phone: string;
  website: string;
  company: ICompanyDto;
}

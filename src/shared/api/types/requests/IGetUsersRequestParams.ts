import { type IAddressDto, type ICompanyDto } from '../dtos';

export interface IGetUsersRequestParams {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddressDto;
  phone: string;
  website: string;
  company: ICompanyDto;
}

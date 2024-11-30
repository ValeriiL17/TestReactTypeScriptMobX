import { type IUserDto } from '../api';
import { type ISelectableElement } from '../ui';

export class UserModel implements ISelectableElement {
  id: number;
  username: string;
  email: string;
  phone: string;
  website: string;
  companyName: string;

  constructor(dto: IUserDto) {
    this.id = dto.id;
    this.username = dto.username;
    this.email = dto.email;
    this.phone = dto.phone;
    this.website = dto.website;
    this.companyName = dto.company.name;
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.username;
  }
}

import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  password?: string;

  @property({
    type: 'string',
  })
  initials?: string;

  @property({
    type: 'string',
  })
  role?: string;


  constructor(data?: Partial<User>) {
    super(data);
  }
}

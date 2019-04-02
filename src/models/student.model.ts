import {Entity, model, property} from '@loopback/repository';

@model()
export class Student extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  initials?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'object',
  })
  assignments?: object;

  @property({
    type: 'object',
  })
  attempts?: object;


  constructor(data?: Partial<Student>) {
    super(data);
  }
}

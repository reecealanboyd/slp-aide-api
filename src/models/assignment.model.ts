import {Entity, model, property} from '@loopback/repository';

@model()
export class Assignment extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'object',
  })
  questions?: object;


  constructor(data?: Partial<Assignment>) {
    super(data);
  }
}

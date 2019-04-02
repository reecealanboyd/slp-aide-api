import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models';
import {MongoDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(
    @inject('datasources.MongoDS') dataSource: MongoDsDataSource,
  ) {
    super(User, dataSource);
  }
}

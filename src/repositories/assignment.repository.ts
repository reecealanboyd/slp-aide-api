import {DefaultCrudRepository} from '@loopback/repository';
import {Assignment} from '../models';
import {MongoDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AssignmentRepository extends DefaultCrudRepository<
  Assignment,
  typeof Assignment.prototype.id
> {
  constructor(
    @inject('datasources.MongoDS') dataSource: MongoDsDataSource,
  ) {
    super(Assignment, dataSource);
  }
}

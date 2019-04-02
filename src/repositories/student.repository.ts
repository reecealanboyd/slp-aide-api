import {DefaultCrudRepository} from '@loopback/repository';
import {Student} from '../models';
import {MongoDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.id
> {
  constructor(
    @inject('datasources.MongoDS') dataSource: MongoDsDataSource,
  ) {
    super(Student, dataSource);
  }
}

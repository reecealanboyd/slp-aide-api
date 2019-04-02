import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Assignment} from '../models';
import {AssignmentRepository} from '../repositories';

export class AssignmentController {
  constructor(
    @repository(AssignmentRepository)
    public assignmentRepository : AssignmentRepository,
  ) {}

  @post('/assignments', {
    responses: {
      '200': {
        description: 'Assignment model instance',
        content: {'application/json': {schema: {'x-ts-type': Assignment}}},
      },
    },
  })
  async create(@requestBody() assignment: Assignment): Promise<Assignment> {
    return await this.assignmentRepository.create(assignment);
  }

  @get('/assignments/count', {
    responses: {
      '200': {
        description: 'Assignment model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Assignment)) where?: Where,
  ): Promise<Count> {
    return await this.assignmentRepository.count(where);
  }

  @get('/assignments', {
    responses: {
      '200': {
        description: 'Array of Assignment model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Assignment}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Assignment)) filter?: Filter,
  ): Promise<Assignment[]> {
    return await this.assignmentRepository.find(filter);
  }

  @patch('/assignments', {
    responses: {
      '200': {
        description: 'Assignment PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() assignment: Assignment,
    @param.query.object('where', getWhereSchemaFor(Assignment)) where?: Where,
  ): Promise<Count> {
    return await this.assignmentRepository.updateAll(assignment, where);
  }

  @get('/assignments/{id}', {
    responses: {
      '200': {
        description: 'Assignment model instance',
        content: {'application/json': {schema: {'x-ts-type': Assignment}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Assignment> {
    return await this.assignmentRepository.findById(id);
  }

  @patch('/assignments/{id}', {
    responses: {
      '204': {
        description: 'Assignment PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() assignment: Assignment,
  ): Promise<void> {
    await this.assignmentRepository.updateById(id, assignment);
  }

  @put('/assignments/{id}', {
    responses: {
      '204': {
        description: 'Assignment PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() assignment: Assignment,
  ): Promise<void> {
    await this.assignmentRepository.replaceById(id, assignment);
  }

  @del('/assignments/{id}', {
    responses: {
      '204': {
        description: 'Assignment DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.assignmentRepository.deleteById(id);
  }
}

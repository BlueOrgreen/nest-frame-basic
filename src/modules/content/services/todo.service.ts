import { Injectable } from '@nestjs/common';
import { BaseService } from '~/modules/database/base';
import { TodoEntity } from '../entities';
import { TodoRepository } from '../repositories';


@Injectable()
export class TodoService extends BaseService<TodoEntity, TodoRepository>{
    constructor(protected repository: TodoRepository) {
        super(repository);
    }
}
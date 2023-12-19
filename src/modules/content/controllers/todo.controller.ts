import { Controller, Get, Query, SerializeOptions } from "@nestjs/common";
import { TodoService } from "../services";
import { QueryTagDto } from '../dtos';

@Controller('tags')
export class TodoController {
    constructor(protected service: TodoService) {}

    @Get()
    @SerializeOptions({ groups: ['tag-list'] })
    async list(
        @Query()
        options: QueryTagDto,
    ) {
        return this.service.paginate(options)
    }
} 
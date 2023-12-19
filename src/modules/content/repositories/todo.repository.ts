// import { BaseRepository } from '@/modules/database/base';
import { CustomRepository } from '~/modules/database/decorators';

import { TodoEntity } from '../entities';
import { BaseRepository } from '~/modules/database/base';

@CustomRepository(TodoEntity)
export class TodoRepository extends BaseRepository<TodoEntity> {
    protected _qbName = 'todo';

    buildBaseQB() {
        // 在查询之前先查询出评论数量在添加到commentCount字段上
        return this.createQueryBuilder('post');
    }
}

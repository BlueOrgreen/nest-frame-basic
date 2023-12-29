import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

import * as entities from './entities';

@Module({})
export class UserModule {
    static async forRoot() {
        return {
            module: UserModule,
            imports: [
                TypeOrmModule.forFeature(Object.values(entities)),
            ]
        }
    }
}

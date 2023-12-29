import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "../user/user.module";
import * as entities from './entities';

@Module({})
export class RbacModule {
    static async forRoot() {
        return {
            module: RbacModule,
            imports: [
                forwardRef(() => UserModule),
                TypeOrmModule.forFeature(Object.values(entities))
            ]
        }
    }
}
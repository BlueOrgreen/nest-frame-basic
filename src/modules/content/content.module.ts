import { DynamicModule, Module, ModuleMetadata, Provider, Type } from '@nestjs/common';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { ContentConfig } from './types';
import { DataSource, ObjectType } from 'typeorm';
import * as services from './services'
import * as controllers from './controllers';
import * as entities from './entities';
import * as repositories from './repositories';
import { CUSTOM_REPOSITORY_METADATA } from '../database/constants';
import { DatabaseModule } from '../database/database.module';

@Module({})
export class ContentModule {
    static forRoot(configRegister?: () => ContentConfig): DynamicModule {
        
        return {
            module: ContentModule,
            imports: [
                TypeOrmModule.forFeature(Object.values(entities)),
                DatabaseModule.forRepository(Object.values(repositories)),
            ],
            controllers: Object.values(controllers),
            providers: [
                ...Object.values(services)
            ],
            exports: [
                ...Object.values(services),
                // PostService,
                DatabaseModule.forRepository(Object.values(repositories)),
            ],
        };
    }

    static forRepository<T extends Type<any>>(
        repositories: T[],
        dataSourceName?: string,
    ): DynamicModule {
        const providers: Provider[] = [];

        for (const Repo of repositories) {
            const entity = Reflect.getMetadata(CUSTOM_REPOSITORY_METADATA, Repo);

            if (!entity) {
                continue;
            }

            providers.push({
                inject: [getDataSourceToken(dataSourceName)],
                provide: Repo,
                useFactory: (dataSource: DataSource): InstanceType<typeof Repo> => {
                    const base = dataSource.getRepository<ObjectType<any>>(entity);
                    return new Repo(base.target, base.manager, base.queryRunner);
                },
            });
        }
        return {
            exports: providers,
            module: DatabaseModule,
            providers,
        };
    }
}
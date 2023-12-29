import { Module } from '@nestjs/common';
import { ContentModule } from '~/modules/content/content.module';
import { CoreModule } from '~/modules/core/core.module';
import { database } from './config';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { AppFilter, AppIntercepter, AppPipe } from './modules/core/providers';
import { DatabaseModule } from '~/modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { RbacModule } from './modules/rabc/rabc.module';


@Module({
  imports: [
    ContentModule.forRoot(),
    CoreModule.forRoot(),
    UserModule.forRoot(),
    RbacModule.forRoot(),
    DatabaseModule.forRoot(database),
  ],
  providers: [
    {
        provide: APP_PIPE,
        useValue: new AppPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true,
            forbidUnknownValues: true,
            validationError: { target: false },
        }),
    },
    {
        provide: APP_INTERCEPTOR,
        useClass: AppIntercepter,
    },
    {
        provide: APP_FILTER,
        useClass: AppFilter,
    },
],
})
export class AppModule {}

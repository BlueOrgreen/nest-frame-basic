// import { DataSource, DataSourceOptions } from 'typeorm'
import { TypeOrmModuleOptions } from '@nestjs/typeorm';


export const database = (): TypeOrmModuleOptions => ({
    // charset: 'utf8mb4',
    // logging: ['error'],
    // type: 'mysql',
    // host: '127.0.0.1',
    // port: 3306,
    // username: 'root',
    // password: '12345678'
    // database: 'my-nest-pratice',
    // synchronize: true,
    // autoLoadEntities: true,
    charset: 'utf8mb4',
    logging: ['error'],
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '12345678',
    database: 'my-nest-pratice',
    // 以下为sqlite配置
    // type: 'better-sqlite3',
    // database: resolve(__dirname, '../../database.db'),
    synchronize: true,
    autoLoadEntities: true,
})
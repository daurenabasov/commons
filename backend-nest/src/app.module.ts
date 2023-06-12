import { UserRoles } from './roles/user-roles.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';

/**
 * декорат - это обертка которая добавляет классу или же функции какой то новый функционал
 */

// чтобы контроллер сработал нам необходимо зарегестрировать в модуле
@Module({
    controllers: [],
    providers: [], // в провайдеры помещаем сервисы с бизнес логикой ,
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles],// регистрируем модельки
            autoLoadModels: true,
        }),
        UsersModule,
        RolesModule,
    ],
})
export class AppModule { }

import { User } from './../users/users.model';
import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { UserRoles } from './user-roles.model';


// интерфейс для создания обьекта роли
interface RolesCreationAttrs {
    value: string;
    description: string;

}

@Table({ tableName: "roles" })// для того чтобы по итогу этот класс стал таблицой в базе помечаем декоратором Table
export class Role extends Model<Role, RolesCreationAttrs> {

    @ApiProperty({ example: "1", description: "это типо айдишник, нифигово да ?" })

    @Column({
        type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true
    })
    id: number;

    @ApiProperty({ example: "ADMIN", description: "уникальное значение роли пользователя" })

    @Column({
        type: DataType.STRING, unique: true, allowNull: false //<-  флаг не может быть пустым
    })
    value: string;

    @ApiProperty({ example: "Администатор", description: "описание роли" })

    @Column({
        type: DataType.STRING, allowNull: false
    })
    description: string;


    // связываем сущности и через  какую таблицу мы делаем 
    @BelongsToMany(()=> User,()=> UserRoles)
    users: User[]

}

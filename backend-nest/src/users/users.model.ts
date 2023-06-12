import { UserRoles } from './../roles/user-roles.model';
import { Role } from './../roles/roles.model';
import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';


// интерфейс для создания обьекта юзера 
interface UserCreationAttrs {
    email: string;
    password: string;

}

@Table({ tableName: "users" })// для того чтобы по итогу этот класс стал таблицой в базе помечаем декоратором Table
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: "1", description: "это типо айдишник, нифигово да ?" })
    @Column({
        type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true
    })
    id: number;
    @ApiProperty({ example: "lox@gmail.com", description: "это типо поле для почтового адреса" })
    @Column({
        type: DataType.STRING, unique: true, allowNull: false //<-  флаг не может быть пустым
    })
    email: string;
    @ApiProperty({ example: "adminAdmin", description: "это типо поле для пароля, предохраняйтесь" })
    @Column({
        type: DataType.STRING, allowNull: false
    })
    password: string;
    @ApiProperty({ example: "true", description: "ты бан хочешь?))))" })
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    banned: boolean;
    @ApiProperty({ example: "За то что ты чорт", description: "лох бан получил))))" })
    @Column({
        type: DataType.INTEGER, allowNull: true
    })
    banReason: string;


    // связываем сущности и через  какую таблицу мы делаем 
    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}

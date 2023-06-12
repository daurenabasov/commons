import { User } from './../users/users.model';
import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Role } from './roles.model';



// чтобы не засорять базу этими таблицами датами создания  и дату обновления  в опциях таблицы указываем createdAt и updatedAt: false
@Table({ tableName: "roles", createdAt: false, updatedAt: false })// для того чтобы по итогу этот класс стал таблицой в базе помечаем декоратором Table
export class UserRoles extends Model<UserRoles> {


    @Column({
        type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true
    })
    id: number;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.NUMBER
    })
    roleId: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.NUMBER
    })
    userId: number;


}

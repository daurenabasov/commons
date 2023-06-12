import { RolesService } from './../roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    // репозиторий потому что мы будем взаимодействовать с базы данных
    constructor(@InjectModel(User) private userRepository: typeof User, private roleService: RolesService) {

    }

    async createUsers(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)// обращение к базе данных 
        const role = await this.roleService.getRoleByValue("USER")
        await user.$set("roles", [role.id])// метод set позволяет позволяет перезаписать какое то поле и сразу обновить его в базе данных
        return user
    };


    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: { all: true } }) // получаем все
        return users
    }

}

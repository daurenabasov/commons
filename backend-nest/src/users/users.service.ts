import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    // репозиторий потому что мы будем взаимодействовать с базы данных
    constructor(@InjectModel(User) private userRepository: typeof User) {

    }

    async createUsers(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)// обращение к базе данных 
        return user
    }


    async getAllUsers() {
        const users = await this.userRepository.findAll() // получаем все
        return users
    }

}

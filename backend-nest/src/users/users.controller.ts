import { UsersService } from './users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags("Пользователи ")
@Controller('users')
export class UsersController {


    constructor(private usersService: UsersService) {

    }
    @ApiOperation({ summary: "Создание пользователя" })
    @ApiResponse({ status: 200, type: User })
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUsers(userDto)

        /**
         * нам необходимо дернуть метод из сервиса через DI
         */
    }

    @ApiOperation({ summary: "Получение  пользователей" })
    @ApiResponse({ status: 200, type: [User] })
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }

}

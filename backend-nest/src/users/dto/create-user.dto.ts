import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: "userName@email.com", description: "EMAIL" })
    readonly email: string;
    @ApiProperty({ example: "1234567", description: "password" })

    readonly password: string;
}

/**
 * в нашем случаи  дто будет содержать два поля маил и пароль
 */
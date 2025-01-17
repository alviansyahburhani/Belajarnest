import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDTO {
  @ApiProperty({
    description: 'Username pengguna',
    type: String,
    example: 'alvian',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'Password pengguna',
    type: String,
    example: 'password123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}

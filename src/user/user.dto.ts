import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
export class UserDto {
  @ApiProperty({ description: 'please enter your name' })
  @IsString()
  name?: string;
  @ApiProperty({ description: 'please enter your email' })
  @IsEmail()
  email: string;
}

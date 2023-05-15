import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNumber, IsString, IsHash } from 'class-validator';
export class UserDto {
  @ApiProperty({ description: 'please enter your name' })
  @IsString()
  name?: string;
  @ApiProperty({ description: 'please enter your email' })
  @IsEmail()
  @ApiProperty({ description: 'please enter your email' })
  email: string;
  @IsString()
  password_hash: string;
  @ApiProperty({ description: 'please enter your email' })
  @IsString()
  reset_token: string;
  @ApiProperty({ description: 'please enter your email' })
  @IsNumber()
  google_id: string;
  @ApiProperty({ description: 'please enter your email' })
  @IsDate()
  CreatedDate: Date;
  @ApiProperty({ description: 'please enter your email' })
  @IsDate()
  ModifiedDate: Date;
}

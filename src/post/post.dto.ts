import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PostDto {
  @ApiProperty({ description: 'please enter your title' })
  @IsString()
  title: string;

  @ApiPropertyOptional({ description: 'please enter your description' })
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'please enter your description' })
  @IsString()
  author_id?: number;
}

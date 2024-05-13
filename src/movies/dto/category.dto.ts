import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { MovieDto } from './movie.dto';
import { Type } from 'class-transformer';

export class CategoryDto {
  @IsOptional()
  id?: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true }) // Validação dos objetos dentro do array
  @Type(() => MovieDto)
  movies?: MovieDto[];
}

import {
  IsString,
  IsOptional,
  IsNumber,
  IsPositive,
  IsDateString,
  ArrayMinSize,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CategoryDto } from './category.dto';
import { ActorDto } from './actor.dto';

export class MovieDto {
  @IsOptional()
  id?: number;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  overview?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  rating?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  duration?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  releaseYear?: number;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true }) // Validação dos objetos dentro do array
  @Type(() => CategoryDto)
  categories?: CategoryDto[];

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true }) // Validação dos objetos dentro do array
  @Type(() => ActorDto)
  actors?: ActorDto[];

  @IsOptional()
  @IsDateString()
  createdAt?: Date;

  @IsOptional()
  @IsDateString()
  updatedAt?: Date;
}

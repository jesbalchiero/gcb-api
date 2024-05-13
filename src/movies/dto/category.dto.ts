import { MovieDto } from './movie.dto';

export class CategoryDto {
  id?: number;
  name: string;
  movies?: MovieDto[];
}

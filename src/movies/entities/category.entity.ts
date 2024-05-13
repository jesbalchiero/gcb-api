import { Movie } from './movie.entity';

export class Category {
  id?: number;
  name: string;
  movies?: Movie[];
}

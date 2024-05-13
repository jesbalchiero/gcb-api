import { Movie } from './movie.entity';

export class Actor {
  id?: number;
  name: string;
  movies?: Movie[];
}

import { MovieDto } from './movie.dto';

export class ActorDto {
  id?: number;
  name: string;
  movies?: MovieDto[];
}

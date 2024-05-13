import { CategoryDto } from './category.dto';
import { ActorDto } from './actor.dto';

export class MovieDto {
  id?: number;
  title: string;
  overview?: string;
  rating?: number;
  duration?: number;
  releaseYear?: number;
  language?: string;
  categories?: CategoryDto[];
  actors?: ActorDto[];
  createdAt?: Date;
  updatedAt?: Date;
}

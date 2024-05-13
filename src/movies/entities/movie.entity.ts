import { Category } from './category.entity';
import { Actor } from './actor.entity';

export class Movie {
  id?: number;
  title: string;
  overview?: string;
  rating?: number;
  duration?: number;
  releaseYear?: number;
  language?: string;
  categories?: Category[];
  actors?: Actor[];
  createdAt?: Date;
  updatedAt?: Date;
}

import { Injectable } from '@nestjs/common';
import { MovieDto } from './dto/movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(movieDto: MovieDto) {
    // Mapear os dados do CreateMovieDto para o formato esperado pelo Prisma
    const data = {
      title: movieDto.title,
      overview: movieDto.overview,
      rating: movieDto.rating,
      duration: movieDto.duration,
      releaseYear: movieDto.releaseYear,
      language: movieDto.language,
      categories: {
        connect: movieDto.categories.map((category) => ({ id: category.id })),
      },
      actors: {
        connect: movieDto.actors.map((actor) => ({ id: actor.id })),
      },
      createdAt: movieDto.createdAt,
      updatedAt: movieDto.updatedAt,
    };

    // Criar o filme usando o Prisma
    try {
      const movie = await this.prisma.movie.create({ data });
      return movie;
    } catch (e) {
      throw new ExceptionsHandler(e);
    }
  }

  findAll() {
    return `This action returns all movies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  async update(id: number, movieDto: MovieDto) {
    // Mapear os dados do CreateMovieDto para o formato esperado pelo Prisma
    const data = {
      id: id,
      title: movieDto.title,
      overview: movieDto.overview,
      rating: movieDto.rating,
      duration: movieDto.duration,
      releaseYear: movieDto.releaseYear,
      language: movieDto.language,
      categories: {
        connect: movieDto.categories.map((category) => ({ id: category.id })),
      },
      actors: {
        connect: movieDto.actors.map((actor) => ({ id: actor.id })),
      },
      createdAt: movieDto.createdAt,
      updatedAt: movieDto.updatedAt,
    };

    // Criar o filme usando o Prisma
    try {
      const movie = await this.prisma.movie.update({ where: { id }, data });
      return movie;
    } catch (e) {
      throw new ExceptionsHandler(e);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}

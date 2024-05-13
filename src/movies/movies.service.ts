import { Injectable } from '@nestjs/common';
import { MovieDto } from './dto/movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(movieDto: MovieDto) {
    try {
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

      const createdMovie = await this.prisma.movie.create({
        data,
      });

      return createdMovie;
    } catch (e) {
      throw new Error(`Error creating the movie: ${e.message}`);
    }
  }

  async findAll() {
    try {
      return await this.prisma.movie.findMany({
        orderBy: {
          id: 'desc',
        },
      });
    } catch (e) {
      throw new Error(`Error finding all movies: ${e.message}`);
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prisma.movie.findUnique({
        where: {
          id: id,
        },
      });

      return user;
    } catch (e) {
      throw new Error(`Error finding the movie by ID: ${e.message}`);
    }
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

import { Injectable } from '@nestjs/common';
import { Theme } from './entities/theme.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ThemesService {
  constructor(
    @InjectRepository(Theme)
    private readonly themeRepository: Repository<Theme>,
  ) { }

  async create(theme: Theme): Promise<Theme> {
    return await this.themeRepository.save(theme);
  }

  async findAll(): Promise<Theme[]> {
    return await this.themeRepository.find();
  }

  async findOne(id: number): Promise<Theme> {
    return await this.themeRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTheme: Theme): Promise<Theme> {
    await this.themeRepository.update(id, updateTheme);
    return await this.themeRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.themeRepository.delete(id);
  }
}

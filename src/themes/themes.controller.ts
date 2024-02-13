import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThemesService } from './themes.service';
import { Theme } from './entities/theme.entity';

@Controller('themes')
export class ThemesController {
  constructor(private readonly themesService: ThemesService) { }

  @Post()
  create(@Body() theme: Theme): Promise<Theme> {
    return this.themesService.create(theme);
  }

  @Get()
  findAll(): Promise<Theme[]> {
    return this.themesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Theme> {
    return this.themesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTheme: Theme): Promise<Theme> {
    return this.themesService.update(+id, updateTheme);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.themesService.remove(+id);
  }
}

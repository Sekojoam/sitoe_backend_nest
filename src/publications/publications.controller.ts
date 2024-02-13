import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { Publication } from './entities/publication.entity';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) { }

  @Post()
  create(@Body() publication: Publication): Promise<Publication> {
    return this.publicationsService.create(publication);
  }

  @Get()
  findAll(): Promise<Publication[]> {
    return this.publicationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Publication> {
    return this.publicationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePublication: Publication): Promise<Publication> {
    return this.publicationsService.update(+id, updatePublication);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.publicationsService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { Publication } from './entities/publication.entity';
import { Not, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PublicationsService {
  constructor(
    @InjectRepository(Publication)
    private readonly publicationRepository: Repository<Publication>,
  ) { }

  async create(publication: Publication): Promise<Publication> {
    return await this.publicationRepository.save(publication);
  }

  async findAll(): Promise<Publication[]> {
    return await this.publicationRepository.find({ relations: ['theme'] });
  }

  async findOne(id: number): Promise<Publication> {
    return await this.publicationRepository.findOne({ where: { id }, relations: ['theme'] });
  }

  async update(id: number, updatePublication: Publication): Promise<Publication> {
    await this.publicationRepository.update(id, updatePublication);
    return await this.publicationRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.publicationRepository.delete(id);
  }

  async getSuggestionsForPublication(publicationId: number): Promise<Publication[]> {
    console.log("publicationId " + publicationId)
    // Récupérer la publication actuelle
    const currentPublication = await this.publicationRepository.findOne({ where: { id: publicationId } });

    if (!currentPublication) {
      throw new Error(`Publication with id ${publicationId} not found`);
    }

    // Récupérer les publications les plus récentes, en excluant la publication actuelle
    const recentPublications = await this.publicationRepository.find({
      where: {
        id: Not(publicationId),
      },
      order: {
        createdAt: 'DESC',
      },
      take: 2,
    });

    return recentPublications;
  }
}

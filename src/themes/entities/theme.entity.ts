// theme.entity.ts
import { Publication } from 'src/publications/entities/publication.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Theme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @OneToMany(() => Publication, publications => publications.theme)
  publicationss: Publication[];
}

import { Theme } from "src/themes/entities/theme.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Publication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Theme, theme => theme.publicationss)
  theme: Theme;
}
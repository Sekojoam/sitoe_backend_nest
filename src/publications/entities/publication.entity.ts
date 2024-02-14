import { Theme } from "src/themes/entities/theme.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Publication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Theme, theme => theme.publications, { nullable: false })
  @JoinColumn()
  theme: Theme;
}
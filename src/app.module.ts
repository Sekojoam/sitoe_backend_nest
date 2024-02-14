import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publication } from './publications/entities/publication.entity';
import { Theme } from './themes/entities/theme.entity';
import { PublicationsController } from './publications/publications.controller';
import { ThemesController } from './themes/themes.controller';
import { PublicationsService } from './publications/publications.service';
import { ThemesService } from './themes/themes.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "mysql_db",
    port: 3307,
    database: process.env.MYSQL_DATABASE,
    entities: [Publication, Theme],
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    synchronize: true,
  }), TypeOrmModule.forFeature([Publication, Theme])],
  controllers: [AppController, PublicationsController, ThemesController],
  providers: [AppService, PublicationsService, ThemesService],
})
export class AppModule { }

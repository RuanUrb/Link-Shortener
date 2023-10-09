import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from './app.entity';

@Module({
  imports: [TypeOrmModule.forRoot({type: 'sqlite', database: 'db.sqlite', entities: [Link], synchronize: true}), TypeOrmModule.forFeature([Link])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

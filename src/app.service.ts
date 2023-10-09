import { Injectable } from '@nestjs/common';
import { Link } from './app.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import generateRandomSequence from './business-logic/getRandomSequence';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Link) private repo: Repository<Link>){}

  async getOriginalUrl(shortenedUrl: string){
    return await this.repo.findOneBy({shortenedUrl})
  }

  async shortenUrl(url: string){
    const shortenedUrl = generateRandomSequence()
    const newUrl = await this.repo.create({url, shortenedUrl})
    return this.repo.save(newUrl)
  }
}

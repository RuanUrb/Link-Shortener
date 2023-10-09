import { Injectable } from '@nestjs/common';
import { Link } from './app.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';


@Injectable()
export class AppService {
  constructor(@InjectRepository(Link) private repo: Repository<Link>){}

  getShortenedUrl(){}

  shortenUrl(){}
}

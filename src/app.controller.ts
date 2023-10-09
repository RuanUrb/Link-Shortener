import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ShortenUrlDto } from './dtos/shorten-url.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:shortenedUrl')
  getUrl(@Param('shortenedUrl') shortenedUrl: string) {
    //app redirecting service
  }

  @Post()
  shortenUrl(@Body() body: ShortenUrlDto){
    //app shortening service
  }
}

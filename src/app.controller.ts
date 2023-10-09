import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express'
import { AppService } from './app.service';
import { ShortenUrlDto } from './dtos/shorten-url.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:shortenedUrl')
  async redirectToUrl(@Param('shortenedUrl') shortenedUrl: string, @Res() res: Response) {
    const link = await this.appService.getOriginalUrl(shortenedUrl)
    if(link){
      res.redirect(link.url)
    }
    else{
      res.status(404).send('Url not found.')
    }
  }

  @Post()
  shortenUrl(@Body() body: ShortenUrlDto){
    return this.appService.shortenUrl(body.url)
  }
}

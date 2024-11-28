import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll() {
    return 'This action returns all messages';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a ${id} message`;
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Post()
  create(@Body() body: any) {
    return body;
  }
}

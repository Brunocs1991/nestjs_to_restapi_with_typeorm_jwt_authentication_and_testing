import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 5, offset = 5 } = pagination;
    return {
      body: `return all messages. limit: ${limit}, offset: ${offset}`,
    };
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a ${id} message`;
  }
}

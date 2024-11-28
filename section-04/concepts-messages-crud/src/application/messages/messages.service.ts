import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MessagesService {
  private messages: any[] = [];

  findAll(limit: number, offset: number) {
    const messages = this.messages.slice(offset, offset + limit);
    if (messages.length === 0) {
      throw new HttpException('Message not found', HttpStatus.NOT_FOUND);
    }
    return messages;
  }

  findOne(id: string) {
    const message = this.messages.find((message) => message.id === id);
    if (!message) {
      throw new HttpException('Message not found', HttpStatus.NOT_FOUND);
    }
    return message;
  }

  create(body: any) {
    body.id = uuidv4();
    this.messages.push(body);
    return body;
  }

  update(id: string, body: any) {
    const index = this.messages.findIndex((message) => message.id === id);
    if (index === -1) {
      throw new HttpException('Message not found', HttpStatus.NOT_FOUND);
    }
    this.messages[index] = {
      id,
      ...body,
    };
    return this.messages[index];
  }

  remove(id: string) {
    const index = this.messages.findIndex((message) => message.id === id);
    if (index === -1) {
      throw new HttpException('Message not found', HttpStatus.NOT_FOUND);
    }
    const removed = this.messages.splice(index, 1);
    return removed[0];
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../../domain/message';

@Injectable()
export class MessagesService {
  private messages: Message[] = [
    {
      id: uuidv4(),
      message: 'Hello World',
      from: 'John Doe',
      to: 'Jane Doe',
      read: false,
      createdAt: new Date(),
    },
  ];

  findAll(limit: number, offset: number) {
    return this.messages.slice(offset, offset + limit);
  }

  findOne(id: string) {
    const message = this.messages.find((message) => message.id === id);
    if (!message) {
      this.throwNotFound();
    }
    return message;
  }

  create(body: Message) {
    body.id = uuidv4();
    body.createdAt = new Date();
    this.messages.push(body);
    return body;
  }

  update(id: string, body: Partial<Message>) {
    const index = this.messages.findIndex((message) => message.id === id);
    if (index === -1) {
      this.throwNotFound();
    }
    this.messages[index] = {
      ...this.messages[index],
      ...body,
      id,
      updatedAt: new Date(),
    };
    return this.messages[index];
  }

  remove(id: string) {
    const index = this.messages.findIndex((message) => message.id === id);
    if (index === -1) {
      this.throwNotFound();
    }
    const removed = this.messages.splice(index, 1);
    return removed[0];
  }

  private throwNotFound() {
    throw new NotFoundException('Message not found');
  }
}

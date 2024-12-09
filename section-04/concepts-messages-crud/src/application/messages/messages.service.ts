import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../../domain/message';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

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
      updatedAt: undefined,
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

  create(createMessageDto: CreateMessageDto) {
    const newMessage: Message = {
      id: uuidv4(),
      ...createMessageDto,
      read: false,
      createdAt: new Date(),
      updatedAt: undefined,
    };
    this.messages.push(newMessage);
    return newMessage;
  }

  update(id: string, updateMessageDto: UpdateMessageDto) {
    const index = this.messages.findIndex((message) => message.id === id);
    if (index === -1) {
      this.throwNotFound();
    }
    this.messages[index] = {
      ...this.messages[index],
      ...updateMessageDto,
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

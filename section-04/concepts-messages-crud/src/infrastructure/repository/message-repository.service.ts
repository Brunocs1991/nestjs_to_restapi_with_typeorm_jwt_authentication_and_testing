import { Injectable, NotFoundException } from '@nestjs/common';
import { Message } from '../../domain/message';
import { IMessageRepository } from '../../domain/repository/i-message-repository.interface';

@Injectable()
export class MessageRepositoryService implements IMessageRepository {
  private messages: Message[] = [];

  create(message: Message): Promise<Message> {
    this.messages.push(message);
    return Promise.resolve(message);
  }

  findAll(limit: number, offset: number): Promise<Message[]> {
    return Promise.resolve(this.messages.slice(offset, offset + limit));
  }

  findOne(id: string): Promise<Message> {
    const message = this.messages.find((message) => message.id === id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return Promise.resolve(message);
  }

  remove(id: string): Promise<Message> {
    const index = this.messages.findIndex((message) => message.id === id);
    if (index === -1) {
      throw new NotFoundException('Message not found');
    }
    const removed = this.messages.splice(index, 1);
    return Promise.resolve(removed[0]);
  }

  update(id: string, message: Message): Promise<Message> {
    const index = this.messages.findIndex((msg) => msg.id === id);
    if (index === -1) {
      throw new NotFoundException('Message not found');
    }
    this.messages[index] = {
      ...this.messages[index],
      ...message,
      updatedAt: new Date(),
    };
    return Promise.resolve(this.messages[index]);
  }
}

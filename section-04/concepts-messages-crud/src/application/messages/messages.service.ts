import { Inject, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../../domain/message';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { IMessageRepository } from '../../domain/repository/i-message-repository.interface';

@Injectable()
export class MessagesService {
  constructor(
    @Inject('IMessageRepository')
    private readonly messageRepository: IMessageRepository,
  ) {}

  findAll(limit: number, offset: number) {
    return this.messageRepository.findAll(limit, offset);
  }

  async findOne(id: string) {
    return await this.messageRepository
      .findOne(id)
      .then()
      .catch((ex) => {
        throw ex;
      });
  }

  async create(createMessageDto: CreateMessageDto) {
    const newMessage: Message = {
      id: uuidv4(),
      ...createMessageDto,
      read: false,
      createdAt: new Date(),
      updatedAt: undefined,
    };
    return await this.messageRepository.create(newMessage);
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    const message: Message = await this.messageRepository
      .findOne(id)
      .then()
      .catch((ex) => {
        throw ex;
      });

    const updatedMessage = {
      ...message,
      ...updateMessageDto,
      updatedAt: new Date(),
    };
    return this.messageRepository.update(id, updatedMessage);
  }

  async remove(id: string) {
    return await this.messageRepository
      .remove(id)
      .then()
      .catch((ex) => {
        throw ex;
      });
  }
}

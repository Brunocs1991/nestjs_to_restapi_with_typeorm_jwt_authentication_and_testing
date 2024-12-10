import { Message } from '../message';

export interface IMessageRepository {
  findAll(limit: number, offset: number): Promise<Message[]>;

  findOne(id: string): Promise<Message>;

  create(message: Message): Promise<Message>;

  update(id: string, message: Message): Promise<Message>;

  remove(id: string): Promise<Message>;
}

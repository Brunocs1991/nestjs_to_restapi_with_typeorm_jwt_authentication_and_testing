import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessageRepositoryService } from '../../infrastructure/repository/message-repository.service';

@Module({
  controllers: [MessagesController],
  providers: [
    MessagesService,
    { provide: 'IMessageRepository', useClass: MessageRepositoryService },
  ],
})
export class MessagesModule {}

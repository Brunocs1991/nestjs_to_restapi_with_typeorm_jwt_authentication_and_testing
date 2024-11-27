import { Module } from '@nestjs/common';
import { ConceptsCreatedAutomaticController } from './concepts-created-automatic.controller';
import { ConceptsCreatedAutomaticService } from './concepts-created-automatic.service';

@Module({
  controllers: [ConceptsCreatedAutomaticController],
  providers: [ConceptsCreatedAutomaticService],
})
export class ConceptsCreatedAutomaticModule {}

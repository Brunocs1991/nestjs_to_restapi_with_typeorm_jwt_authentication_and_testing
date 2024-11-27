import { Module } from '@nestjs/common';
import { ConceptsCreatedAutomaticController } from './concepts-created-automatic.controller';

@Module({
  controllers: [ConceptsCreatedAutomaticController]
})
export class ConceptsCreatedAutomaticModule {}

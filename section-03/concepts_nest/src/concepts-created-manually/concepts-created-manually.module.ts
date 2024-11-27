import { Module } from '@nestjs/common';
import { ConceptsCreatedManuallyController } from './concepts-created-manually.controller';

@Module({
  imports: [],
  controllers: [ConceptsCreatedManuallyController],
  providers: [],
})
export class ConceptsCreatedManuallyModule {}

import { Module } from '@nestjs/common';
import { ConceptsCreatedManuallyController } from './concepts-created-manually.controller';
import { ConceptsCreatedManuallyService } from './concepts-created-manually.service';

@Module({
  imports: [],
  controllers: [ConceptsCreatedManuallyController],
  providers: [ConceptsCreatedManuallyService],
})
export class ConceptsCreatedManuallyModule {}

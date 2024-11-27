import { Controller, Get } from '@nestjs/common';
import { ConceptsCreatedManuallyService } from './concepts-created-manually.service';

@Controller('concepts-created-manually')
export class ConceptsCreatedManuallyController {
  constructor(
    private readonly conceptsCreatedManuallyService: ConceptsCreatedManuallyService,
  ) {}

  @Get()
  home(): string {
    return this.conceptsCreatedManuallyService.getHome();
  }
}

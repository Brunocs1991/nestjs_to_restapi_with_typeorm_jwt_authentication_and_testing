import { Controller, Get } from '@nestjs/common';

@Controller('concepts-created-manually')
export class ConceptsCreatedManuallyController {
  constructor() {}

  @Get()
  home(): string {
    return 'ConceptsCreatedManuallyController';
  }
}

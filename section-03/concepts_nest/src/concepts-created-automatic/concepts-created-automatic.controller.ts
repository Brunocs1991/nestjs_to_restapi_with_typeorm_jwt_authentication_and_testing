import { Controller, Get } from '@nestjs/common';
import { ConceptsCreatedAutomaticService } from './concepts-created-automatic.service';

@Controller('concepts-created-automatic')
export class ConceptsCreatedAutomaticController {
  constructor(
    private readonly conceptsCreatedAutomaticService: ConceptsCreatedAutomaticService,
  ) {}

  @Get()
  home() {
    return this.conceptsCreatedAutomaticService.getHome();
  }
}

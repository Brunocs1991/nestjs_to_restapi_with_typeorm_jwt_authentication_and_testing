import { Controller, Get } from '@nestjs/common';

@Controller('concepts-created-automatic')
export class ConceptsCreatedAutomaticController {
  @Get()
  home() {
    return 'Welcome to the concepts-created-automatic';
  }
}

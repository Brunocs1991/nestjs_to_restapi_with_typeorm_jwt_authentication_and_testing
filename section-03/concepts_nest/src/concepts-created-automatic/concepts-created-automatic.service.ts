import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsCreatedAutomaticService {
  getHome(): string {
    return 'Welcome to the concepts-created-automatic from service';
  }
}

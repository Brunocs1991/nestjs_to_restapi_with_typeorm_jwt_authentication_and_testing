import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsCreatedManuallyService {
  getHome(): string {
    return 'ConceptsCreatedManuallyController from service';
  }
}

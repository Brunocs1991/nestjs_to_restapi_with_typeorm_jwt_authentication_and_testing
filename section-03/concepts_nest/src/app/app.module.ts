import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceptsCreatedManuallyModule } from '../concepts-created-manually/concepts-created-manually.module';
import { ConceptsCreatedAutomaticModule } from '../concepts-created-automatic/concepts-created-automatic.module';

@Module({
  imports: [ConceptsCreatedManuallyModule, ConceptsCreatedAutomaticModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

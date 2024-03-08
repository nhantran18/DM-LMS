import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { OntologyService } from './ontology.service';

@Module({
  imports: [PrismaModule],
  providers: [OntologyService],
})
export class OntologyModule {}

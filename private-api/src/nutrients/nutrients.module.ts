import { Module } from '@nestjs/common';
import { NutrientsService } from './nutrients.service';
import { NutrientsController } from './nutrients.controller';

@Module({
  controllers: [NutrientsController],
  providers: [NutrientsService],
})
export class NutrientsModule {}

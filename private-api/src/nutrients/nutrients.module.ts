import { Module } from '@nestjs/common';
import { NutrientsService } from './nutrients.service';
import { NutrientsController } from './nutrients.controller';
import { Nutrient } from './entities/nutrient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Nutrient])],
  controllers: [NutrientsController],
  providers: [NutrientsService],
})
export class NutrientsModule {}

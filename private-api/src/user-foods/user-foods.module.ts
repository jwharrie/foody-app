import { Module } from '@nestjs/common';
import { UserFoodsService } from './user-foods.service';
import { UserFoodsController } from './user-foods.controller';
import { UserFood } from './entities/user-food.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserFood])],
  controllers: [UserFoodsController],
  providers: [UserFoodsService],
})
export class UserFoodsModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserFood } from './entities/user-food.entity';
import { Repository } from 'typeorm';
import { AddUserFoodDto } from './dto/add-user-food.dto';

@Injectable()
export class UserFoodsService {
  constructor(
    @InjectRepository(UserFood)
    private userFoodsRepository: Repository<UserFood>,
  ) {}

  findFoods(userId: number, skip = 0, take = 25) {
    return this.userFoodsRepository.find({
      relations: ['food'],
      where: { userId },
      skip,
      take,
    });
  }

  findFood(userId: number, foodId: number) {
    return this.userFoodsRepository.findOne({
      relations: ['food'],
      where: { userId, foodId },
    });
  }

  deleteFood(userId: number, foodId: number) {
    return this.userFoodsRepository.delete({
      userId,
      foodId,
    });
  }

  addFood(userId: number, foodId: number, addUserFoodDto: AddUserFoodDto) {
    return this.userFoodsRepository.insert({
      userId,
      foodId,
      ...addUserFoodDto,
    });
  }
}

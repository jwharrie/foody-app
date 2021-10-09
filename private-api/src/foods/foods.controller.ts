import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  HttpCode,
} from '@nestjs/common';
import { FoodsService } from './foods.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { PaginationHelper } from '../../libs/pagination-helper';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Post()
  create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodsService.create(createFoodDto);
  }

  @Get()
  findAll(
    @Query('search') search: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    const { skip, take } = PaginationHelper.getSkipTake(page, limit);
    return this.foodsService.findAll(search, skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.foodsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateFoodDto: UpdateFoodDto) {
    await this.foodsService.update(id, updateFoodDto);
    return this.foodsService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: number) {
    await this.foodsService.remove(id);
  }
}

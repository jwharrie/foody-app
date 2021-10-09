import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserFood } from './entities/user-food.entity';
import { UserFoodsController } from './user-foods.controller';
import { UserFoodsService } from './user-foods.service';

const mockRepository = jest.fn(() => ({
  metadata: {
    columns: [],
    relations: [],
  },
}));

describe('UsersController', () => {
  let controller: UserFoodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFoodsController],
      providers: [
        UserFoodsService,
        { provide: getRepositoryToken(UserFood), useClass: mockRepository },
      ],
    }).compile();

    controller = module.get<UserFoodsController>(UserFoodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserFood } from './entities/user-food.entity';
import { UserFoodsService } from './user-foods.service';

const mockRepository = jest.fn(() => ({
  metadata: {
    columns: [],
    relations: [],
  },
}));

describe('UserFoodsService', () => {
  let service: UserFoodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserFoodsService,
        { provide: getRepositoryToken(UserFood), useClass: mockRepository },
      ],
    }).compile();

    service = module.get<UserFoodsService>(UserFoodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Nutrient } from './entities/nutrient.entity';
import { NutrientsController } from './nutrients.controller';
import { NutrientsService } from './nutrients.service';

const mockRepository = jest.fn(() => ({
  metadata: {
    columns: [],
    relations: [],
  },
}));

describe('NutrientsController', () => {
  let controller: NutrientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutrientsController],
      providers: [
        NutrientsService,
        { provide: getRepositoryToken(Nutrient), useClass: mockRepository },
      ],
    }).compile();

    controller = module.get<NutrientsController>(NutrientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

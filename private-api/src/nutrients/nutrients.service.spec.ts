import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Nutrient } from './entities/nutrient.entity';
import { NutrientsService } from './nutrients.service';

const mockRepository = jest.fn(() => ({
  metadata: {
    columns: [],
    relations: [],
  },
}));

describe('NutrientsService', () => {
  let service: NutrientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NutrientsService,
        { provide: getRepositoryToken(Nutrient), useClass: mockRepository },
      ],
    }).compile();

    service = module.get<NutrientsService>(NutrientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

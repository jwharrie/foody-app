import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'food_nutrients' })
export class FoodNutrient extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column('int', { name: 'nutrient_id' })
  nutrientId: number;

  @Column('int', { name: 'food_id' })
  foodId: number;

  @Column('int', { name: 'amount_per_serving' })
  amountPerServing: number;

  @Column('int', { name: 'data_points' })
  dataPoints: number;

  @Column('varchar', { length: 255, name: 'footnote' })
  footnote: string;
}

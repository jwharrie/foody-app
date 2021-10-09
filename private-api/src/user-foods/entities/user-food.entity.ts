import { Food } from '../../foods/entities/food.entity';
import { User } from '../../users/entities/user.entity';
import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'user_foods' })
export class UserFood extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'food_id' })
  foodId: number;

  @Column('int', { name: 'servings_per_week' })
  servingsPerWeek: number;

  @ManyToOne(() => Food, (food) => food.userFoods)
  @JoinColumn({ name: 'food_id' })
  food: Food;

  @ManyToOne(() => User, (user) => user.userFoods)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

import { UserFood } from '../../user-foods/entities/user-food.entity';
import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'foods' })
export class Food extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column('varchar', { length: 255, name: 'description' })
  description: string;

  @Column('timestamp', { name: 'publication_date' })
  publicationDate: Date;

  @OneToMany(() => UserFood, (userFood) => userFood.food)
  userFoods: UserFood[];
}

import { UserFood } from '../../user-foods/entities/user-food.entity';
import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column('varchar', { length: 255, name: 'name' })
  name: string;

  @Column('varchar', { length: 255, name: 'email' })
  email: string;

  @OneToMany(() => UserFood, (userFood) => userFood.user)
  userFoods: UserFood[];
}

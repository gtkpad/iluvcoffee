import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  public async findAll(): Promise<Coffee[]> {
    return this.coffees;
  }

  public async findOne(id: string): Promise<Coffee> {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new HttpException(`Coffee ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return coffee;
  }

  public async create(createCoffeeDto: any): Promise<void> {
    this.coffees.push(createCoffeeDto);
  }

  public async update(id: string, updateCoffeeDto: any) {
    const existingCoffee = await this.findOne(id);
    if (existingCoffee) {
      //
    }
  }

  public async remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}

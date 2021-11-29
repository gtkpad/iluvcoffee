/* CoffeesController FINAL CODE */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  public async findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return await this.coffeesService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return await this.coffeesService.findOne(id);
  }

  @Post()
  public async create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return await this.coffeesService.create(createCoffeeDto);
    // return `This action creates a coffee`;
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return await this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.remove(id);
  }
}

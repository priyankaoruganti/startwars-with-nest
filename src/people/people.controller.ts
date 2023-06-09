import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PeopleService } from './people.service';
import { People } from './entities/people.entity';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  //get all People
  @Get()
  async findAll(): Promise<People[]> {
    return await this.peopleService.findAll();
  }

  //get one person
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<People> {
    return await this.peopleService.findOne(id);
  }

  //create a person
  @Post()
  async create(@Body() person: People): Promise<People> {
    return await this.peopleService.create(person);
  }
}

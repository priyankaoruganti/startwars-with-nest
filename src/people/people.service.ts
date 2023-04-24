import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { People } from './entities/people.entity';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private peopleRespository: Repository<People>,
  ) {}

  //get all people
  async findAll(): Promise<People[]> {
    return await this.peopleRespository.find();
  }

  //get one person
  async findOne(id: number): Promise<People> {
    return await this.peopleRespository.findOne({ where: { id } });
  }

  //create
  async create(person: People): Promise<People> {
    const newPerson = this.peopleRespository.create(person);
    return await this.peopleRespository.save(newPerson);
  }
}

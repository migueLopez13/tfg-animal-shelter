import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { States } from 'src/entities/states.entity';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';


@Injectable()
export class StatesService {

  constructor(
    @InjectRepository(States)
    private readonly states: Repository<States>,
  ) { }

  getStates = () => this.states.find()

  getStatesByCountry =
    (country_id: string) =>
      this.states.query(`select * from states where country_id=${country_id};`)

  getState = (id: string) =>
    this.states.query(`select * from states where id=${id};`)

}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cities } from 'src/entities/cities.entity';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';


@Injectable()
export class CitiesService {

  constructor(
    @InjectRepository(Cities)
    private readonly cities: Repository<Cities>,
  ) { }

  getCitiesByCountry =
    (country_id: string) => this.cities.find({ country_id } as FindManyOptions)

  getCitiesByState =
    (state_id: string) => this.cities.find({ state_id } as FindManyOptions)

  getCity = (id: string) => this.cities.findOne(id as FindOneOptions)

}

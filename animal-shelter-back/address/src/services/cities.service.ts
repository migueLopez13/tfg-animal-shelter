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
    (country_id: string) =>
      this.cities.query(`select * from cities where cities.country_id=${country_id};`)

  getCitiesByState =
    (state_id: string) =>
      this.cities.query(`select * from cities where state_id=${state_id};`)

  getCity = (id: string) =>
    this.cities.query(`select * from cities where id=${id};`)

}

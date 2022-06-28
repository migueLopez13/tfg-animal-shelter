import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Countries } from 'src/entities/countries.entity';
import { FindOneOptions, Repository } from 'typeorm';


@Injectable()
export class CountriesService {

  constructor(
    @InjectRepository(Countries)
    private readonly countries: Repository<Countries>,
  ) { }

  getCountries = () => this.countries.find()


  getCountry = (id: string) =>
    this.countries.query(`select * from countries where id=${id};`)

}
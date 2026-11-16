import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Injectable()
export class TravelService {
    private trips = [
    { id: 1, name: 'To China', price: 9000},
    { id: 2, name: 'To Morocco', price: 4000},
  ];
  create(createTravelDto: CreateTravelDto) {
    return 'This action adds a new travel';
  }

  findAll() {
    return this.trips;
  }

  findOne(id: number) {
    const t=this.trips.find(x => x.id === id);
    return t;
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}

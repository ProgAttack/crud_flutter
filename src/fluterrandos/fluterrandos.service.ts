import { Injectable } from '@nestjs/common';
import { CreateFluterrandoDto } from './dto/create-fluterrando.dto';
import { UpdateFluterrandoDto } from './dto/update-fluterrando.dto';

@Injectable()
export class FluterrandosService {
  create(createFluterrandoDto: CreateFluterrandoDto) {
    return 'This action adds a new fluterrando';
  }

  findAll() {
    return `This action returns all fluterrandos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fluterrando`;
  }

  update(id: number, updateFluterrandoDto: UpdateFluterrandoDto) {
    return `This action updates a #${id} fluterrando`;
  }

  remove(id: number) {
    return `This action removes a #${id} fluterrando`;
  }
}

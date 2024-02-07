import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FluterrandosService } from './fluterrandos.service';
import { CreateFluterrandoDto } from './dto/create-fluterrando.dto';
import { UpdateFluterrandoDto } from './dto/update-fluterrando.dto';

@Controller('fluterrandos')
export class FluterrandosController {
  constructor(private readonly fluterrandosService: FluterrandosService) {}

  @Post()
  create(@Body() createFluterrandoDto: CreateFluterrandoDto) {
    return this.fluterrandosService.create(createFluterrandoDto);
  }

  @Get()
  findAll() {
    return this.fluterrandosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fluterrandosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFluterrandoDto: UpdateFluterrandoDto) {
    return this.fluterrandosService.update(+id, updateFluterrandoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fluterrandosService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { FluterrandosService } from './fluterrandos.service';
import { FluterrandosController } from './fluterrandos.controller';

@Module({
  controllers: [FluterrandosController],
  providers: [FluterrandosService],
})
export class FluterrandosModule {}

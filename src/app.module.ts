import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FluterrandosModule } from './fluterrandos/fluterrandos.module';

@Module({
  imports: [FluterrandosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

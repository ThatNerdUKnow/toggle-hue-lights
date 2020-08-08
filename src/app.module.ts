import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HueModule } from './hue/hue.module';
import {ConfigModule} from "@nestjs/config"
import { RegisterModule } from './register/register.module';
@Module({
  imports: [HueModule,ConfigModule.forRoot(), RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

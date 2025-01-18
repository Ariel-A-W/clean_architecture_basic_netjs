import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST_SERVER || 'localhost',
      port: parseInt(process.env.PORT_DATABASE) || 5432,
      username: process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'root',
      database: process.env.DATABASE_NAME || 'enterprise',
      autoLoadModels: true,
      synchronize: false, // No recomendado en producción (colocar false).
    }),    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
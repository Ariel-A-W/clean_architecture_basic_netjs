import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { ClientesModel } from './domain/clientes/clientes.model';

import { ClienteRepository } from './infrastructure/clientes.repository';

import { ClientesController } from './application/clientes/clientes.controller';

@Module({
  imports: [
    // Archivo de configuraciones generales.
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // Conexión hacia la base de datos.
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
    // Añadir los modelos (dominio)
    SequelizeModule.forFeature([
      ClientesModel
    ]), 
  ],
  // Insertar Controladores
  controllers: [
    AppController, 
    ClientesController
  ],
  // Inyección de Dependencias
  providers: [
    AppService, 
    ClienteRepository
  ],
})
export class AppModule {}
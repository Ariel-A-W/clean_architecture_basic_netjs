import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(process.env.PORT_SERVER ?? 9999, () => {
    console.log(`===> Servidor corriendo en el Puerto: ${process.env.PORT_SERVER} <===`);
  });
}
bootstrap();

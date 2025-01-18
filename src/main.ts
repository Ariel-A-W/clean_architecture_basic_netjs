import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT_SERVER ?? 9999, () => {
    console.log(`===> Servidor corriendo en el Puerto: ${process.env.PORT_SERVER} <===`);
  });
}
bootstrap();

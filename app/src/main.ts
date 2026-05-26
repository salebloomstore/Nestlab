import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // SWAGGER
  const config = new DocumentBuilder()
    .setTitle('NestJS CRUD API')
    .setDescription('User CRUD API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);

  console.log(`Server running: http://localhost`);
  console.log(`Swagger: http://localhost/swagger`);
}
bootstrap();

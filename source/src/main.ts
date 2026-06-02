import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // SWAGGER
  const config = new DocumentBuilder()
    .setTitle('NestJS CRUD API')
    .setDescription('User CRUD API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(configService.get<string>('PORT_OF_NESTJS')!);

  console.log(`Server running: http://localhost`);
  console.log(`Swagger: http://localhost/swagger`);
}
void bootstrap();

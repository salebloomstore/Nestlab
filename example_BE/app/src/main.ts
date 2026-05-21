import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // =========================
  // ROOT ROUTE (/)
  // =========================
  app.getHttpAdapter().get('/', (req, res) => {
    res.json({
      status: 'ok',
      message: 'NestJS API is running',
      swagger: '/swagger'
    });
  });

  // =========================
  // SWAGGER
  // =========================
  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();

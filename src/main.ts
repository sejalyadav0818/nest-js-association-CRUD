import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setViewEngine('ejs');
  app.setBaseViewsDir(join(__dirname, '..', 'views'));


  //add validator
  app.useGlobalPipes(new ValidationPipe());
  //swagger
  const config = new DocumentBuilder()
    .setTitle('Prisma-nest-crud example')
    .setDescription('CRUD API using nest-prisma')
    .setVersion('1.0')
    .addTag('nest-Prisma')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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

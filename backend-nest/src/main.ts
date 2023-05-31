import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule); // создаем экземляр Nest

  const config = new DocumentBuilder().setTitle("NEST TOP").setDescription("Нест нифиговая штука ").setVersion("1.0.0").addTag("DADASHI").build() // буилд это паттерн который постепенно позволяет обьектам задавать какие то параметры
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("/api/docs", app, document)
  await app.listen(PORT, () => console.log(`server started ${PORT}`));
}

start();

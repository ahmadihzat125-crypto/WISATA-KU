import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'node:fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Konfigurasi DocumentBuilder (Langkah 3)
  const config = new DocumentBuilder()
    .setTitle('Destinasi API')
    .setDescription('Dokumentasi API untuk modul Destinasi')
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Ekspor dokumen OpenAPI ke swagger.json (Langkah 5)
  fs.writeFileSync('./swagger.json', JSON.stringify(document, null, 2));

  await app.listen(3000);
}
bootstrap();
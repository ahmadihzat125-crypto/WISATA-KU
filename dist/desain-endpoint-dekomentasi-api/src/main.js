"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const fs = require("node:fs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // Konfigurasi DocumentBuilder (Langkah 3)
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Destinasi API')
        .setDescription('Dokumentasi API untuk modul Destinasi')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    // Ekspor dokumen OpenAPI ke swagger.json (Langkah 5)
    fs.writeFileSync('./swagger.json', JSON.stringify(document, null, 2));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
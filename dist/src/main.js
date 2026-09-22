"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const fs = require("fs");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('WisataKu API')
        .setDescription('API untuk platform informasi dan reservasi destinasi wisata')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    // Langkah 5: ekspor dokumen OpenAPI ke file (berguna untuk lampiran Tugas 2)
    fs.writeFileSync('./openapi.json', JSON.stringify(document, null, 2));
    await app.listen(3000);
    console.log('Server berjalan di http://localhost:3000');
    console.log('Swagger UI di http://localhost:3000/api/docs');
}
bootstrap();
//# sourceMappingURL=main.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDestinasiDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_destinasi_dto_1 = require("./create-destinasi.dto");
// PartialType membuat seluruh field opsional — cocok untuk PATCH
class UpdateDestinasiDto extends (0, swagger_1.PartialType)(create_destinasi_dto_1.CreateDestinasiDto) {
}
exports.UpdateDestinasiDto = UpdateDestinasiDto;
//# sourceMappingURL=update-destinasi.dto.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinasiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_destinasi_dto_1 = require("./dto/create-destinasi.dto");
const update_destinasi_dto_1 = require("./dto/update-destinasi.dto");
let DestinasiController = class DestinasiController {
    constructor() {
        // Data dummy sementara — implementasi nyata dengan Prisma dibahas di Bab 3
        this.destinasiDummy = [
            { id: 1, nama: 'Pantai Kuta Mandalika', kategori: 'Pantai', hargaTiket: 15000 },
            { id: 2, nama: 'Bukit Merese', kategori: 'Bukit', hargaTiket: 10000 },
        ];
    }
    findAll(kategori, page) {
        if (kategori) {
            return this.destinasiDummy.filter((d) => d.kategori === kategori);
        }
        return this.destinasiDummy;
    }
    findOne(id) {
        return this.destinasiDummy.find((d) => d.id === Number(id)) ?? null;
    }
    create(dto) {
        const baru = { id: this.destinasiDummy.length + 1, ...dto };
        this.destinasiDummy.push(baru);
        return baru;
    }
    update(id, dto) {
        const index = this.destinasiDummy.findIndex((d) => d.id === Number(id));
        if (index === -1)
            return null;
        this.destinasiDummy[index] = { ...this.destinasiDummy[index], ...dto };
        return this.destinasiDummy[index];
    }
    remove(id) {
        this.destinasiDummy = this.destinasiDummy.filter((d) => d.id !== Number(id));
        return { message: `Destinasi dengan id ${id} berhasil dihapus (dummy)` };
    }
    findUlasan(id) {
        // Dummy — nantinya diambil dari tabel ulasan via Prisma
        return [
            { id: 1, destinasiId: Number(id), komentar: 'Pemandangannya bagus sekali', rating: 5 },
        ];
    }
};
exports.DestinasiController = DestinasiController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Menampilkan daftar destinasi wisata' }),
    (0, swagger_1.ApiQuery)({ name: 'kategori', required: false, description: 'Filter berdasarkan kategori' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, description: 'Nomor halaman untuk pagination' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daftar destinasi berhasil diambil' }),
    __param(0, (0, common_1.Query)('kategori')),
    __param(1, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DestinasiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menampilkan detail satu destinasi' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Detail destinasi ditemukan' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Destinasi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DestinasiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Menambahkan destinasi baru (khusus admin)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Destinasi berhasil dibuat' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Data tidak valid' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_destinasi_dto_1.CreateDestinasiDto]),
    __metadata("design:returntype", void 0)
], DestinasiController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mengubah sebagian data destinasi (khusus admin)' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Destinasi berhasil diperbarui' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Destinasi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_destinasi_dto_1.UpdateDestinasiDto]),
    __metadata("design:returntype", void 0)
], DestinasiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus destinasi (khusus admin)' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Destinasi berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Destinasi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DestinasiController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/ulasan'),
    (0, swagger_1.ApiOperation)({ summary: 'Menampilkan ulasan milik destinasi tertentu' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daftar ulasan berhasil diambil' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DestinasiController.prototype, "findUlasan", null);
exports.DestinasiController = DestinasiController = __decorate([
    (0, swagger_1.ApiTags)('Destinasi'),
    (0, common_1.Controller)('destinasi')
], DestinasiController);
//# sourceMappingURL=destinasi.controller.js.map
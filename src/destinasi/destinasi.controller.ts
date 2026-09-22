import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@ApiTags('Destinasi')
@Controller('destinasi')
export class DestinasiController {
  // Data dummy sementara — implementasi nyata dengan Prisma dibahas di Bab 3
  private destinasiDummy = [
    { id: 1, nama: 'Pantai Kuta Mandalika', kategori: 'Pantai', hargaTiket: 15000 },
    { id: 2, nama: 'Bukit Merese', kategori: 'Bukit', hargaTiket: 10000 },
  ];

  @Get()
  @ApiOperation({ summary: 'Menampilkan daftar destinasi wisata' })
  @ApiQuery({ name: 'kategori', required: false, description: 'Filter berdasarkan kategori' })
  @ApiQuery({ name: 'page', required: false, description: 'Nomor halaman untuk pagination' })
  @ApiResponse({ status: 200, description: 'Daftar destinasi berhasil diambil' })
  findAll(@Query('kategori') kategori?: string, @Query('page') page?: string) {
    if (kategori) {
      return this.destinasiDummy.filter((d) => d.kategori === kategori);
    }
    return this.destinasiDummy;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan detail satu destinasi' })
  @ApiParam({ name: 'id', example: 1 })
  @ApiResponse({ status: 200, description: 'Detail destinasi ditemukan' })
  @ApiResponse({ status: 404, description: 'Destinasi tidak ditemukan' })
  findOne(@Param('id') id: string) {
    return this.destinasiDummy.find((d) => d.id === Number(id)) ?? null;
  }

  @Post()
  @ApiOperation({ summary: 'Menambahkan destinasi baru (khusus admin)' })
  @ApiResponse({ status: 201, description: 'Destinasi berhasil dibuat' })
  @ApiResponse({ status: 400, description: 'Data tidak valid' })
  create(@Body() dto: CreateDestinasiDto) {
    const baru = { id: this.destinasiDummy.length + 1, ...dto };
    this.destinasiDummy.push(baru);
    return baru;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mengubah sebagian data destinasi (khusus admin)' })
  @ApiParam({ name: 'id', example: 1 })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil diperbarui' })
  @ApiResponse({ status: 404, description: 'Destinasi tidak ditemukan' })
  update(@Param('id') id: string, @Body() dto: UpdateDestinasiDto) {
    const index = this.destinasiDummy.findIndex((d) => d.id === Number(id));
    if (index === -1) return null;
    this.destinasiDummy[index] = { ...this.destinasiDummy[index], ...dto };
    return this.destinasiDummy[index];
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Menghapus destinasi (khusus admin)' })
  @ApiParam({ name: 'id', example: 1 })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil dihapus' })
  @ApiResponse({ status: 404, description: 'Destinasi tidak ditemukan' })
  remove(@Param('id') id: string) {
    this.destinasiDummy = this.destinasiDummy.filter((d) => d.id !== Number(id));
    return { message: `Destinasi dengan id ${id} berhasil dihapus (dummy)` };
  }

  @Get(':id/ulasan')
  @ApiOperation({ summary: 'Menampilkan ulasan milik destinasi tertentu' })
  @ApiParam({ name: 'id', example: 1 })
  @ApiResponse({ status: 200, description: 'Daftar ulasan berhasil diambil' })
  findUlasan(@Param('id') id: string) {
    // Dummy — nantinya diambil dari tabel ulasan via Prisma
    return [
      { id: 1, destinasiId: Number(id), komentar: 'Pemandangannya bagus sekali', rating: 5 },
    ];
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDestinasiDto {
  @ApiProperty({ example: 'Pantai Kuta', description: 'Nama destinasi wisata' })
  @IsString()
  @IsNotEmpty()
  nama: string = '';

  @ApiProperty({ example: 'Bali', description: 'Lokasi destinasi' })
  @IsString()
  @IsNotEmpty()
  lokasi: string = '';

  @ApiProperty({ example: 'Pantai pasir putih yang indah', description: 'Deskripsi singkat' })
  @IsString()
  @IsNotEmpty()
  deskripsi: string = '';
}
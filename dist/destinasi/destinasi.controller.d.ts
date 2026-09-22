import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';
export declare class DestinasiController {
    private destinasiDummy;
    findAll(kategori?: string, page?: string): {
        id: number;
        nama: string;
        kategori: string;
        hargaTiket: number;
    }[];
    findOne(id: string): {
        id: number;
        nama: string;
        kategori: string;
        hargaTiket: number;
    };
    create(dto: CreateDestinasiDto): {
        nama: string;
        kategori: string;
        hargaTiket: number;
        id: number;
    };
    update(id: string, dto: UpdateDestinasiDto): {
        id: number;
        nama: string;
        kategori: string;
        hargaTiket: number;
    };
    remove(id: string): {
        message: string;
    };
    findUlasan(id: string): {
        id: number;
        destinasiId: number;
        komentar: string;
        rating: number;
    }[];
}

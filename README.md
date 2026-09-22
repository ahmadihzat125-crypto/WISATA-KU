# WisataKu API — Latihan 2.4

Proyek ini adalah hasil pengerjaan Latihan 2.4 (Bab II: Perancangan Endpoint API & Dokumentasi OpenAPI/Swagger).

## Langkah 1 — Pasang dependensi

```
npm install
```

(Sudah tercantum di `package.json`: `class-validator`, `class-transformer`, `@nestjs/swagger`, `swagger-ui-express`, dll.)

## Langkah 2 — DTO

Sudah dibuat di `src/destinasi/dto/create-destinasi.dto.ts` dan `update-destinasi.dto.ts`, sesuai skema Bagian 2.3.2–2.3.3.

## Langkah 3 — Konfigurasi Swagger

Sudah dikonfigurasi di `src/main.ts` (`DocumentBuilder` + `SwaggerModule.setup`).

## Langkah 4 — Endpoint lengkap

`src/destinasi/destinasi.controller.ts` sudah berisi:
- `GET /destinasi` — daftar destinasi (dengan filter kategori)
- `GET /destinasi/:id` — detail satu destinasi
- `POST /destinasi` — tambah destinasi (admin)
- `PATCH /destinasi/:id` — ubah sebagian data (admin)
- `DELETE /destinasi/:id` — hapus destinasi (admin, dummy)
- `GET /destinasi/:id/ulasan` — ulasan milik destinasi tertentu

Semua masih pakai data dummy in-memory — implementasi Prisma dibahas di Bab 3.

## Langkah 5 — Ekspor openapi.json

Jalankan server:

```
npm run start:dev
```

Setiap kali server start, `openapi.json` otomatis ditulis ulang di root proyek (lihat kode di `main.ts`).

Buka:
- `http://localhost:3000/api/docs` — Swagger UI (ada tombol "Try it out")
- File `openapi.json` — untuk lampiran Tugas 2

## Tugas Terkait

Lampirkan `openapi.json` yang dihasilkan beserta tangkapan layar Swagger UI sebagai luaran Tugas 2: Desain Endpoint & Dokumentasi API.

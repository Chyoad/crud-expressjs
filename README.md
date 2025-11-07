# CRUD API Sederhana dengan Express, Prisma & MySQL

Proyek ini adalah implementasi API RESTful sederhana untuk operasi CRUD (Create, Read, Update, Delete) yang dibangun menggunakan Express.js, Prisma ORM, dan database MySQL. Arsitektur proyek ini disusun mengikuti prinsip Clean Architecture untuk memisahkan tanggung jawab (separation of concerns) dan meningkatkan maintainabilitas kode.

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:
-   [Node.js](https://nodejs.org/en/) (v16 atau lebih baru)
-   [NPM](https://www.npmjs.com/) (biasanya terinstal bersama Node.js)
-   Server [MySQL](https://www.mysql.com/) yang sedang berjalan

## Instalasi & Setup

1.  **Clone repository ini:**
    ```bash
    git clone https://github.com/Chyoad/crud-expressjs.git
    cd crud-expressjs
    ```

2.  **Install dependensi proyek:**
    ```bash
    npm install
    ```

3.  **Setup environment variables:**
    Buat file `.env` di root proyek dengan menyalin dari `.env.example` (jika ada) atau buat baru. Isi dengan konfigurasi koneksi database MySQL Anda.

    **.env**
    ```env
    # Ganti dengan kredensial database Anda
    DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"

    # Contoh:
    # DATABASE_URL="mysql://root:mysecretpassword@localhost:3306/express_clean_db"
    ```

4.  **Jalankan migrasi database:**
    Perintah ini akan membuat tabel-tabel di database Anda sesuai dengan skema yang ada di `prisma/schema.prisma`.
    ```bash
    npx prisma migrate dev
    ```
    Jika diminta, berikan nama untuk migrasi pertama Anda (misalnya, `init`).

5.  **Generate Prisma Client:**
    Meskipun `migrate dev` biasanya sudah melakukannya, ini adalah perintah untuk memastikan Prisma Client Anda selalu up-to-date dengan skema.
    ```bash
    npx prisma generate
    ```

## Menjalankan Aplikasi

Untuk menjalankan server dalam mode development (dengan auto-reload menggunakan Nodemon), gunakan perintah:
```bash
npm run dev
```
Server akan berjalan di http://localhost:3000 atau port yang Anda tentukan.

## Endpoint API
Semua endpoint memiliki prefix /api.

- POST /api/users - Membuat user baru.
  - Body:
    ```bash
    {
      "name": "Cahyo Adi",
      "email": "Cahyoadi@example.com"
    }
    ```
- GET /api/users - Mendapatkan semua user.
- GET /api/users/:id - Mendapatkan detail user berdasarkan ID.
- PATCH /api/users/:id - Mengubah detail user berdasarkan ID
  - Body:
    ```bash
    {
      "name": "Cahyo Adi",
      "email": "Cahyoadi@example.com"
    }
    ```
- DELETE /api/users/:id - Menghapus user berdasarkan ID

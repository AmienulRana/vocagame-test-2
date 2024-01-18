
## Getting Started

Pertama Clone repository ini ke lokal anda:

```bash
https://github.com/AmienulRana/vocagame-fe-test.git
```

Setelah Berhasil di clone jalankan perintah dibawah ini:

```bash
npm install
# or
yarn
```
Kemudian Jalankan Perintah di bawah ini untuk menjalankan aplikasi nya

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Flow Application
- Register
  1. Isi semua input yang tersedia, jika tidak maka form akan menampilkan error
  2. Setelah semua input diisi dan klik tombol 'Daftar Sekarang', Anda akan di redirect ke login page dan semua data akan disimpan ke global state menggunakan redux/redux-toolkit dan cookie  
- Login
  1. Isi input nama dan password pastikan memasukan nama dan password, sesuai dengan yang di register, kalau tidak maka akan ada alert error di aplikasi 
  2. Setelah Berhasil login maka akan ada cookie yang bernama userSession, ini adalah sesi user yang login dengan jangka waktu selama 1 menit
- Profile
  1. Semua data yang di register akan ditampilkan di halaman ini
  2. Anda juga bisa mengubah data profile anda, seperti nama dan password
  3. Jika anda mengubah nama dan password dan mencoba login kembali pastikan data yang di inputkan sesuai dengan perubahan terbaru yang anda lakukan
  4. Anda juga bisa logout dari halaman profile, dengan meng-click tombol logout yang ada di sampir kiri halaman

## Tech Stack
- Next.js 14
- Tailwind Css
- Reack hook form (for handling validation form)
- React hot toast

# Aplikasi Cuaca Jakarta

Aplikasi mobile berbasis **Ionic Vue** yang menampilkan data cuaca kota Jakarta secara real-time menggunakan API [Open-Meteo](https://open-meteo.com/). Data yang ditampilkan berupa suhu udara per jam dalam format tabel yang mudah dibaca.

## Fitur

- Menampilkan data suhu udara per jam untuk kota Jakarta
- Indikator warna pada badge suhu (biru = dingin, hijau = normal, oranye = panas)
- Tampilan loading saat data sedang dimuat
- Penanganan error jika data gagal dimuat
- Format waktu dalam bahasa Indonesia

## Teknologi yang Digunakan

| Teknologi | Versi |
|-----------|-------|
| Vue.js | ^3.3.0 |
| Ionic Vue | ^8.0.0 |
| Vue Router | ^4.2.0 |
| Axios | ^1.16.1 |
| TypeScript | ~5.9.0 |
| Vite | ^5.0.0 |

## Prasyarat

Pastikan sudah menginstal:
- [Node.js](https://nodejs.org/) (versi 18 atau lebih baru)
- npm atau yarn

## Instalasi

```bash
# Clone repositori
git clone <url-repositori>
cd PBPB_Tuweb2

# Instal dependensi
npm install
```

## Menjalankan Aplikasi

```bash
# Mode development
npm run dev
```

Buka browser dan akses `http://localhost:5173`.

```bash
# Build untuk produksi
npm run build

# Preview hasil build
npm run preview
```

## Pengujian

```bash
# Unit test dengan Vitest
npm run test:unit

# End-to-end test dengan Cypress
npm run test:e2e
```

## Linting

```bash
npm run lint
```

## Struktur Proyek

```
src/
├── main.ts                  # Entry point aplikasi
├── App.vue                  # Root component
├── router/
│   └── index.ts             # Konfigurasi routing
├── services/
│   └── WeatherAccess/
│       └── index.ts         # Service API cuaca (Open-Meteo)
├── views/
│   └── Home.vue             # Halaman utama data cuaca
└── theme/
    └── variables.css        # Variabel tema Ionic
```

## API

Aplikasi menggunakan API publik **Open-Meteo** tanpa autentikasi:

```
https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m
```

- **Latitude**: -6.2 (Jakarta)
- **Longitude**: 106.8 (Jakarta)
- **Parameter**: `temperature_2m` — suhu udara 2 meter di atas permukaan tanah (°C)

## Lisensi

Proyek ini dibuat untuk keperluan tugas perkuliahan **Pemrograman Berbasis Platform dan Berbasis Pemrograman (PBPB)** — Universitas Terbuka.

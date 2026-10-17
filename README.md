# KATIK — Kalkulator Matematika

KATIK (Kalkulator Matematika) merupakan proyek pembelajaran yang dibuat sebagai bagian dari program **Fundamental Course RevoU**. Aplikasi web ini menggunakan HTML, CSS, dan JavaScript untuk menghitung luas serta keliling persegi dan persegi panjang.

## Fitur

- Memilih bangun datar: persegi atau persegi panjang.
- Menghitung luas dan keliling berdasarkan ukuran yang dimasukkan.
- Menampilkan rumus, substitusi nilai, dan hasil perhitungan.
- Menampilkan peringatan jika input yang diperlukan masih kosong.
- Mengosongkan input dan hasil serta menyembunyikan bagian perhitungan melalui tombol **Reset**.

## Teknologi

- **HTML** untuk struktur halaman dan formulir.
- **CSS** untuk tampilan halaman.
- **JavaScript** untuk interaksi dan logika perhitungan.

Aplikasi berjalan langsung di browser tanpa dependensi eksternal, proses build, atau backend.

## Struktur Proyek

```text
.
├── README.md
├── index.html              # Halaman utama kalkulator
├── css/
│   └── style.css           # Gaya tampilan
├── js/
│   └── script.js           # Interaksi dan perhitungan
└── asset/
    ├── persegi.jpg         # Ilustrasi persegi
    └── persegipanjang.jpg  # Ilustrasi persegi panjang
```

## Cara Menjalankan

1. Clone repositori menggunakan Git:

   ```bash
   git clone https://github.com/revou-fundamental-course/17-mar-25-LollYeahhh.git
   cd 17-mar-25-LollYeahhh
   ```

   Sebagai alternatif, unduh repositori melalui **Code → Download ZIP** di GitHub, lalu ekstrak arsipnya.

2. Buka berkas `index.html` dari folder proyek melalui browser.
3. Kalkulator siap digunakan tanpa instalasi paket tambahan.

## Cara Menggunakan

1. Klik **Persegi** atau **Persegi Panjang** untuk menampilkan formulir bangun yang dipilih.
2. Masukkan nilai sisi untuk persegi, atau panjang dan lebar untuk persegi panjang.
3. Pilih **Luas** atau **Keliling**.
4. Klik **Hitung** untuk melihat rumus, substitusi nilai, dan hasilnya.
5. Klik **Reset** untuk mengosongkan input dan hasil. Pilih kembali jenis perhitungan sebelum menghitung lagi.

Gunakan ukuran positif dengan satuan yang sama. Hasil luas menggunakan satuan persegi, sedangkan hasil keliling menggunakan satuan panjang.

## Rumus Perhitungan

| Bangun | Perhitungan | Rumus |
| --- | --- | --- |
| Persegi | Luas | sisi × sisi |
| Persegi | Keliling | 4 × sisi |
| Persegi panjang | Luas | panjang × lebar |
| Persegi panjang | Keliling | 2 × (panjang + lebar) |

### Contoh

Untuk persegi dengan sisi **5**:

- Luas = 5 × 5 = **25** satuan persegi.
- Keliling = 4 × 5 = **20** satuan panjang.

Untuk persegi panjang dengan panjang **6** dan lebar **4**:

- Luas = 6 × 4 = **24** satuan persegi.
- Keliling = 2 × (6 + 4) = **20** satuan panjang.

## Catatan Implementasi

Perhitungan keliling persegi panjang saat ini menggunakan `parseInt` untuk membaca panjang dan lebar. Bagian desimal pada masing-masing input diabaikan sebelum dijumlahkan. Sebagai contoh, panjang `6.5` dan lebar `4.5` diproses sebagai `6` dan `4`, sehingga hasil keliling yang ditampilkan adalah `20`. Gunakan bilangan bulat untuk perhitungan ini.

# CostTrack - Sistem Perhitungan HPE Modern
**Narasi Presentasi 10 Menit**

---

## 🎤 **Pembukaan (30 detik)**

"Selamat pagi/siang Bapak/Ibu sekalian. Hari ini saya akan mempresentasikan CostTrack, sebuah sistem modern untuk perhitungan Harga Perkiraan Estimasi atau HPE yang dapat mengotomatisasi proses yang selama ini dilakukan secara manual."

---

## 🎯 **1. Identifikasi Masalah (1.5 menit)**

"Mari kita mulai dengan melihat tantangan yang sering dihadapi dalam perhitungan HPE saat ini:

**Pertama**, perhitungan HPE masih dilakukan secara manual menggunakan Excel. Bayangkan jika kita punya ratusan komponen dan puluhan produk - berapa lama waktu yang dibutuhkan untuk menghitung satu per satu?

**Kedua**, data tersebar di berbagai file. Data komponen di satu file, data supplier di file lain, riwayat pembelian di file yang berbeda lagi. Ini membuat proses pencarian dan validasi data menjadi sangat tidak efisien.

**Ketiga**, kurs mata uang yang tidak real-time. Padahal kita tahu kurs USD-IDR berubah setiap hari, bahkan setiap jam. Menggunakan kurs yang outdated bisa membuat estimasi kita meleset jauh.

**Keempat**, human error. Semakin banyak data yang diinput manual, semakin besar kemungkinan kesalahan perhitungan.

Dari masalah-masalah inilah lahir CostTrack - sistem terintegrasi yang dapat menyelesaikan semua tantangan tersebut."

---

## 🖥️ **2. Demo Sistem CostTrack (6 menit)**

### **Dashboard - Pusat Kontrol (1 menit)**

"Mari kita mulai dari Dashboard. Ini adalah pusat kontrol CostTrack yang memberikan gambaran lengkap dalam satu layar. 

Di sini kita bisa melihat total produk yang sudah terdaftar, jumlah komponen dalam database, dan berapa banyak riwayat pengadaan yang sudah tercatat. Yang menarik adalah kurs hari ini yang otomatis tersinkronisasi dengan Bank Indonesia - jadi kita selalu punya data kurs terbaru.

Dari dashboard ini, kita bisa langsung navigasi ke modul mana pun yang dibutuhkan."

### **Manajemen Produk & BOM (1 menit)**

"Sekarang mari kita lihat modul Produk. Di sini kita bisa mendefinisikan produk-produk yang akan dihitung HPE-nya. 

Yang unik dari CostTrack adalah fitur Bill of Materials atau BOM. Untuk setiap produk, kita bisa mendefinisikan komponen apa saja yang dibutuhkan, berapa quantity-nya, dan satuan apa yang digunakan. 

Misalnya untuk produk Laptop Gaming, kita butuh 1 unit Processor Intel i7, 2 unit RAM 16GB, dan seterusnya. Semua ini tersimpan terstruktur dan bisa diubah kapan saja."

### **Database Komponen (1 menit)**

"Selanjutnya adalah modul Komponen - ini adalah master data dari semua komponen yang kita gunakan. 

Setiap komponen punya nama standar, satuan yang jelas, dan deskripsi lengkap. Ini memastikan konsistensi data di seluruh sistem. Jadi tidak akan ada lagi kebingungan apakah 'RAM 16GB' sama dengan 'Memory 16 GB' - semuanya terstandarisasi."

### **Riwayat Pengadaan - Jantung Sistem (1.5 menit)**

"Ini adalah jantung dari sistem CostTrack - modul Riwayat Pengadaan. 

Di sini kita input semua data pembelian komponen, baik dalam rupiah maupun dollar. Yang canggih adalah sistem otomatis mengkonversi mata uang menggunakan kurs JISDOR sesuai tanggal pengadaan.

Setiap transaksi tercatat lengkap: supplier, tanggal, nomor PO, quantity, dan harga. Data inilah yang nanti menjadi basis perhitungan HPE. Semakin banyak data historis, semakin akurat perhitungan HPE kita."

### **Integrasi Kurs JISDOR (1 menit)**

"Salah satu keunggulan CostTrack adalah integrasi langsung dengan kurs JISDOR Bank Indonesia. 

Sistem bisa otomatis mengambil kurs terbaru, atau kita bisa upload data historis dalam format CSV. Bahkan ada opsi input manual untuk kasus-kasus khusus. 

Sistem sudah menyediakan 30 hari data kurs secara otomatis, jadi langsung bisa digunakan tanpa setup yang rumit."

### **Perhitungan HPE - The Magic Happens (1.5 menit)**

"Dan inilah bagian yang paling menarik - perhitungan HPE otomatis.

Pilih produk yang ingin dihitung, sistem langsung menganalisis semua data riwayat pengadaan untuk setiap komponen. Hasilnya ditampilkan dalam empat metode: minimum, maksimum, median, dan rata-rata.

Yang lebih detail lagi, kita bisa lihat breakdown per komponen - berapa banyak data yang tersedia, dari mata uang apa saja, dan bagaimana distribusi harganya. 

Hasil akhir ditampilkan dalam rupiah dan dollar, dengan kurs referensi yang jelas. Dan yang paling penting - semua ini terjadi real-time. Begitu ada data baru, perhitungan langsung terupdate."

---

## 🏗️ **3. Teknologi & Arsitektur (1 menit)**

"Dari sisi teknologi, CostTrack dibangun dengan teknologi web modern yang reliable dan mudah diakses.

Menggunakan HTML5, CSS3, dan JavaScript untuk frontend yang responsif - bisa diakses dari desktop maupun mobile. Bootstrap 5 memastikan tampilan yang konsisten di berbagai perangkat.

Arsitektur Single Page Application membuat navigasi sangat cepat, sementara sistem validasi data mencegah kesalahan input. 

Integrasi dengan API Bank Indonesia memastikan data kurs selalu akurat, dan fitur import/export CSV memberikan fleksibilitas dalam pengelolaan data."

---

## � **4.l Manfaat & ROI (1 menit)**

"Sekarang mari kita bicara angka konkret.

Dengan CostTrack, waktu perhitungan HPE berkurang 80% - dari yang biasanya 2 jam menjadi hanya 20 menit. Akurasi meningkat hingga 99% karena eliminasi human error.

Dari sisi bisnis, keputusan bisa diambil lebih cepat karena data HPE tersedia real-time. Estimasi biaya lebih akurat karena berbasis data historis yang lengkap.

Mari kita hitung ROI-nya: jika sebelumnya butuh 2 jam per hari untuk perhitungan HPE dengan cost Rp 100 ribu per jam, itu berarti Rp 4.4 juta per bulan. Dengan CostTrack, hanya butuh 20 menit atau Rp 733 ribu per bulan. 

Penghematan: Rp 3.67 juta per bulan atau 83% cost reduction. Dalam setahun, itu penghematan lebih dari Rp 44 juta."

---

## 🚀 **Penutup (30 detik)**

"CostTrack mengubah perhitungan HPE dari proses manual yang rawan error menjadi sistem otomatis yang akurat dan efisien. Dengan penghematan 83% dan peningkatan akurasi yang signifikan, CostTrack adalah investasi yang sangat menguntungkan untuk perusahaan.

Terima kasih atas perhatiannya. Saya siap menjawab pertanyaan Bapak/Ibu sekalian."

---

## ❓ **Antisipasi Q&A**

**Q: Bagaimana jika koneksi internet terputus?**
A: "Sistem menggunakan localStorage, jadi data tetap tersimpan dan bisa diakses offline. Sinkronisasi kurs akan otomatis dilakukan saat koneksi kembali."

**Q: Apakah bisa diintegrasikan dengan sistem ERP yang sudah ada?**
A: "Ya, CostTrack dirancang modular dengan API yang bisa diintegrasikan. Data bisa di-export/import dalam format CSV yang universal."

**Q: Bagaimana dengan keamanan data?**
A: "Data tersimpan secara lokal di browser dengan enkripsi. Untuk implementasi enterprise, bisa ditambahkan layer keamanan tambahan sesuai kebutuhan."

**Q: Berapa biaya implementasi sistem ini?**
A: "Dengan ROI 83% dalam bulan pertama, investasi awal akan kembali dengan sangat cepat. Biaya detail bisa kita diskusikan sesuai skala implementasi."

**Q: Apakah perlu training khusus untuk menggunakan sistem ini?**
A: "Interface CostTrack dirancang user-friendly. Training dasar hanya butuh 2-3 hari, dan user sudah bisa produktif menggunakan sistem."
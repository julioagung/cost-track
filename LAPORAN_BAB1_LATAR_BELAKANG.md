# BAB I
# PENDAHULUAN

## 1.1 Latar Belakang

Dalam era globalisasi dan digitalisasi saat ini, efisiensi operasional menjadi kunci utama keberhasilan suatu organisasi atau perusahaan. Salah satu aspek penting dalam manajemen operasional adalah kemampuan untuk melakukan estimasi biaya yang akurat dan cepat, khususnya dalam perhitungan Harga Perkiraan Estimasi (HPE). HPE merupakan komponen fundamental dalam proses pengadaan barang dan jasa yang memungkinkan organisasi untuk merencanakan anggaran, mengevaluasi penawaran vendor, dan membuat keputusan strategis yang tepat.

Perhitungan HPE yang akurat sangat bergantung pada ketersediaan data historis yang komprehensif, analisis tren harga komponen, dan pemahaman yang mendalam tentang fluktuasi nilai tukar mata uang. Dalam konteks Indonesia, dimana banyak komponen teknologi dan bahan baku diimpor menggunakan mata uang asing, terutama USD, faktor konversi mata uang menjadi sangat krusial dalam menentukan akurasi estimasi biaya.

Berdasarkan observasi di lapangan, sebagian besar organisasi masih mengandalkan metode manual dalam perhitungan HPE. Proses ini umumnya dilakukan menggunakan aplikasi spreadsheet seperti Microsoft Excel, dimana data komponen, harga historis, dan konversi mata uang dikelola secara terpisah dalam berbagai file. Pendekatan manual ini menimbulkan beberapa permasalahan signifikan yang berdampak pada efisiensi dan akurasi perhitungan.

**Permasalahan utama yang diidentifikasi meliputi:**

**Pertama**, ketidakefisienan waktu dalam proses perhitungan. Metode manual memerlukan waktu yang relatif lama, terutama ketika harus menghitung HPE untuk produk dengan Bill of Material (BOM) yang kompleks. Proses pencarian data komponen, validasi harga historis, dan konversi mata uang dapat memakan waktu berjam-jam untuk satu produk saja.

**Kedua**, fragmentasi data yang menyebabkan kesulitan dalam pengelolaan informasi. Data komponen tersimpan dalam satu file, data supplier di file lain, riwayat pembelian di lokasi yang berbeda, dan informasi kurs mata uang seringkali menggunakan sumber yang tidak konsisten. Kondisi ini menyulitkan proses validasi data dan meningkatkan risiko penggunaan informasi yang tidak akurat atau sudah kadaluarsa.

**Ketiga**, ketergantungan pada data kurs mata uang yang tidak real-time. Fluktuasi nilai tukar USD-IDR yang terjadi setiap hari, bahkan setiap jam, memiliki dampak signifikan terhadap akurasi perhitungan HPE. Penggunaan kurs yang tidak update dapat menyebabkan estimasi biaya yang meleset jauh dari kondisi pasar aktual, yang pada akhirnya berdampak pada keputusan strategis organisasi.

**Keempat**, tingginya potensi human error dalam proses input dan perhitungan manual. Semakin kompleks data yang harus diproses, semakin besar kemungkinan terjadinya kesalahan dalam input data, formula perhitungan, atau konversi mata uang. Kesalahan kecil dalam perhitungan dapat berakumulasi menjadi deviasi yang signifikan dalam hasil akhir HPE.

**Kelima**, keterbatasan dalam analisis data historis. Metode manual menyulitkan proses analisis tren harga, identifikasi pola pembelian, dan perhitungan statistik yang diperlukan untuk meningkatkan akurasi estimasi. Padahal, analisis data historis yang komprehensif dapat memberikan insight berharga untuk optimalisasi proses pengadaan.

Untuk mengatasi permasalahan tersebut, diperlukan solusi teknologi yang dapat mengintegrasikan seluruh proses perhitungan HPE dalam satu sistem yang terpadu. Sistem tersebut harus mampu mengelola data komponen secara terstruktur, menyimpan riwayat pengadaan dengan baik, mengintegrasikan data kurs mata uang secara real-time, dan melakukan perhitungan HPE secara otomatis dengan berbagai metode statistik.

Bank Indonesia sebagai bank sentral telah menyediakan layanan Jakarta Interbank Spot Dollar Rate (JISDOR) yang memberikan data kurs USD-IDR secara real-time melalui Application Programming Interface (API). Integrasi dengan layanan JISDOR dapat memastikan bahwa perhitungan HPE selalu menggunakan data kurs yang akurat dan terkini, sehingga meningkatkan reliabilitas estimasi biaya.

Perkembangan teknologi web modern, khususnya dalam bidang full-stack development, memungkinkan pengembangan aplikasi yang dapat diakses dari berbagai perangkat dan platform. Teknologi seperti Node.js, Express.js, dan MongoDB menyediakan foundation yang solid untuk membangun sistem informasi yang scalable, maintainable, dan user-friendly.

Berdasarkan analisis permasalahan dan ketersediaan teknologi pendukung tersebut, penelitian ini bertujuan untuk mengembangkan sistem informasi CostTrack yang dapat mengotomatisasi proses perhitungan HPE dengan integrasi real-time terhadap data kurs JISDOR Bank Indonesia. Sistem ini diharapkan dapat meningkatkan efisiensi operasional, mengurangi human error, dan memberikan hasil perhitungan HPE yang lebih akurat dan reliable.

CostTrack dirancang sebagai aplikasi web full-stack yang menggabungkan kemudahan akses berbasis web dengan kemampuan pemrosesan data yang robust. Sistem ini akan menyediakan fitur manajemen produk dengan Bill of Material (BOM), pengelolaan database komponen, pencatatan riwayat pengadaan, integrasi kurs JISDOR real-time, dan perhitungan HPE otomatis menggunakan berbagai metode statistik.

Implementasi sistem CostTrack diharapkan dapat memberikan kontribusi signifikan dalam meningkatkan efisiensi proses perhitungan HPE, mengurangi waktu yang diperlukan untuk estimasi biaya, dan meningkatkan akurasi hasil perhitungan melalui eliminasi human error dan penggunaan data kurs yang selalu terkini. Selain itu, sistem ini juga dapat menjadi foundation untuk pengembangan lebih lanjut dalam bidang sistem informasi manajemen pengadaan yang lebih komprehensif.

## 1.2 Rumusan Masalah

Berdasarkan latar belakang yang telah diuraikan, maka rumusan masalah dalam penelitian ini adalah:

1. Bagaimana merancang sistem informasi yang dapat mengintegrasikan data komponen, supplier, dan riwayat pengadaan dalam satu platform terpadu?

2. Bagaimana mengimplementasikan integrasi API JISDOR Bank Indonesia untuk memperoleh data kurs USD-IDR secara real-time dalam perhitungan HPE?

3. Bagaimana mengembangkan sistem yang dapat mengotomatisasi perhitungan HPE dengan metode statistik untuk meningkatkan efisiensi dan akurasi estimasi biaya?

## 1.3 Batasan Masalah

Untuk memfokuskan penelitian dan pengembangan sistem CostTrack, maka ditetapkan batasan masalah sebagai berikut:

1. Sistem hanya mencakup perhitungan HPE dan tidak meliputi proses pengadaan keseluruhan seperti tender atau evaluasi vendor

2. Integrasi kurs mata uang terbatas pada layanan JISDOR Bank Indonesia dengan konversi USD ke IDR saja

3. Perhitungan HPE menggunakan metode statistik dasar (rata-rata, median, weighted average) tanpa machine learning

4. Sistem dikembangkan sebagai aplikasi web berbasis Node.js, Express.js, dan MongoDB dengan akses melalui browser

5. Sistem dirancang untuk organisasi skala kecil hingga menengah dengan maksimal 1000 produk aktif dan struktur BOM hierarkis maksimal 3 level

## 1.4 Tujuan Penelitian

Penelitian ini bertujuan untuk:

1. Merancang dan mengimplementasikan sistem manajemen data terpadu untuk mengelola komponen, supplier, dan riwayat pengadaan

2. Mengintegrasikan API JISDOR Bank Indonesia untuk memperoleh data kurs USD-IDR secara real-time

3. Mengotomatisasi perhitungan HPE dengan algoritma yang menangani BOM hierarkis dan metode statistik

## 1.5 Manfaat Penelitian

Penelitian ini diharapkan dapat memberikan manfaat:

1. Meningkatkan efisiensi dan akurasi perhitungan HPE melalui otomatisasi proses dan eliminasi human error

2. Mengoptimalkan pengelolaan data dengan sistem terintegrasi yang menyediakan akses konsisten dan analisis data historis

3. Memberikan kontribusi teknologi berupa framework integrasi API eksternal dan referensi implementasi sistem informasi manajemen pengadaan

## 1.6 Sistematika Penulisan

Laporan penelitian ini disusun secara sistematis dalam lima bab dengan rincian sebagai berikut:

**BAB I: PENDAHULUAN**
Bab ini menguraikan latar belakang masalah yang mendasari penelitian, batasan masalah yang membatasi ruang lingkup penelitian, tujuan penelitian yang ingin dicapai, manfaat penelitian bagi berbagai pihak, dan sistematika penulisan laporan.

**BAB II: LANDASAN TEORI**
Bab ini membahas teori-teori dan konsep-konsep yang menjadi dasar penelitian, meliputi konsep Harga Perkiraan Estimasi (HPE), sistem informasi manajemen, teknologi web development, integrasi API, dan penelitian terkait yang relevan dengan topik penelitian.

**BAB III: METODOLOGI PENELITIAN**
Bab ini menjelaskan metode penelitian yang digunakan, desain sistem yang akan dikembangkan, arsitektur aplikasi, teknologi yang digunakan, tahapan pengembangan sistem, dan metode evaluasi yang akan diterapkan untuk mengukur keberhasilan sistem.

**BAB IV: HASIL DAN PEMBAHASAN**
Bab ini menyajikan hasil implementasi sistem CostTrack, analisis fitur-fitur yang telah dikembangkan, hasil pengujian sistem, evaluasi kinerja, dan pembahasan mengenai pencapaian tujuan penelitian serta perbandingan dengan metode manual.

**BAB V: PENUTUP**
Bab ini berisi kesimpulan dari hasil penelitian, saran untuk pengembangan lebih lanjut, dan rekomendasi untuk implementasi sistem dalam lingkungan organisasi yang sesungguhnya.
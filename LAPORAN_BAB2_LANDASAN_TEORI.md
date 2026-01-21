# BAB II
# LANDASAN TEORI

## 2.1 Perancangan Sistem

### 2.1.1 Pengertian Perancangan Sistem

Perancangan sistem merupakan tahapan krusial dalam pengembangan perangkat lunak yang berfungsi sebagai jembatan antara analisis kebutuhan dengan implementasi teknis. Menurut Kendall dan Kendall (2011), perancangan sistem adalah proses kreatif yang mentransformasikan kebutuhan pengguna menjadi spesifikasi teknis yang dapat diimplementasikan. Proses ini melibatkan serangkaian keputusan strategis mengenai arsitektur, komponen, modul, antarmuka, dan struktur data yang akan membentuk sistem informasi yang efektif dan efisien.

Dalam konteks pengembangan sistem informasi modern, perancangan sistem tidak hanya berfokus pada aspek fungsional, tetapi juga mempertimbangkan aspek non-fungsional seperti performa, keamanan, skalabilitas, dan maintainability. Perancangan yang baik akan menghasilkan sistem yang tidak hanya memenuhi kebutuhan saat ini, tetapi juga dapat beradaptasi dengan perubahan kebutuhan di masa depan tanpa memerlukan perubahan arsitektur yang fundamental.

Proses perancangan sistem melibatkan berbagai stakeholder termasuk analis sistem, arsitek software, developer, dan pengguna akhir. Kolaborasi yang efektif antar stakeholder ini sangat penting untuk memastikan bahwa sistem yang dirancang benar-benar memenuhi kebutuhan bisnis dan dapat diimplementasikan dengan teknologi yang tersedia. Dokumentasi yang komprehensif selama fase perancangan juga menjadi aset berharga untuk maintenance dan pengembangan sistem di masa depan.

### 2.1.2 Tujuan Perancangan Sistem

Perancangan sistem memiliki beberapa tujuan fundamental yang harus dicapai untuk memastikan keberhasilan implementasi sistem informasi. Tujuan pertama adalah memenuhi kebutuhan pengguna secara komprehensif. Hal ini mencakup identifikasi dan pemahaman mendalam terhadap kebutuhan fungsional yang spesifik, serta penerjemahan kebutuhan bisnis ke dalam spesifikasi teknis yang dapat diimplementasikan. Sistem yang dirancang harus mampu menyelesaikan masalah yang ada dan memberikan nilai tambah bagi organisasi.

Tujuan kedua adalah menghasilkan sistem yang berkualitas tinggi. Kualitas sistem diukur dari berbagai dimensi termasuk efisiensi dalam penggunaan sumber daya komputasi, reliabilitas dalam operasi sehari-hari, kemudahan dalam pemeliharaan dan pengembangan, serta user-friendliness yang memudahkan pengguna dalam berinteraksi dengan sistem. Sistem yang berkualitas akan mengurangi biaya operasional jangka panjang dan meningkatkan kepuasan pengguna.

Tujuan ketiga adalah meminimalkan risiko kegagalan implementasi. Melalui perancangan yang matang, potensi masalah dapat diidentifikasi sejak dini dan solusi preventif dapat direncanakan. Perancangan yang baik juga memastikan kelayakan teknis dan ekonomis dari sistem yang akan dibangun, sehingga investasi yang dilakukan organisasi dapat memberikan return yang optimal. Analisis risiko yang komprehensif selama fase perancangan akan menghasilkan sistem yang lebih robust dan dapat diandalkan.

### 2.1.3 Prinsip-prinsip Perancangan Sistem

Perancangan sistem yang efektif harus mengikuti sejumlah prinsip fundamental yang telah terbukti menghasilkan sistem yang berkualitas. Prinsip modularitas menekankan pentingnya memecah sistem menjadi modul-modul independen yang memiliki fungsi spesifik dan terdefinisi dengan jelas. Setiap modul dirancang untuk menjalankan tugas tertentu dan dapat dikembangkan, diuji, serta dipelihara secara independen. Pendekatan modular ini tidak hanya memudahkan proses development, tetapi juga meningkatkan reusability komponen dan mempermudah maintenance sistem di masa depan.

Prinsip abstraksi berfokus pada penyembunyian kompleksitas detail implementasi dari pengguna atau modul lain yang berinteraksi dengan sistem. Dengan menerapkan abstraksi yang tepat, sistem menjadi lebih mudah dipahami dan digunakan karena pengguna hanya perlu memahami interface dan fungsionalitas tanpa harus mengetahui detail teknis di baliknya. Abstraksi juga meningkatkan fleksibilitas sistem karena perubahan implementasi internal dapat dilakukan tanpa mempengaruhi komponen lain yang bergantung pada interface yang sama.

Prinsip enkapsulasi menggabungkan data dan fungsi yang beroperasi pada data tersebut dalam satu unit yang kohesif. Enkapsulasi melindungi data dari akses tidak sah dan memastikan bahwa data hanya dapat dimodifikasi melalui interface yang telah ditentukan. Hal ini meningkatkan security dan integrity data dalam sistem. Prinsip separation of concerns memisahkan berbagai aspek sistem berdasarkan fungsinya, seperti pemisahan antara presentation layer, business logic layer, dan data access layer. Pemisahan ini memudahkan development parallel, testing, dan maintenance karena perubahan pada satu layer tidak akan mempengaruhi layer lainnya secara langsung.

Prinsip scalability memastikan bahwa sistem dirancang dengan kemampuan untuk berkembang seiring dengan pertumbuhan kebutuhan organisasi. Sistem yang scalable dapat menangani peningkatan volume data, jumlah pengguna, dan kompleksitas operasi tanpa mengalami degradasi performa yang signifikan. Scalability dapat dicapai melalui horizontal scaling dengan menambah server atau vertical scaling dengan meningkatkan kapasitas server existing.


### 2.1.4 Tahapan Perancangan Sistem

Perancangan sistem dilakukan melalui serangkaian tahapan yang sistematis dan terstruktur. Tahap pertama adalah perancangan arsitektur yang menentukan struktur sistem secara keseluruhan. Pada tahap ini, arsitek sistem membuat keputusan strategis mengenai teknologi dan platform yang akan digunakan, pola arsitektur yang akan diterapkan seperti client-server atau microservices, serta mendefinisikan komponen-komponen utama sistem dan bagaimana komponen-komponen tersebut akan berinteraksi satu sama lain. Perancangan arsitektur yang baik akan menjadi fondasi yang solid untuk tahapan-tahapan selanjutnya.

Tahap kedua adalah perancangan database yang mencakup identifikasi entitas-entitas data yang akan disimpan dalam sistem, pendefinisian atribut untuk setiap entitas, penentuan relasi antar entitas, serta proses normalisasi untuk menghindari redundansi data. Perancangan database yang optimal akan memastikan integritas data, efisiensi query, dan kemudahan maintenance. Pemilihan jenis database, baik relational maupun non-relational, juga menjadi pertimbangan penting pada tahap ini berdasarkan karakteristik data dan kebutuhan aplikasi.

Tahap ketiga adalah perancangan interface yang meliputi user interface untuk interaksi dengan pengguna akhir dan application programming interface untuk komunikasi antar komponen sistem atau dengan sistem eksternal. Perancangan user interface harus mempertimbangkan prinsip-prinsip usability, accessibility, dan user experience untuk memastikan sistem mudah digunakan dan intuitif. Perancangan API harus mengikuti standar industri dan best practices untuk memastikan interoperability dan kemudahan integrasi.

Tahap keempat adalah perancangan proses yang mendefinisikan alur kerja bisnis dalam sistem, algoritma dan logika yang akan diimplementasikan, serta workflow yang mengatur urutan eksekusi berbagai operasi. Perancangan proses harus memastikan bahwa sistem dapat menangani berbagai skenario bisnis dengan efisien dan akurat. Dokumentasi yang detail mengenai proses bisnis akan memudahkan developer dalam implementasi dan memastikan konsistensi antara kebutuhan bisnis dengan implementasi teknis.

## 2.2 Pengembangan Sistem

### 2.2.1 Pengertian Pengembangan Sistem

Pengembangan sistem adalah proses komprehensif yang mencakup seluruh siklus hidup sistem informasi, mulai dari konsepsi ide, analisis kebutuhan, perancangan, implementasi, testing, deployment, hingga maintenance dan enhancement berkelanjutan. Menurut Pressman (2014), pengembangan sistem merupakan aktivitas rekayasa yang sistematis dan terstruktur untuk menciptakan atau memodifikasi sistem informasi yang memenuhi kebutuhan organisasi dengan memanfaatkan teknologi informasi yang tersedia.

Proses pengembangan sistem melibatkan berbagai disiplin ilmu termasuk software engineering, database management, network administration, dan project management. Keberhasilan pengembangan sistem sangat bergantung pada pemilihan metodologi yang tepat, kompetensi tim development, komunikasi yang efektif antar stakeholder, serta manajemen proyek yang baik. Pengembangan sistem modern juga harus mempertimbangkan aspek-aspek seperti security, privacy, compliance terhadap regulasi, dan sustainability.

Dalam era digital transformation, pengembangan sistem tidak lagi dipandang sebagai proyek one-time, tetapi sebagai proses continuous improvement yang harus dapat beradaptasi dengan perubahan kebutuhan bisnis dan perkembangan teknologi. Pendekatan agile dan DevOps telah menjadi mainstream dalam pengembangan sistem modern karena kemampuannya untuk deliver value secara incremental dan merespons perubahan dengan cepat.

### 2.2.2 Metodologi Pengembangan Sistem

Metodologi pengembangan sistem menyediakan framework dan panduan untuk mengelola proses development secara sistematis. Pemilihan metodologi yang tepat sangat penting karena akan mempengaruhi efisiensi development, kualitas produk akhir, dan kemampuan tim untuk merespons perubahan kebutuhan.

**Tabel 2.1 Perbandingan Metodologi Pengembangan Sistem**

| Aspek | Waterfall | Agile | Prototype |
|-------|-----------|-------|-----------|
| **Pendekatan** | Sequential, linear | Iterative, incremental | Iterative dengan fokus pada UI/UX |
| **Fleksibilitas** | Rendah, sulit mengakomodasi perubahan | Tinggi, mudah beradaptasi | Sedang, fokus pada refinement |
| **Dokumentasi** | Sangat lengkap dan detail | Minimal, fokus pada working software | Sedang, fokus pada feedback |
| **User Involvement** | Minimal, hanya di awal dan akhir | Tinggi, continuous collaboration | Tinggi, frequent review |
| **Delivery** | Single delivery di akhir proyek | Incremental delivery setiap sprint | Iterative delivery prototype |
| **Testing** | Di akhir development cycle | Continuous testing setiap sprint | Testing pada setiap iterasi |
| **Cocok untuk** | Requirements jelas dan stabil | Requirements dinamis | Requirements tidak jelas |
| **Risiko** | Tinggi jika requirements berubah | Rendah, adaptif terhadap perubahan | Sedang, prototype bisa misleading |
| **Biaya Perubahan** | Sangat tinggi di fase akhir | Rendah, perubahan mudah diakomodasi | Sedang, tergantung fase |
| **Timeline** | Panjang, delivery di akhir | Pendek per sprint, continuous delivery | Sedang, tergantung iterasi |

Model Waterfall merupakan metodologi tradisional yang mengikuti pendekatan sequential dimana setiap fase harus diselesaikan sepenuhnya sebelum fase berikutnya dimulai. Fase-fase dalam waterfall meliputi requirements analysis, system design, implementation, testing, deployment, dan maintenance. Keunggulan utama waterfall adalah struktur yang jelas dan terorganisir, dokumentasi yang lengkap di setiap fase, serta mudah dipahami dan dikelola. Namun, waterfall memiliki kelemahan signifikan dalam hal fleksibilitas karena sulit mengakomodasi perubahan requirements setelah development dimulai, testing yang dilakukan di akhir dapat menyebabkan discovery of critical bugs terlambat, dan risiko tinggi jika requirements tidak dipahami dengan benar di awal proyek.

Metodologi Agile muncul sebagai respons terhadap keterbatasan waterfall dalam menghadapi perubahan requirements yang cepat. Agile menekankan pada iterasi pendek yang disebut sprint, biasanya berlangsung dua hingga empat minggu, dimana setiap sprint menghasilkan increment produk yang potentially shippable. Prinsip-prinsip Agile mencakup prioritas pada individu dan interaksi dibanding proses dan tools, working software dibanding comprehensive documentation, customer collaboration dibanding contract negotiation, dan responding to change dibanding following a plan. Keunggulan Agile terletak pada fleksibilitas tinggi dalam mengakomodasi perubahan, delivery yang cepat dan incremental, feedback loop yang pendek, serta kolaborasi tim yang kuat. Namun, Agile memerlukan komitmen tinggi dari semua pihak, dokumentasi yang bisa kurang lengkap, dan dapat challenging untuk proyek dengan scope yang tidak jelas.

Model Prototype melibatkan pembuatan versi awal sistem yang disebut prototype untuk mendapatkan feedback dari pengguna sebelum pengembangan penuh dilakukan. Prototype dapat berupa throwaway prototype yang dibuat cepat untuk validasi konsep dan akan dibuang setelah requirements jelas, atau evolutionary prototype yang terus dikembangkan dan refined hingga menjadi produk final. Tahapan prototype meliputi identifikasi kebutuhan dasar, development prototype awal, review prototype dengan user untuk mendapatkan feedback, revisi dan enhancement prototype berdasarkan feedback, dan development sistem final. Keunggulan prototype adalah user involvement yang tinggi sejak awal, mengurangi risiko kesalahan requirements, dan feedback yang cepat dari pengguna. Kelemahan prototype termasuk waktu yang bisa lama untuk iterasi, user mungkin mengharapkan prototype sebagai produk final, dan dapat menambah biaya development jika tidak dikelola dengan baik.

### 2.2.3 Software Development Life Cycle (SDLC)

Software Development Life Cycle adalah framework yang mendefinisikan proses, aktivitas, dan deliverables dalam setiap fase pengembangan software. SDLC menyediakan struktur sistematis untuk planning, creating, testing, dan deploying sistem informasi. Pemahaman yang baik tentang SDLC sangat penting untuk memastikan bahwa proyek development berjalan sesuai rencana dan menghasilkan produk yang berkualitas.

Fase Planning merupakan tahap awal dimana tim project melakukan identifikasi kebutuhan bisnis yang mendorong pengembangan sistem, feasibility study untuk mengevaluasi kelayakan teknis, ekonomis, dan operasional, serta project planning yang mencakup scope definition, resource allocation, timeline, dan budget. Pada fase ini juga dilakukan risk assessment untuk mengidentifikasi potensi risiko dan merencanakan strategi mitigasi. Output dari fase planning adalah project charter dan project plan yang akan menjadi panduan untuk fase-fase selanjutnya.

Fase Analysis berfokus pada pemahaman mendalam terhadap kebutuhan sistem. Aktivitas utama meliputi requirement gathering melalui interview, survey, observation, dan workshop dengan stakeholder, analisis sistem existing untuk memahami proses bisnis current dan identifikasi area improvement, serta dokumentasi requirements dalam bentuk functional requirements yang mendeskripsikan apa yang harus dilakukan sistem dan non-functional requirements yang mendeskripsikan karakteristik sistem seperti performance, security, dan usability. Teknik-teknik seperti use case analysis, data flow diagram, dan process modeling digunakan untuk memvisualisasikan dan memvalidasi requirements.

Fase Design mentransformasikan requirements menjadi spesifikasi teknis yang dapat diimplementasikan. System architecture design mendefinisikan struktur high-level sistem termasuk layers, components, dan their interactions. Database design mencakup conceptual design dengan Entity Relationship Diagram, logical design dengan normalization, dan physical design dengan indexing strategy. Interface design meliputi user interface design dengan wireframes dan mockups, serta API design dengan endpoint specifications. Detail design mendokumentasikan algoritma, data structures, dan logic untuk setiap modul. Design review dilakukan untuk memastikan design memenuhi requirements dan mengikuti best practices.

Fase Implementation adalah tahap dimana design diterjemahkan menjadi code. Developer menulis code mengikuti coding standards dan best practices yang telah ditetapkan. Unit testing dilakukan untuk memastikan setiap modul berfungsi sesuai spesifikasi. Code review dilakukan untuk maintain code quality dan knowledge sharing antar developer. Version control system seperti Git digunakan untuk manage code changes dan facilitate collaboration. Integration dilakukan secara bertahap untuk menggabungkan berbagai modul menjadi sistem yang utuh.

Fase Testing merupakan quality assurance phase dimana sistem diuji secara komprehensif. System testing memverifikasi bahwa sistem secara keseluruhan memenuhi functional requirements. Integration testing memastikan bahwa berbagai komponen bekerja sama dengan baik. Performance testing mengevaluasi response time, throughput, dan resource utilization. Security testing mengidentifikasi vulnerabilities dan memastikan data protection. User Acceptance Testing melibatkan end users untuk memvalidasi bahwa sistem memenuhi kebutuhan bisnis mereka. Bug tracking system digunakan untuk document, prioritize, dan track resolution of defects.

Fase Deployment adalah tahap dimana sistem dipindahkan dari development environment ke production environment. Deployment planning mencakup deployment strategy seperti big bang, phased, atau parallel deployment, serta rollback plan jika terjadi masalah. Data migration dilakukan jika ada data dari sistem lama yang perlu dipindahkan. User training diberikan untuk memastikan users dapat menggunakan sistem dengan efektif. Go-live support diberikan untuk menangani issues yang muncul saat awal operasi. Post-deployment review dilakukan untuk evaluate deployment success dan identify lessons learned.

Fase Maintenance adalah ongoing phase setelah sistem operational. Corrective maintenance menangani bug fixes dan error corrections. Adaptive maintenance melakukan adjustments untuk accommodate changes dalam environment seperti OS updates atau regulatory changes. Perfective maintenance melakukan enhancements untuk improve performance atau add new features. Preventive maintenance dilakukan untuk prevent future problems melalui code refactoring dan optimization. Maintenance activities harus didokumentasikan dengan baik dan changes harus melalui change management process untuk maintain system stability.


## 2.3 Use Case Diagram

### 2.3.1 Pengertian Use Case Diagram

Use Case Diagram merupakan salah satu diagram dalam Unified Modeling Language yang digunakan untuk menggambarkan interaksi antara aktor dengan sistem yang dikembangkan. Menurut Fowler (2004), use case diagram menyediakan cara untuk mengkomunikasikan fungsionalitas sistem dari perspektif pengguna eksternal, sehingga memudahkan stakeholder non-teknis untuk memahami apa yang dapat dilakukan oleh sistem. Use case diagram berfokus pada "what" sistem dapat lakukan, bukan "how" sistem melakukannya, sehingga abstraksi ini memudahkan diskusi requirements tanpa terjebak dalam detail implementasi teknis.

Dalam konteks pengembangan sistem informasi, use case diagram berfungsi sebagai alat komunikasi yang efektif antara business analysts, developers, dan end users. Diagram ini membantu dalam identifikasi dan validasi requirements, memastikan bahwa semua stakeholder memiliki pemahaman yang sama tentang scope dan fungsionalitas sistem. Use case diagram juga menjadi basis untuk test case development, dimana setiap use case akan diterjemahkan menjadi skenario testing yang komprehensif.

Penggunaan use case diagram dalam fase analisis dan perancangan sistem memberikan beberapa manfaat signifikan. Pertama, diagram ini membantu dalam scope definition dengan jelas menunjukkan batasan sistem dan fungsionalitas yang akan disediakan. Kedua, use case diagram memfasilitasi requirement prioritization dimana use cases dapat dikategorikan berdasarkan prioritas bisnis. Ketiga, diagram ini mendukung effort estimation karena setiap use case dapat dianalisis kompleksitasnya untuk estimasi waktu dan resources yang diperlukan.

### 2.3.2 Komponen Use Case Diagram

Use case diagram terdiri dari beberapa komponen fundamental yang masing-masing memiliki peran spesifik dalam merepresentasikan sistem. Komponen pertama adalah Actor yang merepresentasikan entitas eksternal yang berinteraksi dengan sistem. Actor dapat berupa manusia seperti user atau administrator, sistem eksternal seperti payment gateway atau API service, atau hardware seperti sensor atau printer. Actor digambarkan dengan stick figure dan ditempatkan di luar system boundary untuk menekankan bahwa mereka adalah entitas eksternal. Setiap actor memiliki role yang jelas dan dapat berinteraksi dengan satu atau lebih use cases.

Komponen kedua adalah Use Case yang merepresentasikan fungsionalitas atau layanan yang disediakan oleh sistem kepada actor. Use case digambarkan dengan oval atau ellipse dan diberi nama menggunakan verb phrase yang mendeskripsikan aksi yang dilakukan, seperti "Kelola Data Komponen" atau "Hitung HPE". Setiap use case harus memberikan value kepada actor dan memiliki clear start dan end point. Use case dapat memiliki berbagai tingkat granularity, dari high-level business use cases hingga detailed system use cases.

Komponen ketiga adalah System Boundary yang digambarkan dengan rectangle yang mengelilingi use cases. System boundary mendefinisikan scope sistem yang dikembangkan dan memisahkan fungsionalitas internal sistem dari entitas eksternal. Semua use cases berada di dalam system boundary, sementara actors berada di luar. System boundary membantu stakeholders memahami dengan jelas apa yang termasuk dalam scope proyek dan apa yang berada di luar scope.

Komponen keempat adalah Relationship yang menunjukkan hubungan antara komponen-komponen dalam use case diagram. Association relationship, digambarkan dengan garis solid, menghubungkan actor dengan use case yang mereka gunakan. Include relationship, digambarkan dengan dashed arrow dengan label "include", menunjukkan bahwa suatu use case selalu memanggil use case lain sebagai bagian dari eksekusinya. Extend relationship, digambarkan dengan dashed arrow dengan label "extend", menunjukkan bahwa suatu use case dapat secara opsional memperluas fungsionalitas use case lain. Generalization relationship menunjukkan inheritance antar actors atau antar use cases, dimana child actor atau use case mewarisi karakteristik dari parent.

### 2.3.3 Use Case Diagram Sistem CostTrack

Sistem CostTrack dirancang dengan beberapa aktor utama yang memiliki peran dan tanggung jawab berbeda dalam sistem. Aktor pertama adalah User yang merepresentasikan pengguna umum sistem dengan akses terbatas untuk melakukan operasi dasar seperti melihat data komponen, input riwayat pengadaan, dan melakukan perhitungan HPE. Aktor kedua adalah Admin yang memiliki akses penuh terhadap sistem termasuk kemampuan untuk mengelola master data, konfigurasi sistem, dan akses management. Aktor ketiga adalah JISDOR API yang merupakan sistem eksternal dari Bank Indonesia yang menyediakan data kurs USD-IDR secara real-time.

Use cases dalam sistem CostTrack diorganisir berdasarkan functional areas. Area pertama adalah Authentication dan Authorization yang mencakup use case "Login ke Sistem" sebagai entry point untuk semua pengguna. Use case ini menjadi prerequisite untuk use cases lainnya dan menggunakan include relationship. Area kedua adalah Master Data Management yang mencakup use cases "Kelola Data Komponen", "Kelola Data Produk", "Kelola Data Supplier", dan "Kelola Bill of Material". Use cases ini khusus untuk Admin dan memiliki extend relationship untuk operasi import data dari file CSV atau Excel.

Area ketiga adalah Transaction Management yang mencakup use case "Input Riwayat Pengadaan" dimana user dapat mencatat transaksi pembelian komponen dengan informasi lengkap seperti tanggal, harga, kuantitas, dan supplier. Use case ini memiliki include relationship dengan "Validasi Data Komponen" untuk memastikan komponen yang diinput sudah terdaftar dalam sistem. Area keempat adalah Currency Management yang mencakup use case "Lihat Data Kurs JISDOR" yang memiliki include relationship dengan "Ambil Data dari JISDOR API" untuk fetching real-time exchange rate data.

Area kelima adalah HPE Calculation yang merupakan core functionality sistem. Use case "Hitung HPE" memiliki beberapa include relationships dengan use cases pendukung seperti "Ambil Data BOM", "Ambil Riwayat Pengadaan", "Ambil Data Kurs", dan "Konversi Mata Uang". Use case ini juga memiliki extend relationship dengan "Pilih Metode Perhitungan" yang memungkinkan user memilih antara metode mean, median, atau weighted average. Hasil perhitungan dapat dilihat melalui use case "Lihat Hasil Perhitungan HPE" yang menampilkan detail breakdown biaya per komponen dan total HPE.

Area keenam adalah Reporting dan Export yang mencakup use cases "Generate Report" dan "Export Data" yang khusus untuk Admin. Use cases ini memungkinkan pembuatan laporan dalam berbagai format dan export data untuk keperluan analisis eksternal atau backup. Use case "Generate Report" memiliki extend relationships untuk berbagai jenis report seperti "Report Perhitungan HPE", "Report Riwayat Pengadaan", dan "Report Analisis Tren Harga".

## 2.4 Activity Diagram

### 2.4.1 Pengertian Activity Diagram

Activity Diagram adalah diagram UML yang menggambarkan alur kerja atau workflow dari sebuah proses bisnis atau sistem. Menurut Booch et al. (2005), activity diagram merupakan variasi dari state machine diagram yang fokus pada flow of control dari satu aktivitas ke aktivitas lainnya. Activity diagram sangat berguna untuk memodelkan aspek dinamis dari sistem, menunjukkan urutan aktivitas, decision points, parallel processes, dan synchronization dalam sistem.

Dalam pengembangan sistem informasi, activity diagram digunakan untuk berbagai tujuan. Pertama, untuk mendokumentasikan business processes yang akan diotomatisasi oleh sistem, sehingga developer memahami konteks bisnis dari fungsionalitas yang akan diimplementasikan. Kedua, untuk mendesain algoritma dan logic flow dalam sistem, terutama untuk proses yang kompleks dengan banyak decision points dan conditional flows. Ketiga, untuk mengidentifikasi opportunities untuk optimization dan automation dalam proses bisnis existing.

Activity diagram juga sangat efektif untuk mengkomunikasikan proses kepada stakeholder non-teknis karena notasinya yang intuitif dan mudah dipahami. Diagram ini dapat menunjukkan dengan jelas siapa yang bertanggung jawab untuk setiap aktivitas melalui swimlanes, bagaimana aktivitas-aktivitas tersebut berurutan, dan apa yang terjadi dalam berbagai kondisi atau skenario. Dalam konteks testing, activity diagram menjadi basis untuk membuat test scenarios yang comprehensive, memastikan bahwa semua possible paths dalam proses telah diuji.

### 2.4.2 Komponen Activity Diagram

Activity diagram terdiri dari berbagai komponen yang masing-masing merepresentasikan aspek berbeda dari workflow. Initial Node, digambarkan sebagai lingkaran hitam solid, menandai titik awal dari aktivitas atau proses. Setiap activity diagram harus memiliki satu initial node yang jelas. Activity atau Action, digambarkan sebagai rounded rectangle, merepresentasikan unit kerja atau operasi yang dilakukan dalam proses. Setiap activity harus memiliki nama yang jelas dan deskriptif yang menunjukkan apa yang dilakukan.

Decision Node, digambarkan sebagai diamond shape, merepresentasikan titik percabangan dimana flow dapat berjalan ke arah berbeda berdasarkan kondisi tertentu. Setiap outgoing edge dari decision node harus memiliki guard condition yang menjelaskan kondisi untuk mengikuti path tersebut. Merge Node, juga digambarkan sebagai diamond, merepresentasikan titik dimana multiple flows bergabung kembali menjadi satu flow. Merge node tidak memiliki guard conditions karena hanya berfungsi untuk menggabungkan flows.

Fork Node, digambarkan sebagai thick horizontal atau vertical bar, merepresentasikan titik dimana flow dibagi menjadi multiple concurrent flows yang berjalan parallel. Fork node digunakan ketika beberapa aktivitas dapat dilakukan secara bersamaan tanpa harus menunggu satu sama lain. Join Node, juga digambarkan sebagai thick bar, merepresentasikan synchronization point dimana multiple concurrent flows harus selesai sebelum flow dapat melanjutkan. Join node memastikan bahwa semua parallel activities telah completed sebelum melanjutkan ke aktivitas berikutnya.

Final Node, digambarkan sebagai lingkaran dengan border hitam dan center hitam, menandai akhir dari seluruh aktivitas atau proses. Activity diagram dapat memiliki multiple final nodes jika ada berbagai possible endings. Swimlanes atau Partitions digunakan untuk mengorganisir activities berdasarkan actor atau organizational unit yang bertanggung jawab. Swimlanes digambarkan sebagai vertical atau horizontal bands yang membagi diagram, dengan setiap lane representing different actor atau role.

### 2.4.3 Activity Diagram untuk Proses Perhitungan HPE

Proses perhitungan HPE dalam sistem CostTrack merupakan workflow kompleks yang melibatkan multiple steps, decision points, dan interactions dengan external systems. Activity diagram untuk proses ini dimulai dengan initial node yang menandai user memulai proses perhitungan. Aktivitas pertama adalah "User Login ke Sistem" yang merupakan prerequisite untuk mengakses fungsionalitas perhitungan HPE. Setelah login berhasil, flow berlanjut ke aktivitas "Pilih Produk yang Akan Dihitung HPE" dimana user memilih produk dari daftar produk yang tersedia dalam sistem.

Setelah produk dipilih, sistem melakukan aktivitas "Ambil Data BOM Produk" untuk retrieve struktur Bill of Material dari database. Pada titik ini terdapat decision node yang memeriksa apakah BOM valid dan lengkap. Jika BOM tidak valid atau tidak lengkap, flow akan kembali ke aktivitas pemilihan produk dengan pesan error yang menjelaskan masalah. Jika BOM valid, flow berlanjut ke fork node yang memulai dua parallel processes: "Ambil Data Harga Historis Komponen" dan "Ambil Data Kurs JISDOR Real-time".

Parallel process pertama, "Ambil Data Harga Historis Komponen", melakukan query ke database untuk mengambil riwayat pengadaan dari setiap komponen dalam BOM. Sistem mengambil data transaksi pembelian dalam periode tertentu, misalnya 6 bulan atau 1 tahun terakhir, tergantung konfigurasi. Data yang diambil mencakup tanggal pembelian, harga, kuantitas, supplier, dan mata uang. Parallel process kedua, "Ambil Data Kurs JISDOR Real-time", melakukan API call ke sistem JISDOR Bank Indonesia untuk mendapatkan nilai tukar USD-IDR terkini. Sistem juga dapat mengambil historical exchange rates jika diperlukan untuk analisis.

Setelah kedua parallel processes selesai, flow mencapai join node yang mensinkronisasi kedua processes. Flow kemudian berlanjut ke decision node yang memeriksa mata uang dari data harga historis. Jika ada harga dalam mata uang USD, sistem melakukan aktivitas "Konversi Mata Uang ke IDR" menggunakan kurs yang telah diambil dari JISDOR. Jika semua harga sudah dalam IDR, aktivitas konversi di-skip dan flow langsung berlanjut.

Aktivitas selanjutnya adalah "User Memilih Metode Perhitungan" dimana user dapat memilih antara metode mean, median, atau weighted average. Pilihan ini akan mempengaruhi bagaimana sistem menghitung HPE dari data harga historis. Setelah metode dipilih, flow mencapai decision node yang mengarahkan ke salah satu dari tiga aktivitas perhitungan: "Hitung HPE dengan Metode Mean", "Hitung HPE dengan Metode Median", atau "Hitung HPE dengan Metode Weighted Average". Ketiga aktivitas ini kemudian merge kembali ke satu flow.

Setelah perhitungan selesai, sistem melakukan aktivitas "Validasi Hasil Perhitungan" untuk memastikan hasil masuk akal dan tidak ada anomali. Jika validasi gagal, sistem dapat memberikan warning kepada user. Flow kemudian berlanjut ke aktivitas "Simpan Hasil Perhitungan ke Database" yang menyimpan hasil HPE beserta metadata seperti tanggal perhitungan, metode yang digunakan, kurs yang digunakan, dan detail breakdown per komponen.

Aktivitas terakhir adalah "Tampilkan Hasil Perhitungan kepada User" yang menampilkan hasil HPE dalam format yang user-friendly. Tampilan mencakup total HPE, breakdown biaya per komponen, metode perhitungan yang digunakan, kurs yang digunakan, dan tanggal perhitungan. User juga dapat melihat detail lebih lanjut seperti data harga historis yang digunakan dalam perhitungan dan analisis statistik. Dari titik ini, user memiliki opsi untuk export hasil, generate report, atau melakukan perhitungan ulang dengan metode berbeda. Flow kemudian mencapai final node yang menandai akhir dari proses perhitungan HPE.


## 2.5 Entity Relationship Diagram (ERD)

### 2.5.1 Pengertian ERD

Entity Relationship Diagram adalah representasi grafis yang menggambarkan struktur data dan hubungan antar entitas dalam sebuah database. Menurut Chen (1976), ERD menyediakan cara untuk memodelkan data pada level konseptual yang independen dari implementasi fisik database. ERD membantu database designers untuk memvisualisasikan requirements data, mengidentifikasi entitas-entitas penting, mendefinisikan atribut untuk setiap entitas, dan menentukan relasi antar entitas sebelum implementasi database actual.

Dalam konteks pengembangan sistem informasi, ERD berfungsi sebagai blueprint untuk database design yang akan menjadi foundation dari sistem. ERD yang baik akan menghasilkan database yang normalized, efficient, dan maintainable. Proses pembuatan ERD melibatkan analisis mendalam terhadap business domain untuk mengidentifikasi entities yang perlu disimpan datanya, attributes yang mendeskripsikan entities tersebut, dan relationships yang menghubungkan entities. ERD juga memfasilitasi komunikasi antara business analysts, database designers, dan developers untuk memastikan bahwa database design memenuhi business requirements.

ERD dapat dibuat dalam tiga level abstraksi. Conceptual ERD menggambarkan high-level view dari data tanpa detail teknis, fokus pada business entities dan relationships. Logical ERD menambahkan detail seperti attributes, primary keys, dan foreign keys, tetapi masih independen dari specific database management system. Physical ERD menunjukkan implementasi actual dalam specific DBMS termasuk data types, indexes, dan constraints. Dalam praktik, logical ERD paling sering digunakan karena memberikan balance antara detail dan abstraksi.

### 2.5.2 Komponen ERD

ERD terdiri dari beberapa komponen fundamental yang masing-masing memiliki peran spesifik dalam merepresentasikan struktur data. Entity merepresentasikan objek atau konsep dalam business domain yang datanya perlu disimpan. Entity dapat berupa tangible objects seperti Produk atau Komponen, atau intangible concepts seperti Transaksi atau Perhitungan. Setiap entity memiliki instances atau occurrences yang merupakan data actual. Dalam notasi ERD, entity digambarkan sebagai rectangle dengan nama entity di dalamnya. Nama entity biasanya menggunakan singular noun dan ditulis dengan huruf kapital.

Attribute merepresentasikan properti atau karakteristik dari entity. Setiap attribute memiliki nama yang deskriptif dan domain yang mendefinisikan tipe data dan possible values. Attributes dapat dikategorikan menjadi beberapa jenis. Simple attribute adalah attribute yang tidak dapat dipecah lagi menjadi sub-attributes, seperti nama atau tanggal. Composite attribute adalah attribute yang terdiri dari beberapa sub-attributes, seperti alamat yang terdiri dari jalan, kota, provinsi, dan kode pos. Single-valued attribute hanya memiliki satu value untuk setiap entity instance, seperti tanggal lahir. Multi-valued attribute dapat memiliki multiple values, seperti nomor telepon. Derived attribute adalah attribute yang nilainya dapat dihitung dari attributes lain, seperti umur yang dapat dihitung dari tanggal lahir.

Primary Key adalah attribute atau kombinasi attributes yang uniquely identifies setiap instance dari entity. Primary key harus memiliki karakteristik unique, not null, dan immutable. Pemilihan primary key yang tepat sangat penting untuk integrity dan performance database. Dalam banyak kasus, surrogate key berupa auto-increment integer atau UUID digunakan sebagai primary key karena simplicity dan performance. Foreign Key adalah attribute dalam suatu entity yang mereferensi primary key dari entity lain, digunakan untuk implement relationships antar entities.

Relationship merepresentasikan asosiasi atau hubungan antara dua atau lebih entities. Relationship memiliki cardinality yang menunjukkan jumlah instances dari satu entity yang dapat berasosiasi dengan instances dari entity lain. One-to-One relationship terjadi ketika satu instance dari entity A berasosiasi dengan maksimal satu instance dari entity B, dan sebaliknya. One-to-Many relationship terjadi ketika satu instance dari entity A dapat berasosiasi dengan banyak instances dari entity B, tetapi satu instance dari entity B hanya berasosiasi dengan satu instance dari entity A. Many-to-Many relationship terjadi ketika satu instance dari entity A dapat berasosiasi dengan banyak instances dari entity B, dan sebaliknya. Many-to-many relationships biasanya diimplementasikan menggunakan junction table atau associative entity.

Relationship juga memiliki participation constraint yang menunjukkan apakah participation suatu entity dalam relationship adalah mandatory atau optional. Total participation berarti setiap instance dari entity harus participate dalam relationship. Partial participation berarti participation adalah optional. Participation constraints penting untuk define business rules dan maintain data integrity melalui database constraints.

### 2.5.3 ERD Sistem CostTrack

Database sistem CostTrack dirancang untuk mendukung seluruh fungsionalitas sistem dengan struktur yang normalized dan efficient. Entity pertama adalah User yang menyimpan informasi pengguna sistem. Attributes dari User entity mencakup id_user sebagai primary key, username yang unique untuk login, password yang di-hash untuk security, email untuk komunikasi dan recovery, role yang menentukan access level (admin atau user), dan timestamps untuk audit trail. User entity memiliki one-to-many relationship dengan HPE_Result entity karena satu user dapat melakukan banyak perhitungan HPE.

Entity kedua adalah Komponen yang merepresentasikan material atau parts yang digunakan dalam produk. Attributes mencakup id_komponen sebagai primary key, nama_komponen yang deskriptif, deskripsi untuk detail spesifikasi, satuan untuk unit of measurement seperti pcs, kg, atau meter, mata_uang untuk indicate currency (IDR atau USD), kategori untuk grouping komponen, dan timestamps. Komponen entity memiliki one-to-many relationship dengan BOM entity karena satu komponen dapat digunakan dalam banyak produk, dan one-to-many relationship dengan Riwayat_Pengadaan entity karena satu komponen dapat memiliki banyak transaksi pembelian.

Entity ketiga adalah Produk yang merepresentasikan finished goods atau assemblies yang akan dihitung HPE-nya. Attributes mencakup id_produk sebagai primary key, nama_produk, deskripsi, kategori untuk classification, dan timestamps. Produk entity memiliki one-to-many relationship dengan BOM entity karena satu produk memiliki banyak komponen dalam BOM-nya, dan one-to-many relationship dengan HPE_Result entity karena satu produk dapat dihitung HPE-nya berkali-kali dengan metode atau waktu berbeda.

Entity keempat adalah BOM (Bill of Material) yang merepresentasikan struktur hierarkis dari produk. BOM adalah associative entity yang menghubungkan Produk dengan Komponen. Attributes mencakup id_bom sebagai primary key, id_produk sebagai foreign key ke Produk, id_komponen sebagai foreign key ke Komponen, kuantitas yang menunjukkan berapa banyak komponen diperlukan, level yang menunjukkan hierarki dalam BOM (0 untuk top level, 1 untuk sub-assembly, dst), parent_id sebagai foreign key ke BOM itself untuk represent hierarchical structure, dan timestamps. BOM entity memiliki self-referencing relationship untuk support multi-level BOM structure.

Entity kelima adalah Supplier yang menyimpan informasi vendor atau supplier. Attributes mencakup id_supplier sebagai primary key, nama_supplier, kontak untuk phone atau contact person, email, alamat lengkap, rating untuk evaluate supplier performance, dan timestamps. Supplier entity memiliki one-to-many relationship dengan Riwayat_Pengadaan entity karena satu supplier dapat menyediakan banyak transaksi pembelian.

Entity keenam adalah Riwayat_Pengadaan yang mencatat historical purchasing transactions. Attributes mencakup id_riwayat sebagai primary key, id_komponen sebagai foreign key ke Komponen, id_supplier sebagai foreign key ke Supplier, tanggal_pembelian, harga per unit, kuantitas yang dibeli, mata_uang (IDR atau USD), notes untuk additional information, dan timestamps. Riwayat_Pengadaan entity adalah central entity untuk HPE calculation karena menyimpan historical price data yang akan dianalisis.

Entity ketujuh adalah Kurs yang menyimpan exchange rate data. Attributes mencakup id_kurs sebagai primary key, tanggal untuk date of exchange rate, mata_uang_dari (biasanya USD), mata_uang_ke (biasanya IDR), nilai untuk exchange rate value, sumber untuk indicate data source (JISDOR), dan timestamp. Kurs entity dapat memiliki relationship dengan HPE_Result untuk record exchange rate yang digunakan dalam calculation.

Entity kedelapan adalah HPE_Result yang menyimpan hasil perhitungan HPE. Attributes mencakup id_hpe sebagai primary key, id_produk sebagai foreign key ke Produk, id_user sebagai foreign key ke User, tanggal_perhitungan, metode_perhitungan (mean, median, atau weighted), nilai_hpe untuk total estimated cost, kurs_digunakan untuk record exchange rate used, detail_perhitungan yang dapat berupa JSON object containing breakdown per component, dan timestamp. HPE_Result entity menyimpan complete information tentang calculation untuk audit trail dan historical analysis.

**Tabel 2.2 Entitas dan Atribut Database Sistem CostTrack**

| Entitas | Atribut | Tipe Data | Keterangan |
|---------|---------|-----------|------------|
| **User** | id_user | ObjectId | Primary Key |
| | username | String | Unique, required |
| | password | String | Hashed, required |
| | email | String | Unique, required |
| | role | String | Enum: admin, user |
| | createdAt | Date | Auto-generated |
| | updatedAt | Date | Auto-generated |
| **Komponen** | id_komponen | ObjectId | Primary Key |
| | nama | String | Required |
| | deskripsi | String | Optional |
| | satuan | String | Required (pcs, kg, meter, dll) |
| | mata_uang | String | Default: IDR |
| | kategori | String | Required |
| | createdAt | Date | Auto-generated |
| | updatedAt | Date | Auto-generated |
| **Produk** | id_produk | ObjectId | Primary Key |
| | nama | String | Required |
| | deskripsi | String | Optional |
| | kategori | String | Required |
| | createdAt | Date | Auto-generated |
| | updatedAt | Date | Auto-generated |
| **BOM** | id_bom | ObjectId | Primary Key |
| | id_produk | ObjectId | Foreign Key to Produk |
| | id_komponen | ObjectId | Foreign Key to Komponen |
| | kuantitas | Number | Required, positive |
| | level | Number | Hierarchy level (0, 1, 2, ...) |
| | parent_id | ObjectId | Foreign Key to BOM (self-reference) |
| | createdAt | Date | Auto-generated |
| | updatedAt | Date | Auto-generated |
| **Supplier** | id_supplier | ObjectId | Primary Key |
| | nama | String | Required |
| | kontak | String | Optional |
| | email | String | Optional |
| | alamat | String | Optional |
| | rating | Number | Range: 1-5 |
| | createdAt | Date | Auto-generated |
| | updatedAt | Date | Auto-generated |
| **Riwayat_Pengadaan** | id_riwayat | ObjectId | Primary Key |
| | id_komponen | ObjectId | Foreign Key to Komponen |
| | id_supplier | ObjectId | Foreign Key to Supplier |
| | tanggal | Date | Required |
| | harga | Number | Required, positive |
| | kuantitas | Number | Required, positive |
| | mata_uang | String | IDR or USD |
| | notes | String | Optional |
| | createdAt | Date | Auto-generated |
| | updatedAt | Date | Auto-generated |
| **Kurs** | id_kurs | ObjectId | Primary Key |
| | tanggal | Date | Required |
| | mata_uang_dari | String | Default: USD |
| | mata_uang_ke | String | Default: IDR |
| | nilai | Number | Required, positive |
| | sumber | String | Default: JISDOR |
| | createdAt | Date | Auto-generated |
| **HPE_Result** | id_hpe | ObjectId | Primary Key |
| | id_produk | ObjectId | Foreign Key to Produk |
| | id_user | ObjectId | Foreign Key to User |
| | tanggal_perhitungan | Date | Required |
| | metode | String | Enum: mean, median, weighted |
| | nilai_hpe | Number | Required, positive |
| | kurs_digunakan | Number | Exchange rate used |
| | detail_perhitungan | Object | JSON with breakdown |
| | createdAt | Date | Auto-generated |

**Tabel 2.3 Relasi Antar Entitas dalam Database CostTrack**

| Entitas 1 | Kardinalitas | Entitas 2 | Deskripsi Relasi |
|-----------|--------------|-----------|------------------|
| User | 1 : N | HPE_Result | Satu user dapat membuat banyak hasil perhitungan HPE |
| Produk | 1 : N | BOM | Satu produk memiliki banyak komponen dalam BOM |
| Komponen | 1 : N | BOM | Satu komponen dapat digunakan dalam banyak produk |
| Produk | 1 : N | HPE_Result | Satu produk dapat dihitung HPE-nya berkali-kali |
| Komponen | 1 : N | Riwayat_Pengadaan | Satu komponen memiliki banyak riwayat pembelian |
| Supplier | 1 : N | Riwayat_Pengadaan | Satu supplier menyediakan banyak transaksi |
| BOM | 1 : N | BOM | Self-referencing untuk struktur hierarkis (parent-child) |

## 2.6 Umpan Balik (Feedback)

### 2.6.1 Pengertian Umpan Balik dalam Pengembangan Sistem

Umpan balik merupakan informasi yang diterima dari pengguna, stakeholder, atau sistem monitoring mengenai kinerja, fungsionalitas, usability, dan overall quality dari sistem yang dikembangkan. Menurut Sommerville (2016), umpan balik adalah komponen esensial dalam iterative development process yang memungkinkan tim development untuk continuously improve sistem berdasarkan real-world usage dan user experience. Umpan balik yang efektif harus specific, actionable, dan timely agar dapat digunakan untuk drive improvements yang meaningful.

Dalam konteks pengembangan sistem informasi modern, umpan balik tidak lagi dipandang sebagai aktivitas one-time di akhir proyek, tetapi sebagai continuous process yang terintegrasi dalam seluruh lifecycle sistem. Pendekatan agile dan DevOps menekankan pentingnya short feedback loops yang memungkinkan tim untuk detect dan correct issues dengan cepat. Umpan balik dapat bersifat formal melalui structured testing dan surveys, atau informal melalui casual conversations dan observations. Kedua jenis umpan balik ini valuable dan harus dikelola dengan systematic approach.

Implementasi effective feedback mechanism dalam sistem informasi memberikan multiple benefits. Pertama, early detection of issues memungkinkan tim untuk fix problems sebelum menjadi critical dan expensive to resolve. Kedua, user involvement melalui feedback process meningkatkan user satisfaction dan adoption rate karena users merasa their voices are heard dan sistem evolves sesuai needs mereka. Ketiga, continuous improvement culture terbentuk dimana tim constantly seeks ways to enhance sistem berdasarkan data dan insights dari feedback.

### 2.6.2 Jenis-jenis Umpan Balik

Umpan balik dapat dikategorikan berdasarkan berbagai dimensi. Dari perspektif content, umpan balik fungsional berkaitan dengan features dan capabilities sistem, apakah sistem melakukan apa yang seharusnya dilakukan sesuai requirements. Umpan balik ini mencakup bug reports, feature requests, dan functional gaps. Umpan balik usability berkaitan dengan ease of use, user interface design, navigation flow, dan overall user experience. Umpan balik ini sangat subjective tetapi critical untuk user adoption. Umpan balik performance berkaitan dengan speed, responsiveness, reliability, dan availability sistem. Metrics seperti response time, throughput, dan uptime menjadi basis untuk performance feedback. Umpan balik teknis berkaitan dengan technical aspects seperti compatibility, integration, security, dan maintainability.

Dari perspektif timing, umpan balik proactive diberikan sebelum issues menjadi problems, misalnya melalui regular check-ins atau surveys. Umpan balik reactive diberikan sebagai response terhadap specific issues atau incidents. Dari perspektif source, umpan balik internal berasal dari tim development, QA, atau internal stakeholders. Umpan balik eksternal berasal dari end users, customers, atau external stakeholders. Dari perspektif formality, umpan balik formal dikumpulkan melalui structured methods seperti surveys, testing sessions, atau formal reviews. Umpan balik informal dikumpulkan melalui casual conversations, observations, atau unsolicited comments.

### 2.6.3 Metode Pengumpulan Umpan Balik

User Acceptance Testing merupakan metode formal dimana end users menguji sistem dalam environment yang mirip dengan production untuk validate bahwa sistem memenuhi business requirements dan user needs. UAT biasanya dilakukan sebelum go-live dan melibatkan representative users yang menjalankan test scenarios yang cover critical business processes. UAT menghasilkan formal sign-off dari users yang indicate readiness untuk deployment. Keberhasilan UAT bergantung pada well-defined test cases, adequate test data, dan committed user participation.

Surveys dan questionnaires menyediakan structured way untuk collect feedback dari large number of users. Surveys dapat menggunakan quantitative questions dengan rating scales untuk measure satisfaction, ease of use, atau other metrics, serta qualitative open-ended questions untuk gather detailed feedback dan suggestions. Survey design harus carefully crafted untuk avoid bias dan ensure meaningful responses. Online survey tools memudahkan distribution dan analysis. Survey timing juga important, dapat dilakukan immediately after specific interactions atau periodically untuk track trends over time.

Interviews dan focus groups memungkinkan deep dive into user experiences dan perceptions. One-on-one interviews memberikan opportunity untuk explore individual perspectives secara mendalam, sementara focus groups facilitate discussion dan interaction antar users yang dapat reveal insights yang tidak muncul dalam individual interviews. Interviews dan focus groups memerlukan skilled facilitators yang dapat guide discussions, probe for details, dan maintain neutral stance. Sessions harus direkam dan transcribed untuk thorough analysis.

Analytics dan monitoring menyediakan objective data tentang how users actually use sistem. Web analytics tools dapat track user journeys, identify popular features, detect drop-off points, dan measure engagement metrics. Application performance monitoring tools dapat detect performance issues, errors, dan availability problems. Log analysis dapat reveal patterns dan anomalies. Analytics data harus complemented dengan qualitative feedback untuk understand the "why" behind the "what". Dashboards dan reports harus designed untuk make insights actionable.

Helpdesk dan support tickets merupakan rich source of feedback tentang issues dan challenges yang users face. Ticket analysis dapat identify common problems, frequent questions, dan areas yang need improvement. Categorization dan tagging of tickets enable trend analysis. Response times dan resolution rates juga provide feedback tentang support effectiveness. Integration antara support system dengan development workflow memungkinkan smooth transition dari issue identification ke resolution.

### 2.6.4 Implementasi Umpan Balik dalam Sistem CostTrack

Sistem CostTrack mengimplementasikan comprehensive feedback mechanism untuk ensure continuous improvement dan user satisfaction. Pada fase development, User Acceptance Testing dilakukan dengan melibatkan representative users dari target audience. UAT scenarios cover critical workflows seperti input data komponen, create BOM, record purchasing history, dan calculate HPE. Users diminta untuk complete tasks dan provide feedback tentang functionality, usability, dan any issues encountered. UAT results didokumentasikan dan prioritized untuk resolution sebelum go-live.

Post-deployment, sistem CostTrack menyediakan in-app feedback form yang accessible dari setiap page. Users dapat easily report bugs, suggest features, atau provide general feedback tanpa harus leave aplikasi. Feedback form includes fields untuk category (bug, feature request, usability issue), priority, description, dan optional screenshots. Submitted feedback automatically creates tickets dalam issue tracking system untuk follow-up. Users receive acknowledgment dan updates tentang status their feedback.

Periodic satisfaction surveys dikirimkan kepada users untuk measure overall satisfaction, ease of use, usefulness of features, dan likelihood to recommend. Surveys menggunakan combination of quantitative ratings dan qualitative comments. Survey results dianalisis untuk identify trends dan areas for improvement. Comparison across time periods shows whether improvements are having desired effect. Survey insights inform product roadmap dan prioritization decisions.

System monitoring dan analytics continuously track usage patterns, performance metrics, dan errors. Dashboards show key metrics seperti number of active users, most used features, average calculation time, API response times, dan error rates. Anomalies trigger alerts untuk immediate investigation. Usage analytics help understand which features are valuable dan which are underutilized. Performance metrics ensure sistem meets service level objectives. Error logs provide detailed information untuk debugging dan root cause analysis.

Regular review meetings dengan key stakeholders provide forum untuk discuss feedback, review metrics, dan plan improvements. Meetings include representatives dari users, management, dan development team. Agenda covers recent feedback themes, metrics trends, completed improvements, dan planned enhancements. Meetings ensure alignment between user needs, business objectives, dan technical capabilities. Action items dari meetings are tracked untuk accountability.

Feedback loop closure adalah critical aspect dimana users are informed tentang how their feedback has been addressed. When bugs are fixed atau features are implemented based on user feedback, users are notified dan thanked untuk their contribution. This reinforces value of providing feedback dan encourages continued participation. Release notes highlight improvements yang resulted dari user feedback. Transparency dalam feedback handling builds trust dan engagement.


## 2.7 Frontend Development

### 2.7.1 Pengertian Frontend

Frontend development merupakan aspek pengembangan aplikasi web yang berfokus pada bagian yang berinteraksi langsung dengan pengguna. Frontend mencakup semua elemen visual, interaktif, dan presentational yang dilihat dan digunakan oleh user melalui web browser. Menurut Duckett (2014), frontend development melibatkan kombinasi dari HTML untuk struktur content, CSS untuk styling dan layout, serta JavaScript untuk interactivity dan dynamic behavior. Frontend developer bertanggung jawab untuk mentransformasikan design mockups menjadi functional user interfaces yang responsive, accessible, dan performant.

Dalam konteks aplikasi web modern, frontend telah berkembang dari simple static pages menjadi complex single-page applications yang menyediakan user experience yang rich dan interactive. Frontend modern harus responsive untuk beradaptasi dengan berbagai ukuran layar dari mobile hingga desktop, accessible untuk users dengan disabilities, performant dengan loading times yang cepat, dan secure untuk protect user data. Frontend juga harus seamlessly integrate dengan backend services melalui APIs untuk fetch dan manipulate data.

Kualitas frontend sangat mempengaruhi user adoption dan satisfaction. User interface yang intuitif dan attractive dapat meningkatkan engagement, sementara interface yang confusing atau slow dapat menyebabkan user frustration dan abandonment. Oleh karena itu, frontend development memerlukan tidak hanya technical skills tetapi juga understanding tentang user psychology, design principles, dan usability best practices. Collaboration antara frontend developers, UI/UX designers, dan backend developers sangat penting untuk create cohesive dan effective user experience.

### 2.7.2 Teknologi Frontend

**Tabel 2.4 Teknologi Frontend dalam Sistem CostTrack**

| Teknologi | Fungsi | Karakteristik | Penggunaan dalam CostTrack |
|-----------|--------|---------------|----------------------------|
| **HTML5** | Struktur dan konten halaman web | - Semantic elements<br>- Multimedia support<br>- Form validation<br>- Local storage API | - Struktur halaman dashboard<br>- Form input data<br>- Tabel data komponen dan produk<br>- Layout responsive |
| **CSS3** | Styling dan layout | - Flexbox dan Grid<br>- Animations<br>- Media queries<br>- Custom properties | - Styling komponen UI<br>- Responsive design<br>- Transitions dan animations<br>- Theme customization |
| **JavaScript (ES6+)** | Interaktivitas dan logika | - Arrow functions<br>- Promises/Async-await<br>- Modules<br>- DOM manipulation | - Event handling<br>- AJAX requests ke backend<br>- Form validation<br>- Dynamic content update |
| **Fetch API** | Komunikasi dengan backend | - Promise-based<br>- Modern alternative to XMLHttpRequest<br>- Support untuk berbagai HTTP methods | - GET data dari API<br>- POST data perhitungan<br>- PUT/DELETE operations<br>- Error handling |

HTML5 menyediakan semantic elements yang membuat struktur dokumen lebih meaningful dan accessible. Elements seperti header, nav, main, article, section, aside, dan footer memberikan context tentang purpose dari content, memudahkan screen readers dan search engines untuk understand page structure. HTML5 juga menyediakan form elements yang enhanced dengan built-in validation, input types yang specific seperti email, number, date, serta attributes seperti required, pattern, dan min/max yang memudahkan client-side validation tanpa JavaScript.

CSS3 membawa capabilities yang powerful untuk styling dan layout. Flexbox menyediakan one-dimensional layout system yang ideal untuk arranging items dalam row atau column dengan flexible sizing dan alignment. CSS Grid menyediakan two-dimensional layout system yang powerful untuk creating complex layouts dengan rows dan columns. Media queries memungkinkan responsive design dengan applying different styles berdasarkan screen size, orientation, atau device characteristics. CSS animations dan transitions memberikan smooth visual effects yang enhance user experience tanpa memerlukan JavaScript.

JavaScript modern dengan ES6+ features membuat code lebih readable, maintainable, dan efficient. Arrow functions menyediakan concise syntax untuk function expressions. Promises dan async/await menyediakan elegant way untuk handle asynchronous operations seperti API calls. Template literals memudahkan string interpolation dan multi-line strings. Destructuring memudahkan extraction of values dari objects dan arrays. Modules dengan import/export memungkinkan code organization yang better dan reusability.

### 2.7.3 Responsive Web Design

Responsive Web Design adalah pendekatan design yang membuat web pages render dengan baik pada berbagai devices dan screen sizes. Menurut Marcotte (2011), responsive design melibatkan tiga technical ingredients: fluid grids yang menggunakan relative units seperti percentages untuk layout, flexible images yang dapat resize dalam containing elements, dan media queries yang apply different styles berdasarkan device characteristics. Responsive design memastikan bahwa users mendapatkan optimal viewing experience regardless of device yang mereka gunakan.

Implementasi responsive design dimulai dengan mobile-first approach dimana design dan development dimulai dari smallest screen size dan progressively enhanced untuk larger screens. Approach ini memastikan bahwa core content dan functionality accessible pada semua devices, dan additional features ditambahkan untuk devices dengan more screen real estate dan capabilities. Mobile-first juga encourages prioritization of content dan simplification of interfaces, yang benefits users pada all devices.

Breakpoints dalam responsive design adalah points dimana layout changes untuk accommodate different screen sizes. Common breakpoints include mobile (< 768px), tablet (768px - 1024px), dan desktop (> 1024px). Namun, breakpoints harus ditentukan berdasarkan content needs bukan specific devices, karena device landscape constantly evolving. Testing pada actual devices atau device emulators penting untuk ensure responsive design works as intended.

Responsive images adalah critical aspect karena images often constitute largest portion of page weight. Techniques untuk responsive images include using max-width: 100% untuk prevent images dari exceeding container width, srcset attribute untuk provide multiple image resolutions dan let browser choose appropriate one, picture element untuk art direction dan different images untuk different screen sizes, dan lazy loading untuk defer loading of off-screen images. Proper image optimization dapat significantly improve page load times especially pada mobile networks.

### 2.7.4 Frontend Architecture untuk CostTrack

Sistem CostTrack mengadopsi modular frontend architecture yang memisahkan concerns dan memudahkan maintenance. Struktur folder diorganisir berdasarkan functionality dengan folder css untuk stylesheets, js untuk JavaScript modules, pages untuk HTML pages, dan images untuk assets. Setiap JavaScript module bertanggung jawab untuk specific functionality seperti komponen management, produk management, kurs integration, atau HPE calculation. Modules berkomunikasi melalui well-defined interfaces dan shared utilities.

Single Page Application approach digunakan dimana navigation antar pages dilakukan tanpa full page reload. JavaScript handles routing dan dynamically loads content, providing smoother user experience. State management dilakukan melalui JavaScript objects yang maintain application state dan update UI accordingly. Event-driven architecture digunakan dimana user interactions trigger events yang handled oleh appropriate event listeners, promoting loose coupling between components.

API integration layer abstracts communication dengan backend, providing consistent interface untuk data operations. Configuration file menyimpan API endpoints dan other settings, memudahkan changes tanpa modifying code. Error handling dilakukan secara consistent dengan user-friendly error messages dan appropriate fallbacks. Loading states ditampilkan during asynchronous operations untuk provide feedback kepada users.

Accessibility considerations include semantic HTML untuk screen reader compatibility, keyboard navigation support untuk users yang tidak menggunakan mouse, sufficient color contrast untuk readability, dan ARIA attributes dimana necessary untuk enhance accessibility. Performance optimization includes minification of CSS dan JavaScript files, compression of images, lazy loading of non-critical resources, dan caching strategies untuk reduce server requests.

## 2.8 Backend Development

### 2.8.1 Pengertian Backend

Backend development merupakan server-side development yang menangani business logic, data processing, database operations, authentication, authorization, dan integration dengan external services. Backend tidak terlihat langsung oleh end users tetapi merupakan engine yang powers aplikasi. Menurut Grinberg (2018), backend bertanggung jawab untuk receiving requests dari frontend, processing requests sesuai business rules, interacting dengan database untuk persist atau retrieve data, dan sending responses kembali ke frontend.

Backend harus designed untuk be secure, scalable, maintainable, dan performant. Security considerations include protecting against common vulnerabilities seperti SQL injection, cross-site scripting, dan unauthorized access. Scalability ensures sistem dapat handle increasing load dengan adding resources. Maintainability memastikan code mudah understood dan modified. Performance optimization ensures fast response times dan efficient resource utilization.

Modern backend development often follows architectural patterns seperti MVC (Model-View-Controller), layered architecture, atau microservices. Patterns ini promote separation of concerns, making code more organized dan easier to maintain. Backend juga increasingly adopts cloud-native practices, containerization, dan DevOps methodologies untuk improve deployment flexibility dan operational efficiency.

### 2.8.2 Node.js sebagai Backend Platform

**Tabel 2.5 Karakteristik dan Keunggulan Node.js**

| Aspek | Deskripsi | Keunggulan untuk CostTrack |
|-------|-----------|----------------------------|
| **Event-Driven Architecture** | Menggunakan event loop untuk handle concurrent operations tanpa blocking | Efficient handling multiple user requests simultaneously |
| **Non-Blocking I/O** | Asynchronous operations memungkinkan server tetap responsive | Fast response times untuk API calls dan database queries |
| **JavaScript Ecosystem** | Same language untuk frontend dan backend | Easier code sharing, reduced context switching untuk developers |
| **NPM Ecosystem** | Largest package registry dengan 1.5+ million packages | Access ke libraries untuk berbagai needs: database drivers, API clients, utilities |
| **V8 Engine** | Google's high-performance JavaScript engine | Fast execution of JavaScript code |
| **Single-Threaded** | Uses single thread dengan event loop | Lightweight dan memory efficient |
| **Scalability** | Horizontal scaling dengan clustering | Can handle growing number of users dan data |
| **JSON Native** | Native support untuk JSON | Seamless data exchange dengan frontend dan APIs |

Node.js dipilih sebagai backend platform untuk sistem CostTrack karena several compelling reasons. Pertama, JavaScript unification memungkinkan developers untuk use same language di frontend dan backend, reducing cognitive load dan enabling code reuse. Kedua, non-blocking I/O model sangat cocok untuk I/O-intensive applications seperti CostTrack yang frequently interacts dengan database dan external APIs. Ketiga, NPM ecosystem menyediakan rich set of packages yang accelerate development, termasuk Express.js untuk web framework, Mongoose untuk MongoDB ODM, Axios untuk HTTP client, dan many others.

Event-driven architecture dari Node.js particularly beneficial untuk real-time features dan handling concurrent requests. Ketika multiple users simultaneously access sistem untuk calculate HPE atau fetch data, Node.js dapat efficiently handle these requests tanpa blocking. Asynchronous nature juga ideal untuk integrating dengan JISDOR API dimana API calls dapat take variable time depending on network conditions. Node.js dapat initiate API call dan continue processing other requests while waiting untuk response.

Performance characteristics dari Node.js dengan V8 engine ensure fast execution of JavaScript code. Untuk computational tasks dalam HPE calculation seperti statistical analysis dari historical data, Node.js provides adequate performance. Untuk extremely CPU-intensive tasks, Node.js dapat leverage worker threads atau offload processing ke specialized services. Memory efficiency dari single-threaded model dengan event loop makes Node.js cost-effective untuk deployment, requiring less server resources compared to traditional multi-threaded servers.

### 2.8.3 Express.js Framework

Express.js adalah minimalist web framework untuk Node.js yang menyediakan robust set of features untuk building web applications dan APIs. Express.js philosophy adalah providing thin layer of fundamental web application features tanpa obscuring Node.js features. Framework ini unopinionated, giving developers flexibility dalam structuring applications dan choosing libraries.

Routing dalam Express.js adalah mechanism untuk defining how application responds to client requests untuk specific endpoints. Routes dapat defined untuk different HTTP methods (GET, POST, PUT, DELETE) dan URL patterns. Route handlers dapat be simple functions atau chain of middleware functions. Route parameters enable dynamic URLs, query strings enable filtering dan pagination, dan route grouping dengan Router enables modular route organization.

Middleware adalah core concept dalam Express.js. Middleware functions have access to request object, response object, dan next middleware function dalam request-response cycle. Middleware dapat execute code, modify request dan response objects, end request-response cycle, atau call next middleware. Application-level middleware applies to all routes, router-level middleware applies to specific router, error-handling middleware handles errors, built-in middleware provides common functionality, dan third-party middleware extends capabilities.

Template engine integration memungkinkan server-side rendering of HTML pages. Meskipun CostTrack primarily uses client-side rendering, server-side rendering dapat useful untuk certain pages seperti landing page atau email templates. Express.js supports various template engines seperti EJS, Pug, dan Handlebars. Error handling dalam Express.js dapat centralized dengan error-handling middleware yang catches errors dari any route atau middleware dan sends appropriate response.

### 2.8.4 RESTful API Design

**Tabel 2.6 Prinsip dan Best Practices RESTful API**

| Prinsip | Deskripsi | Implementasi dalam CostTrack |
|---------|-----------|------------------------------|
| **Resource-Based URLs** | URLs represent resources, bukan actions | /api/komponen, /api/produk, /api/hpe |
| **HTTP Methods** | Use appropriate HTTP methods untuk operations | GET untuk retrieve, POST untuk create, PUT untuk update, DELETE untuk remove |
| **Stateless** | Each request contains all information needed | No server-side session, authentication via tokens |
| **JSON Format** | Use JSON untuk request dan response bodies | Consistent JSON structure untuk all endpoints |
| **Status Codes** | Use appropriate HTTP status codes | 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error |
| **Versioning** | API versioning untuk backward compatibility | /api/v1/komponen |
| **Filtering & Pagination** | Support query parameters untuk filtering dan pagination | /api/komponen?kategori=electronics&page=2&limit=20 |
| **Error Handling** | Consistent error response format | { "error": { "code": "VALIDATION_ERROR", "message": "..." } } |
| **Documentation** | Comprehensive API documentation | Swagger/OpenAPI documentation |
| **Security** | Authentication dan authorization | JWT tokens, role-based access control |

RESTful API design dalam sistem CostTrack follows industry best practices untuk ensure consistency, usability, dan maintainability. Resource naming menggunakan plural nouns untuk collections (komponen, produk, riwayat) dan singular untuk specific resources. URL hierarchy reflects resource relationships, misalnya /api/produk/:id/bom untuk BOM dari specific produk. Query parameters digunakan untuk filtering, sorting, dan pagination, keeping URLs clean dan predictable.

HTTP methods digunakan sesuai semantics: GET untuk read operations yang idempotent dan cacheable, POST untuk create operations yang non-idempotent, PUT untuk full update operations, PATCH untuk partial updates, dan DELETE untuk remove operations. Response status codes accurately reflect operation result: 2xx untuk success, 4xx untuk client errors, dan 5xx untuk server errors. Detailed error messages dalam response body help clients understand dan handle errors appropriately.

Authentication menggunakan JWT (JSON Web Tokens) yang stateless dan scalable. Users login dengan credentials dan receive token yang included dalam subsequent requests via Authorization header. Token contains user information dan expiration time, verified oleh server untuk each protected endpoint. Authorization implements role-based access control dimana certain endpoints restricted to admin users. Middleware checks user role sebelum allowing access ke protected resources.

API documentation menggunakan OpenAPI/Swagger specification yang provides interactive documentation. Documentation includes endpoint descriptions, request/response schemas, example requests dan responses, authentication requirements, dan error codes. Interactive documentation allows developers untuk test endpoints directly dari browser, facilitating API exploration dan integration. Documentation kept up-to-date dengan code changes untuk ensure accuracy.


## 2.9 Alat Pemodelan Sistem

### 2.9.1 Unified Modeling Language (UML)

Unified Modeling Language adalah bahasa pemodelan visual standar yang digunakan untuk specifying, visualizing, constructing, dan documenting artifacts dari software systems. UML dikembangkan oleh Object Management Group dan telah menjadi industry standard untuk software modeling sejak tahun 1997. Menurut Booch et al. (2005), UML menyediakan common vocabulary dan notasi yang memungkinkan software architects, developers, dan stakeholders untuk communicate design decisions dan system structure dengan clear dan unambiguous manner.

UML terdiri dari 14 jenis diagram yang dibagi menjadi dua kategori utama: structure diagrams yang menggambarkan static aspects dari sistem, dan behavior diagrams yang menggambarkan dynamic aspects. Structure diagrams include class diagram, object diagram, component diagram, deployment diagram, package diagram, dan composite structure diagram. Behavior diagrams include use case diagram, activity diagram, state machine diagram, sequence diagram, communication diagram, interaction overview diagram, dan timing diagram. Setiap jenis diagram serves specific purpose dan provides different perspective tentang sistem.

Penggunaan UML dalam software development lifecycle memberikan multiple benefits. UML diagrams serve sebagai blueprint untuk implementation, membantu developers understand system architecture dan design decisions. Diagrams juga facilitate communication antar team members dan dengan stakeholders, providing visual representation yang easier to understand dibanding textual descriptions. UML documentation serves sebagai reference untuk maintenance dan future enhancements, helping new team members quickly understand system structure.

### 2.9.2 Tools untuk Pemodelan Sistem

**Tabel 2.7 Perbandingan Tools Pemodelan Sistem**

| Tool | Jenis | Kelebihan | Kekurangan | Harga | Cocok Untuk |
|------|-------|-----------|------------|-------|-------------|
| **Draw.io** | Web-based | - Gratis dan open source<br>- Tidak perlu instalasi<br>- Support berbagai diagram<br>- Export ke multiple formats<br>- Integrasi cloud storage | - Fitur terbatas dibanding tools premium<br>- Collaboration features basic | Gratis | Small teams, academic projects, quick diagrams |
| **Lucidchart** | Web-based | - Interface intuitif<br>- Real-time collaboration<br>- Template library lengkap<br>- Integrasi dengan tools lain<br>- Professional output | - Subscription required<br>- Limited free tier | $7.95-$20/user/month | Professional teams, collaborative projects |
| **Microsoft Visio** | Desktop | - Fitur lengkap dan powerful<br>- Integrasi Microsoft Office<br>- Template profesional<br>- Enterprise features | - Mahal<br>- Windows only<br>- Learning curve steep | $5-$15/user/month | Enterprise organizations, complex diagrams |
| **PlantUML** | Text-based | - Text-based, version control friendly<br>- Fast untuk simple diagrams<br>- IDE integration<br>- Automation friendly | - Limited customization<br>- Learning curve untuk syntax<br>- Less visual control | Gratis | Developers, documentation as code, CI/CD integration |
| **StarUML** | Desktop | - Professional UML tool<br>- Support semua UML diagrams<br>- Code generation<br>- Extensible | - License required untuk full features<br>- Less intuitive | $89 one-time | Professional UML modeling, code generation needs |
| **Visual Paradigm** | Desktop/Web | - Comprehensive features<br>- Support multiple methodologies<br>- Team collaboration<br>- Database design | - Expensive<br>- Complex interface<br>- Resource intensive | $6-$19/user/month | Enterprise, comprehensive modeling needs |

Pemilihan tool untuk pemodelan sistem bergantung pada several factors termasuk project requirements, team size, budget, dan collaboration needs. Untuk academic projects atau small teams dengan limited budget, Draw.io atau PlantUML merupakan excellent choices yang provide adequate functionality tanpa cost. Untuk professional teams yang require real-time collaboration dan polished output, Lucidchart atau Visual Paradigm lebih appropriate meskipun require subscription.

Integration dengan development workflow juga important consideration. PlantUML's text-based approach memungkinkan diagrams to be version controlled alongside code, facilitating documentation as code practices. Tools dengan IDE plugins seperti PlantUML atau StarUML enable developers untuk create dan update diagrams tanpa leaving development environment. Cloud-based tools seperti Lucidchart atau Draw.io facilitate remote collaboration, particularly important untuk distributed teams.

Export capabilities juga crucial untuk sharing diagrams dengan stakeholders atau including dalam documentation. Most tools support export ke common formats seperti PNG, SVG, PDF, dan sometimes editable formats seperti VSDX. SVG format particularly useful karena scalable dan dapat embedded dalam web pages. PDF format ideal untuk printed documentation atau formal presentations.

## 2.10 Alat Pembuatan Program

### 2.10.1 Integrated Development Environment (IDE)

**Tabel 2.8 Perbandingan IDE dan Code Editors**

| Tool | Tipe | Kelebihan | Kekurangan | Harga | Best For |
|------|------|-----------|------------|-------|----------|
| **Visual Studio Code** | Code Editor | - Gratis dan open source<br>- Lightweight namun powerful<br>- Extensive extension marketplace<br>- Excellent JavaScript/TypeScript support<br>- Integrated terminal<br>- Git integration<br>- Cross-platform | - Bukan full IDE<br>- Perlu extensions untuk full functionality | Gratis | Web development, JavaScript/Node.js, general purpose |
| **WebStorm** | IDE | - Intelligent code completion<br>- Advanced debugging<br>- Built-in tools<br>- Refactoring tools<br>- Framework-specific support | - Paid license<br>- Resource intensive<br>- Overkill untuk simple projects | $6.90/month | Professional JavaScript development, large projects |
| **Sublime Text** | Code Editor | - Extremely fast<br>- Lightweight<br>- Multiple selections<br>- Command palette<br>- Plugin ecosystem | - Limited free trial<br>- Less features than VS Code<br>- Smaller community | $99 one-time | Fast editing, large files, minimalist preference |
| **Atom** | Code Editor | - Open source<br>- Hackable<br>- GitHub integration<br>- Package ecosystem | - Slower than competitors<br>- Higher memory usage<br>- Development slowed | Gratis | GitHub users, customization enthusiasts |

Visual Studio Code telah menjadi de facto standard untuk web development karena combination of being free, powerful, dan extensible. VS Code menyediakan IntelliSense untuk intelligent code completion yang understands JavaScript, TypeScript, dan Node.js APIs. Debugging capabilities include breakpoints, call stacks, dan interactive console. Git integration memungkinkan version control operations directly dari editor. Integrated terminal eliminates need untuk switching between editor dan command line.

Extensions ecosystem adalah key strength dari VS Code. Extensions available untuk virtually every programming language, framework, dan tool. Popular extensions untuk web development include ESLint untuk JavaScript linting, Prettier untuk code formatting, Live Server untuk local development server, REST Client untuk testing APIs, dan GitLens untuk enhanced Git capabilities. Extensions dapat easily installed, configured, dan managed melalui VS Code marketplace.

Workspace settings dalam VS Code memungkinkan project-specific configurations yang shared across team members via version control. Settings dapat configure formatting rules, linting rules, file associations, dan extension behaviors. Multi-root workspaces enable working dengan multiple related projects simultaneously. Tasks dan launch configurations enable automation of common workflows seperti building, testing, atau debugging.

### 2.10.2 Version Control dan Collaboration Tools

**Tabel 2.9 Tools untuk Version Control dan Collaboration**

| Tool | Fungsi | Fitur Utama | Penggunaan dalam CostTrack |
|------|--------|-------------|----------------------------|
| **Git** | Distributed version control | - Branching dan merging<br>- Commit history<br>- Distributed architecture<br>- Fast operations | - Track code changes<br>- Manage different versions<br>- Collaborate dengan team<br>- Rollback jika needed |
| **GitHub** | Git repository hosting | - Repository hosting<br>- Pull requests<br>- Issues tracking<br>- GitHub Actions (CI/CD)<br>- Wiki dan documentation | - Host source code<br>- Code review process<br>- Track bugs dan features<br>- Automated testing dan deployment |
| **MongoDB Compass** | MongoDB GUI | - Visual query builder<br>- Schema analysis<br>- Index management<br>- Performance monitoring | - Browse dan query data<br>- Analyze database structure<br>- Optimize queries<br>-  |
| **Postman** | API testing | - Send HTTP requests<br>- Collections<br>- Environment variables<br>- Automated testing<br>- Documentation | - Test API endpoints<br>- Validate responses<br>- Automate API testing<br>- Document API usage |
| **Chrome DevTools** | Browser developer tools | - Element inspection<br>- Console<br>- Network monitoring<br>- Debugging<br>- Performance profiling | - Debug frontend code<br>- Inspect network requests<br>- Analyze performance<br>- Test responsive design |

Git workflow dalam development CostTrack follows best practices untuk maintain code quality dan enable collaboration. Main branch contains production-ready code yang stable dan tested. Development branch serves sebagai integration branch untuk features yang completed tetapi belum ready untuk production. Feature branches created untuk each new feature atau bug fix, allowing isolated development tanpa affecting main codebase. Branches merged kembali ke development melalui pull requests yang reviewed oleh team members.

Commit messages follow conventional commits format yang provides structured information tentang changes. Format includes type (feat, fix, docs, style, refactor, test, chore), optional scope, dan description. Good commit messages facilitate understanding of project history dan enable automated changelog generation. Commits should be atomic, representing single logical change, making it easier untuk review, revert, atau cherry-pick changes.

GitHub pull requests serve sebagai code review mechanism. When feature branch ready untuk merge, developer creates pull request dengan description of changes, screenshots jika applicable, dan reference ke related issues. Team members review code, provide feedback, dan approve atau request changes. Automated checks run via GitHub Actions untuk ensure code passes tests dan meets quality standards. Once approved dan checks pass, pull request dapat merged.

## 2.11 MongoDB Database

### 2.11.1 Pengertian dan Karakteristik MongoDB

MongoDB adalah document-oriented NoSQL database yang menyimpan data dalam flexible, JSON-like documents. Berbeda dengan relational databases yang menggunakan tables dan rows, MongoDB menggunakan collections dan documents. Menurut Banker (2016), MongoDB dirancang untuk provide high performance, high availability, dan automatic scaling, making it ideal untuk modern applications yang require flexibility dan scalability.

Document model dalam MongoDB provides natural way untuk represent data yang mirrors how developers think about dan work dengan data dalam applications. Documents dapat contain nested structures dan arrays, eliminating need untuk complex joins yang common dalam relational databases. Schema flexibility memungkinkan documents dalam same collection untuk have different structures, accommodating evolving data requirements tanpa requiring schema migrations.

MongoDB's architecture supports horizontal scaling melalui sharding, dimana data distributed across multiple servers. Replication provides high availability melalui replica sets dimana data replicated across multiple servers. Jika primary server fails, secondary server automatically promoted untuk maintain availability. Query language yang rich dan expressive memungkinkan complex queries, aggregations, dan text search. Indexing capabilities ensure fast query performance even dengan large datasets.

### 2.11.2 MongoDB untuk Sistem CostTrack

**Tabel 2.10 Keunggulan MongoDB untuk Sistem CostTrack**

| Aspek | Keunggulan | Implementasi dalam CostTrack |
|-------|------------|------------------------------|
| **Flexible Schema** | Documents dapat have different structures | - BOM dengan varying levels of hierarchy<br>- Komponen dengan different attributes based on category<br>- Easy addition of new fields tanpa migration |
| **Document Model** | Natural representation of hierarchical data | - BOM structure dengan parent-child relationships<br>- Nested detail_perhitungan dalam HPE_Result<br>- Embedded supplier information dalam Riwayat |
| **JSON Format** | Native JSON support | - Seamless data exchange dengan frontend<br>- Easy integration dengan Node.js<br>- Direct mapping dengan JavaScript objects |
| **Scalability** | Horizontal scaling dengan sharding | - Handle growing volume of riwayat pengadaan<br>- Support increasing number of users<br>- Distribute data across servers jika needed |
| **Performance** | Fast queries dengan proper indexing | - Quick retrieval of historical data<br>- Efficient BOM traversal<br>- Fast aggregation untuk HPE calculation |
| **Aggregation Framework** | Powerful data processing pipeline | - Calculate statistics dari riwayat pengadaan<br>- Group dan analyze data by various dimensions<br>- Generate reports dengan complex calculations |
| **Geospatial Queries** | Support untuk location-based queries | - Future enhancement untuk supplier location analysis<br>- Logistics optimization |
| **Text Search** | Full-text search capabilities | - Search komponen by name atau description<br>- Find produk by keywords<br>- Flexible search functionality |

Mongoose ODM (Object Data Modeling) library provides elegant solution untuk modeling application data dalam MongoDB. Mongoose defines schemas yang provide structure dan validation untuk documents, bridging gap between schema-less MongoDB dan structured application requirements. Schemas define fields, types, default values, validators, dan other constraints. Models created dari schemas provide interface untuk querying dan manipulating data.

Validation dalam Mongoose ensures data integrity sebelum saving ke database. Built-in validators include required, min, max, enum, dan match. Custom validators dapat defined untuk complex validation logic. Validation errors automatically caught dan returned, allowing application untuk provide meaningful feedback kepada users. Pre dan post hooks enable execution of custom logic before atau after certain operations, useful untuk tasks seperti hashing passwords, updating timestamps, atau cascading deletes.

Indexing strategy dalam MongoDB crucial untuk query performance. Indexes created pada fields yang frequently queried, sorted, atau used dalam joins. Compound indexes support queries yang filter atau sort by multiple fields. Text indexes enable full-text search. Unique indexes enforce uniqueness constraints. Index usage monitored melalui explain plans yang show how queries executed dan whether indexes utilized effectively. Over-indexing avoided karena indexes consume storage space dan slow down write operations.

## 2.12 Tinjauan Pustaka

### 2.12.1 Penelitian Terkait Sistem Estimasi Biaya

**Tabel 2.11 Penelitian Sejenis tentang Sistem Estimasi Biaya**

| No | Peneliti & Tahun | Judul Penelitian | Metode | Hasil | Gap dengan CostTrack |
|----|------------------|------------------|--------|-------|----------------------|
| 1 | Asiyanto (2005) | Manajemen Produksi untuk Jasa Konstruksi | Studi literatur dan analisis data historis | Estimasi biaya yang akurat meningkatkan keberhasilan proyek konstruksi hingga 75% | Fokus pada konstruksi, tidak ada integrasi data kurs real-time |
| 2 | Soeharto (2001) | Manajemen Proyek: Dari Konseptual Sampai Operasional | Analisis komparatif metode manual vs terkomputerisasi | Sistem terkomputerisasi meningkatkan akurasi estimasi hingga 85% | Tidak spesifik untuk komponen impor dan konversi mata uang |
| 3 | Husen (2011) | Manajemen Proyek: Perencanaan, Penjadwalan, dan Pengendalian Proyek | Studi kasus pada proyek konstruksi | Database historis yang terstruktur meningkatkan akurasi estimasi 60-70% | Tidak ada otomatisasi perhitungan dengan multiple metode statistik |
| 4 | Widiasanti & Lenggogeni (2013) | Manajemen Konstruksi | Analisis proses estimasi biaya | Fragmentasi data menyebabkan inefficiency dan error hingga 40% | Tidak ada solusi sistem terpadu yang diusulkan |
| 5 | Ervianto (2005) | Manajemen Proyek Konstruksi | Studi empiris | Metode manual memakan waktu 3-5x lebih lama dibanding otomatis | Tidak membahas integrasi API eksternal |

**Tabel 2.12 Penelitian Terkait Integrasi Data Real-time**

| No | Peneliti & Tahun | Judul Penelitian | Metode | Hasil | Relevansi dengan CostTrack |
|----|------------------|------------------|--------|-------|----------------------------|
| 1 | Laudon & Laudon (2018) | Management Information Systems: Managing the Digital Firm | Analisis sistem informasi modern | Integrasi data real-time meningkatkan kualitas keputusan hingga 65% | Validasi pentingnya integrasi JISDOR real-time |
| 2 | Richardson & Ruby (2007) | RESTful Web Services | Studi implementasi API | API integration efisien dan cost-effective untuk extend functionality | Mendukung pendekatan integrasi API JISDOR |
| 3 | Turban et al. (2015) | Information Technology for Management | Studi kasus multiple industries | Real-time data reduces decision latency by 70% | Justifikasi untuk real-time currency data |
| 4 | Chaffey & White (2011) | Business Information Management | Analisis enterprise systems | Data integration mengurangi redundancy dan inconsistency hingga 80% | Mendukung konsep database terpadu |
| 5 | O'Brien & Marakas (2011) | Management Information Systems | Framework analisis | Automated systems reduce human error by 90% | Validasi benefit otomatisasi perhitungan |

**Tabel 2.13 Penelitian Terkait Teknologi Web Modern**

| No | Peneliti & Tahun | Judul Penelitian | Metode | Hasil | Relevansi dengan CostTrack |
|----|------------------|------------------|--------|-------|----------------------------|
| 1 | Cantelon et al. (2017) | Node.js in Action | Implementasi dan benchmarking | Node.js superior untuk I/O intensive applications dengan throughput 2-3x higher | Justifikasi pemilihan Node.js sebagai backend |
| 2 | Banker (2016) | MongoDB in Action | Studi kasus implementasi | MongoDB ideal untuk hierarchical data dengan 40% faster queries | Mendukung pemilihan MongoDB untuk BOM storage |
| 3 | Brown (2016) | Web Development with Node and Express | Analisis framework comparison | Express.js provides optimal balance antara simplicity dan functionality | Validasi penggunaan Express.js |
| 4 | Duckett (2014) | JavaScript and jQuery | Studi usability | Modern JavaScript improves development speed by 50% | Mendukung penggunaan JavaScript ES6+ |
| 5 | Marcotte (2011) | Responsive Web Design | Implementasi dan user testing | Responsive design increases mobile user satisfaction by 85% | Justifikasi responsive design approach |

### 2.12.2 Gap Analysis dan Kontribusi Penelitian

Berdasarkan tinjauan pustaka yang komprehensif, teridentifikasi beberapa gap yang akan diisi oleh penelitian ini. Gap pertama adalah ketiadaan sistem estimasi biaya yang mengintegrasikan data kurs real-time dari sumber resmi. Penelitian-penelitian sebelumnya fokus pada estimasi biaya dengan data statis atau manual input untuk nilai tukar. Sistem CostTrack mengisi gap ini dengan mengintegrasikan API JISDOR Bank Indonesia yang menyediakan data kurs USD-IDR secara real-time dan reliable. Integrasi ini particularly important untuk konteks Indonesia dimana banyak komponen teknologi dan bahan baku diimpor, sehingga fluktuasi nilai tukar memiliki dampak signifikan terhadap akurasi estimasi biaya.

Gap kedua adalah fragmentasi data dalam sistem estimasi biaya existing. Penelitian Widiasanti & Lenggogeni (2013) mengidentifikasi bahwa fragmentasi data menyebabkan inefficiency dan error, namun tidak menawarkan solusi konkret. Sistem CostTrack menyediakan platform terpadu yang mengintegrasikan data komponen, supplier, riwayat pengadaan, dan kurs dalam satu database yang terstruktur. Integrasi ini mengeliminasi redundancy, meningkatkan consistency, dan memudahkan validasi data. Database design yang normalized memastikan data integrity sementara indexing strategy mengoptimalkan query performance.

Gap ketiga adalah keterbatasan dalam metode perhitungan. Sistem existing umumnya menggunakan single method untuk estimasi, biasanya simple average. Sistem CostTrack menyediakan multiple metode perhitungan (mean, median, weighted average) yang dapat dipilih berdasarkan karakteristik data dan kebutuhan analisis. Weighted average method dengan time-based weighting particularly innovative karena memberikan emphasis lebih pada data recent yang lebih relevan dengan kondisi pasar current. Flexibility dalam pemilihan metode memungkinkan users untuk obtain estimasi yang paling akurat untuk specific scenarios.

Gap keempat adalah kurangnya fokus pada komponen impor dan konversi mata uang. Penelitian Soeharto (2001) dan Asiyanto (2005) membahas estimasi biaya secara umum tetapi tidak specifically address challenges dari komponen impor yang require currency conversion. Sistem CostTrack specifically designed untuk handle komponen dengan mixed currencies, automatically converting USD prices ke IDR menggunakan current exchange rate. System juga maintains historical exchange rates untuk analysis dan audit purposes. Capability ini critical untuk Indonesian context dimana import dependency tinggi.

Gap kelima adalah adoption dari teknologi modern dalam sistem estimasi biaya. Banyak sistem existing menggunakan teknologi legacy yang sulit untuk maintain dan scale. Sistem CostTrack mengadopsi modern technology stack (Node.js, Express.js, MongoDB) yang provides benefits dalam terms of performance, scalability, dan developer productivity. Use of RESTful API architecture memungkinkan future integration dengan sistem lain. Responsive web design ensures accessibility dari berbagai devices. Modern development practices seperti version control, automated testing, dan continuous integration adopted untuk ensure code quality dan facilitate collaboration.

### 2.12.3 Kontribusi Penelitian

Penelitian ini memberikan kontribusi signifikan dalam beberapa dimensi. Dari perspektif praktis, penelitian ini menghasilkan sistem informasi yang functional dan dapat immediately deployed untuk solve real-world problems dalam perhitungan HPE. Sistem ini dapat diadaptasi oleh berbagai organisasi, particularly yang heavily rely pada imported components. Implementation guide dan documentation yang comprehensive memudahkan adoption dan customization. Case study dari implementation provides insights tentang challenges dan best practices yang valuable untuk practitioners.

Dari perspektif akademis, penelitian ini contributes ke body of knowledge dalam bidang sistem informasi manajemen, particularly dalam area cost estimation systems dan real-time data integration. Detailed documentation tentang system design, implementation challenges, dan solutions provides reference untuk future research. Methodology yang digunakan dalam development dan evaluation dapat replicated atau adapted untuk similar projects. Analysis tentang effectiveness dari different calculation methods provides empirical evidence yang valuable untuk academic discourse.

Dari perspektif teknologi, penelitian ini demonstrates practical application dari modern web technologies dalam enterprise context. Implementation details tentang Node.js backend, MongoDB database design, dan RESTful API architecture provides technical reference yang valuable. Integration dengan external API (JISDOR) showcases best practices dalam API consumption, error handling, dan data synchronization. Responsive frontend implementation demonstrates modern web development techniques. Open source nature dari technologies used promotes accessibility dan reproducibility.

Dari perspektif ekonomi, penelitian ini contributes ke efficiency improvement dalam procurement processes. Accurate cost estimation reduces budget overruns dan enables better financial planning. Time savings dari automation allows procurement professionals untuk focus pada strategic activities rather than manual calculations. Reduced human error minimizes costly mistakes. Better data management enables data-driven decision making dan continuous improvement. Overall, system provides positive return on investment melalui combination of cost savings, time savings, dan improved accuracy.

Dari perspektif sosial, penelitian ini promotes digital transformation dalam Indonesian organizations. By demonstrating feasibility dan benefits dari modern information systems, research encourages adoption of technology untuk improve business processes. Use of official data source (JISDOR) promotes transparency dan accountability. Accessibility dari web-based system enables broader participation dalam procurement processes. Documentation dalam Bahasa Indonesia facilitates knowledge transfer dan capacity building. Overall, research contributes ke digital literacy dan technological advancement dalam Indonesian context.

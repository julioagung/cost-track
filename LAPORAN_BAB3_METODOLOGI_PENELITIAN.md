# BAB III
# METODOLOGI PENELITIAN

## 3.1 Kerangka Kerja Penelitian

### 3.1.1 Pengertian Kerangka Kerja Penelitian

Kerangka kerja penelitian merupakan struktur sistematis yang menggambarkan tahapan-tahapan yang dilakukan dalam penelitian untuk mencapai tujuan yang telah ditetapkan. Kerangka kerja ini berfungsi sebagai roadmap yang memberikan arah dan panduan dalam pelaksanaan penelitian, mulai dari identifikasi masalah hingga evaluasi hasil akhir. Dalam konteks pengembangan sistem informasi CostTrack, kerangka kerja penelitian dirancang untuk memastikan bahwa setiap tahapan development dilakukan secara terstruktur dan terintegrasi.

Kerangka kerja penelitian ini mengadopsi pendekatan sequential yang dimulai dari fase analisis dan perancangan, dilanjutkan dengan implementasi, testing, dan evaluasi. Setiap tahapan memiliki deliverables yang jelas dan measurable, sehingga progress penelitian dapat dimonitor dan dievaluasi secara objektif. Pendekatan ini memastikan bahwa sistem yang dikembangkan tidak hanya memenuhi requirements teknis, tetapi juga memberikan solusi yang efektif untuk permasalahan perhitungan HPE yang telah diidentifikasi.

### 3.1.2 Flowchart Kerangka Kerja Penelitian

```
                    ┌─────────────────────────┐
                    │      MULAI PENELITIAN   │
                    └─────────────┬───────────┘
                                  │
                    ┌─────────────▼───────────┐
                    │   IDENTIFIKASI MASALAH  │
                    │   - Studi literatur     │
                    │   - Analisis kebutuhan  │
                    │   - Rumusan masalah     │
                    └─────────────┬───────────┘
                                  │
                    ┌─────────────▼───────────┐
                    │   ANALISIS SISTEM       │
                    │   - Analisis proses     │
                    │   - Identifikasi aktor  │
                    │   - Functional req.     │
                    │   - Non-functional req. │
                    └─────────────┬───────────┘
                                  │
                    ┌─────────────▼───────────┐
                    │   PERANCANGAN SISTEM    │
                    │   - Use Case Diagram    │
                    │   - Activity Diagram    │
                    │   - ERD Database        │
                    │   - Arsitektur Sistem   │
                    └─────────────┬───────────┘
                                  │
                    ┌─────────────▼───────────┐
                    │   IMPLEMENTASI SISTEM   │
                    │   - Setup environment   │
                    │   - Database design     │
                    │   - Backend development │
                    │   - Frontend development│
                    │   - API integration     │
                    └─────────────┬───────────┘
                                  │
                    ┌─────────────▼───────────┐
                    │   TESTING SISTEM        │
                    │   - Unit testing        │
                    │   - Integration testing │
                    │   - System testing      │
                    │   - User acceptance     │
                    └─────────────┬───────────┘
                                  │
                         ┌────────▼────────┐
                         │   Testing OK?   │
                         └────────┬────────┘
                                  │
                            ┌─────▼─────┐
                            │    Ya     │
                            └─────┬─────┘
                                  │
                    ┌─────────────▼───────────┐
                    │   EVALUASI SISTEM       │
                    │   - Performance test    │
                    │   - Usability test      │
                    │   - Accuracy test       │
                    │   - Feedback analysis   │
                    └─────────────┬───────────┘
                                  │
                    ┌─────────────▼───────────┐
                    │   DOKUMENTASI           │
                    │   - User manual         │
                    │   - Technical docs      │
                    │   - Laporan penelitian  │
                    └─────────────┬───────────┘
                                  │
                    ┌─────────────▼───────────┐
                    │   SELESAI PENELITIAN    │
                    └─────────────────────────┘

                            ┌─────▼─────┐
                            │   Tidak   │
                            └─────┬─────┘
                                  │
                    ┌─────────────▼───────────┐
                    │   PERBAIKAN SISTEM      │
                    │   - Bug fixing          │
                    │   - Performance tuning  │
                    │   - Feature enhancement │
                    └─────────────┬───────────┘
                                  │
                                  └─────────────┐
                                                │
                    ┌───────────────────────────▼┐
                    │   KEMBALI KE TESTING       │
                    └────────────────────────────┘
```

### 3.1.3 Penjelasan Tahapan Kerangka Kerja

**Tahap 1: Identifikasi Masalah**
Tahap ini merupakan foundation dari seluruh penelitian dimana dilakukan identifikasi permasalahan yang ada dalam perhitungan HPE secara manual. Aktivitas yang dilakukan meliputi studi literatur untuk memahami best practices dalam estimasi biaya, analisis kebutuhan melalui observasi dan wawancara dengan stakeholder, serta perumusan masalah yang spesifik dan terukur. Output dari tahap ini adalah problem statement yang jelas dan objectives penelitian yang SMART (Specific, Measurable, Achievable, Relevant, Time-bound).

**Tahap 2: Analisis Sistem**
Pada tahap ini dilakukan analisis mendalam terhadap sistem yang akan dikembangkan. Analisis proses bisnis dilakukan untuk memahami workflow perhitungan HPE yang existing dan yang diinginkan. Identifikasi aktor dilakukan untuk menentukan siapa saja yang akan berinteraksi dengan sistem. Functional requirements didefinisikan berdasarkan kebutuhan bisnis, sementara non-functional requirements seperti performance, security, dan usability juga diidentifikasi. Tahap ini menghasilkan Software Requirements Specification (SRS) yang komprehensif.

**Tahap 3: Perancangan Sistem**
Tahap perancangan mentransformasikan requirements menjadi design specifications yang dapat diimplementasikan. Use Case Diagram dibuat untuk menggambarkan interaksi antara aktor dengan sistem. Activity Diagram menggambarkan workflow proses perhitungan HPE. Entity Relationship Diagram (ERD) merancang struktur database yang optimal. Arsitektur sistem didefinisikan termasuk technology stack, deployment architecture, dan integration points. Output tahap ini adalah System Design Document yang detail.

**Tahap 4: Implementasi Sistem**
Tahap implementasi adalah fase development actual dimana design diterjemahkan menjadi working system. Setup development environment dilakukan terlebih dahulu. Database diimplementasikan sesuai dengan ERD yang telah dirancang. Backend development menggunakan Node.js dan Express.js untuk membuat RESTful APIs. Frontend development menggunakan HTML, CSS, dan JavaScript untuk membuat user interface yang responsive. Integrasi dengan JISDOR API dilakukan untuk mendapatkan data kurs real-time. Version control menggunakan Git untuk manage code changes.

**Tahap 5: Testing Sistem**
Testing dilakukan secara bertahap mulai dari unit testing untuk menguji individual components, integration testing untuk menguji interaksi antar components, system testing untuk menguji sistem secara keseluruhan, dan user acceptance testing untuk validasi dari end users. Setiap level testing memiliki test cases yang specific dan measurable. Bug tracking dilakukan untuk mendokumentasikan dan mengelola issues yang ditemukan. Testing results didokumentasikan untuk reference dan improvement.

**Tahap 6: Evaluasi Sistem**
Evaluasi dilakukan untuk mengukur apakah sistem memenuhi objectives yang telah ditetapkan. Performance testing mengukur response time, throughput, dan resource utilization. Usability testing melibatkan real users untuk mengevaluasi ease of use. Accuracy testing membandingkan hasil perhitungan sistem dengan manual calculation. Feedback dari users dikumpulkan dan dianalisis untuk identify areas for improvement. Metrics dan KPIs digunakan untuk objective evaluation.

**Tahap 7: Dokumentasi**
Dokumentasi komprehensif dibuat untuk memastikan sistem dapat digunakan, dipelihara, dan dikembangkan lebih lanjut. User manual dibuat untuk end users dengan step-by-step instructions. Technical documentation dibuat untuk developers dan system administrators. Laporan penelitian dibuat untuk mendokumentasikan seluruh process, findings, dan recommendations. Documentation harus up-to-date dan accessible untuk stakeholders yang relevant.

## 3.2 Metode Pengembangan Sistem

### 3.2.1 Pemilihan Metode Pengembangan

Penelitian ini menggunakan metode pengembangan Prototype Model yang dipilih berdasarkan karakteristik proyek dan kebutuhan stakeholder. Prototype model sangat sesuai untuk pengembangan sistem CostTrack karena beberapa alasan. Pertama, requirements untuk sistem estimasi biaya dapat berkembang selama development process, dan prototype model memungkinkan refinement requirements berdasarkan feedback dari prototype. Kedua, stakeholder dapat lebih mudah memahami dan memberikan feedback terhadap working prototype dibandingkan dengan abstract specifications. Ketiga, prototype model memungkinkan early detection of usability issues dan design flaws.

Prototype model juga dipilih karena nature dari sistem CostTrack yang melibatkan complex calculations dan user interactions. Dengan membuat prototype, tim development dapat validate calculation algorithms, test user interface design, dan ensure integration dengan external APIs berfungsi dengan baik sebelum full implementation. Feedback dari prototype testing dapat digunakan untuk improve system design dan implementation, resulting in higher quality final product.

### 3.2.2 Visual Model Pengembangan Sistem

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           PROTOTYPE MODEL                                   │
└─────────────────────────────────────────────────────────────────────────────┘

    ┌─────────────────┐
    │   REQUIREMENTS  │
    │   GATHERING     │
    │                 │
    │ • Stakeholder   │
    │   interviews    │
    │ • Business      │
    │   analysis      │
    │ • Use cases     │
    └─────────┬───────┘
              │
              ▼
    ┌─────────────────┐
    │   QUICK DESIGN  │
    │                 │
    │ • UI mockups    │
    │ • Basic         │
    │   architecture  │
    │ • Key features  │
    │   identification│
    └─────────┬───────┘
              │
              ▼
    ┌─────────────────┐
    │ BUILD PROTOTYPE │
    │                 │
    │ • Core features │
    │ • Basic UI      │
    │ • Sample data   │
    │ • Key workflows │
    └─────────┬───────┘
              │
              ▼
    ┌─────────────────┐
    │ USER EVALUATION │
    │                 │
    │ • Demo sessions │
    │ • Feedback      │
    │   collection    │
    │ • Usability     │
    │   testing       │
    └─────────┬───────┘
              │
              ▼
    ┌─────────────────┐
    │   REFINEMENT    │
    │                 │
    │ • Requirements  │
    │   update        │
    │ • Design        │
    │   improvements  │
    │ • Feature       │
    │   enhancements  │
    └─────────┬───────┘
              │
              ▼
         ┌────────┐
         │Satisfied?│
         └────┬───┘
              │
        ┌─────▼─────┐
        │    No     │
        └─────┬─────┘
              │
              └──────────────┐
                             │
    ┌─────────────────┐      │
    │    Yes          │      │
    └─────────┬───────┘      │
              │              │
              ▼              │
    ┌─────────────────┐      │
    │ FINAL SYSTEM    │      │
    │ DEVELOPMENT     │      │
    │                 │      │
    │ • Full          │      │
    │   implementation│      │
    │ • Complete      │      │
    │   testing       │      │
    │ • Documentation │      │
    │ • Deployment    │      │
    └─────────────────┘      │
                             │
    ┌────────────────────────▼┐
    │   BACK TO PROTOTYPE     │
    │   REFINEMENT            │
    └─────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                        ITERASI PROTOTYPE                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PROTOTYPE 1          PROTOTYPE 2          PROTOTYPE 3                     │
│  ┌─────────────┐      ┌─────────────┐      ┌─────────────┐                 │
│  │ • Basic UI  │      │ • Enhanced  │      │ • Complete  │                 │
│  │ • Core calc │ ──►  │   UI/UX     │ ──►  │   features  │                 │
│  │ • Static    │      │ • JISDOR    │      │ • Full      │                 │
│  │   data      │      │   API       │      │   testing   │                 │
│  │ • Manual    │      │ • Database  │      │ • User      │                 │
│  │   testing   │      │   integration│      │   training  │                 │
│  └─────────────┘      └─────────────┘      └─────────────┘                 │
│                                                                             │
│  FEEDBACK:             FEEDBACK:             FEEDBACK:                      │
│  • UI improvements     • Performance        • Minor bugs                    │
│  • Missing features    • Additional         • Documentation                 │
│  • Calculation         •   validations      • Training needs                │
│    accuracy            • Better error       • Deployment                    │
│                         handling             requirements                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2.3 Tahapan Metode Prototype

**Requirements Gathering**
Tahap ini melibatkan pengumpulan requirements melalui berbagai metode termasuk stakeholder interviews, business process analysis, dan use case identification. Stakeholder interviews dilakukan dengan procurement staff, finance team, dan management untuk understand current pain points dan desired improvements. Business process analysis dilakukan untuk map existing HPE calculation workflow dan identify inefficiencies. Use cases didefinisikan untuk capture functional requirements dari different user perspectives.

**Quick Design**
Berdasarkan requirements yang dikumpulkan, quick design dibuat untuk provide high-level view dari sistem. UI mockups dibuat untuk visualize user interface dan user experience. Basic system architecture didefinisikan termasuk technology choices dan integration points. Key features diidentifikasi dan diprioritaskan untuk prototype development. Design ini intentionally high-level dan focused pada core functionality rather than detailed specifications.

**Build Prototype**
Prototype dikembangkan dengan focus pada core features yang most critical untuk user evaluation. Basic user interface diimplementasikan dengan essential screens dan navigation. Sample data digunakan untuk demonstrate functionality tanpa requiring full database implementation. Key workflows seperti HPE calculation diimplementasikan dengan simplified logic. Prototype designed untuk be functional enough untuk meaningful user evaluation tetapi not production-ready.

**User Evaluation**
Prototype dievaluasi oleh representative users melalui demo sessions dan hands-on testing. Feedback dikumpulkan melalui structured questionnaires, interviews, dan observation during testing sessions. Usability issues diidentifikasi melalui task-based testing dimana users diminta untuk complete specific scenarios. Performance dan accuracy juga dievaluasi dalam limited scope. Feedback didokumentasikan dan analyzed untuk inform next iteration.

**Refinement**
Berdasarkan user feedback, requirements diupdate untuk reflect new understanding atau changed priorities. Design improvements dibuat untuk address usability issues atau functional gaps. Feature enhancements diidentifikasi untuk next prototype iteration. Technical issues discovered during evaluation juga addressed. Refinement process continues until stakeholders satisfied dengan prototype functionality dan usability.

**Final System Development**
Setelah prototype approved, full system development dimulai berdasarkan refined requirements dan design. Complete implementation dilakukan dengan production-quality code, comprehensive error handling, dan full feature set. Thorough testing dilakukan including unit tests, integration tests, dan system tests. Complete documentation dibuat including user manuals dan technical documentation. System deployed ke production environment dengan proper monitoring dan support procedures.

### 3.2.4 Keunggulan Metode Prototype untuk CostTrack

Metode prototype memberikan several advantages untuk pengembangan sistem CostTrack. User involvement yang tinggi memastikan bahwa sistem developed sesuai dengan actual user needs dan expectations. Early feedback memungkinkan course correction sebelum significant resources invested dalam wrong direction. Risk reduction achieved melalui early validation of key assumptions dan technical approaches. Improved communication antara developers dan stakeholders melalui tangible prototype yang dapat dilihat dan digunakan.

Prototype model juga memungkinkan iterative improvement dimana setiap iteration builds upon lessons learned dari previous iteration. Hal ini particularly valuable untuk sistem seperti CostTrack dimana calculation accuracy dan user experience equally important. Complex requirements dapat better understood melalui working prototype rather than abstract specifications. Integration challenges dengan external APIs seperti JISDOR dapat identified dan resolved early dalam development process.

## 3.3 Alat Bantu Tools Pengembangan Program

### 3.3.1 Perangkat Keras (Hardware)

Pengembangan sistem CostTrack menggunakan perangkat keras yang memadai untuk mendukung seluruh aktivitas development, testing, dan deployment. Spesifikasi perangkat keras yang digunakan dirancang untuk memenuhi kebutuhan development modern yang meliputi code editing, database management, web server operation, dan browser testing.

**Laptop ASUS A15 FA506**
Laptop ASUS A15 FA506 dipilih sebagai primary development machine karena spesifikasi yang sesuai untuk web development dan kemampuan multitasking yang baik. Laptop ini dilengkapi dengan processor AMD Ryzen yang powerful untuk menjalankan multiple applications simultaneously, RAM yang sufficient untuk development tools dan browser testing, storage yang adequate untuk project files dan development tools, serta display yang comfortable untuk long coding sessions.

Processor AMD Ryzen pada laptop ini memberikan performance yang excellent untuk compilation, build processes, dan running development servers. Multi-core architecture memungkinkan parallel processing yang beneficial untuk tasks seperti code compilation, database queries, dan API testing. Integrated graphics sufficient untuk web development needs dan tidak memerlukan dedicated graphics card untuk jenis development ini.

RAM capacity memungkinkan running multiple applications simultaneously termasuk code editor, database server, web browser dengan multiple tabs, dan development tools. Adequate RAM juga ensures smooth performance ketika testing aplikasi dengan large datasets atau multiple concurrent users simulation. Storage capacity sufficient untuk storing project files, development tools, databases, dan documentation.

### 3.3.2 Perangkat Lunak (Software)

Pemilihan perangkat lunak development tools didasarkan pada compatibility, functionality, dan industry best practices. Tools yang dipilih merupakan combination dari open source dan commercial software yang proven effective untuk web development projects.

**Sistem Operasi Windows**
Windows dipilih sebagai development platform karena compatibility yang excellent dengan development tools yang digunakan, familiar user interface yang memudahkan productivity, extensive software ecosystem yang mendukung berbagai development needs, dan good performance untuk web development tasks. Windows juga menyediakan built-in tools seperti Command Prompt dan PowerShell yang useful untuk development tasks.

Windows environment memungkinkan easy installation dan configuration dari development tools. Package managers seperti npm dan Git dapat easily installed dan configured. Windows Subsystem for Linux (WSL) juga available jika diperlukan Linux compatibility untuk certain tools atau testing scenarios. Windows defender provides adequate security untuk development environment tanpa interfering dengan development processes.

**Visual Studio Code**
Visual Studio Code dipilih sebagai primary code editor karena several compelling reasons. VS Code menyediakan excellent support untuk JavaScript, HTML, CSS, dan JSON yang merupakan primary languages untuk project ini. IntelliSense feature memberikan intelligent code completion yang significantly improves development speed dan reduces errors. Integrated terminal memungkinkan running commands tanpa switching applications.

Extension ecosystem dari VS Code sangat rich dan relevant untuk web development. Extensions yang digunakan meliputi ESLint untuk JavaScript linting, Prettier untuk code formatting, Live Server untuk local development server, REST Client untuk API testing, dan GitLens untuk enhanced Git integration. Extensions dapat easily installed dan configured untuk optimize development workflow.

Debugging capabilities dalam VS Code excellent untuk JavaScript development. Breakpoints dapat set directly dalam editor, variables dapat inspected during execution, dan call stack dapat analyzed untuk troubleshooting. Integration dengan Node.js debugger memungkinkan server-side debugging yang seamless. Version control integration memungkinkan Git operations directly dari editor interface.

**XAMPP**
XAMPP dipilih sebagai local development environment karena ease of installation dan configuration. XAMPP menyediakan Apache web server untuk serving static files dan testing, MySQL database untuk development dan testing purposes jika diperlukan, PHP interpreter meskipun tidak digunakan dalam project ini tetapi available untuk future needs, dan phpMyAdmin untuk database administration interface.

Meskipun sistem CostTrack menggunakan MongoDB sebagai primary database, XAMPP tetap useful untuk certain development tasks. Apache web server dapat digunakan untuk serving static files atau testing deployment scenarios. MySQL dapat digunakan untuk comparative testing atau data migration scenarios. Control panel memudahkan starting dan stopping services sesuai kebutuhan.

XAMPP configuration memungkinkan easy setup dari development environment tanpa complex installation procedures. Port configuration dapat adjusted untuk avoid conflicts dengan other services. Log files accessible untuk troubleshooting issues. Backup dan restore procedures straightforward untuk data protection.

**Browser Testing: Microsoft Edge dan Google Chrome**
Multiple browsers digunakan untuk comprehensive testing untuk ensure cross-browser compatibility. Microsoft Edge dipilih karena modern rendering engine yang compliant dengan web standards, good developer tools untuk debugging dan performance analysis, integration dengan Windows ecosystem, dan growing market share yang makes it important untuk testing.

Google Chrome dipilih karena market leadership dalam browser usage, excellent developer tools yang comprehensive dan powerful, V8 JavaScript engine yang same dengan Node.js untuk consistency, dan extensive extension ecosystem untuk development tools. Chrome DevTools menyediakan advanced debugging capabilities, network monitoring, performance profiling, dan mobile device simulation.

Cross-browser testing ensures bahwa aplikasi works correctly across different browsers dan rendering engines. Differences dalam JavaScript implementation, CSS support, dan API availability dapat identified dan addressed. Responsive design testing dapat dilakukan menggunakan device simulation features dalam browser developer tools. Performance characteristics dapat compared across browsers untuk optimization purposes.

### 3.3.3 Justifikasi Pemilihan Tools

Pemilihan tools development didasarkan pada several criteria termasuk functionality, compatibility, cost-effectiveness, learning curve, dan community support. Combination dari tools yang dipilih provides comprehensive development environment yang supports seluruh development lifecycle dari coding hingga testing dan deployment.

Cost-effectiveness menjadi important consideration dimana majority dari tools yang dipilih adalah free atau open source. Visual Studio Code, XAMPP, dan browsers semuanya free untuk use, reducing project costs significantly. Windows sebagai operating system sudah available dan familiar, eliminating need untuk additional training atau adaptation time.

Compatibility antar tools excellent dimana semua tools dapat work together seamlessly. VS Code dapat integrate dengan Git, npm, dan browser developer tools. XAMPP dapat serve files yang developed dalam VS Code. Browsers dapat access applications served oleh XAMPP atau Node.js development servers. Integration reduces friction dalam development workflow.

Community support untuk semua tools sangat strong dengan extensive documentation, tutorials, dan community forums available. Issues atau questions dapat quickly resolved melalui community resources. Regular updates dan improvements ensure bahwa tools remain current dengan latest web development practices dan standards.

Learning curve untuk tools yang dipilih reasonable untuk developers dengan basic web development knowledge. VS Code intuitive untuk use dengan good default configurations. XAMPP provides simple interface untuk managing services. Browser developer tools have extensive documentation dan tutorials available. Overall toolset enables productive development tanpa excessive learning overhead.
# API Documentation - CostTrack

Base URL: `http://localhost:5000/api`

## Komponen API

### GET /api/komponen
Mendapatkan semua komponen
```json
Response: [
  {
    "_id": "...",
    "namaKomponen": "Resistor 10K",
    "satuan": "pcs",
    "deskripsi": "Resistor 10K Ohm",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### GET /api/komponen/:id
Mendapatkan komponen berdasarkan ID

### POST /api/komponen
Membuat komponen baru
```json
Request Body:
{
  "namaKomponen": "Resistor 10K",
  "satuan": "pcs",
  "deskripsi": "Resistor 10K Ohm"
}
```

### PUT /api/komponen/:id
Update komponen

### DELETE /api/komponen/:id
Hapus komponen

---

## Produk API

### GET /api/produk
Mendapatkan semua produk dengan BOM

### GET /api/produk/:id
Mendapatkan produk berdasarkan ID

### POST /api/produk
Membuat produk baru dengan BOM
```json
Request Body:
{
  "namaProduk": "Arduino Board",
  "deskripsi": "Arduino Uno R3",
  "bom": [
    {
      "komponenId": "...",
      "namaKomponen": "Resistor 10K",
      "quantity": 5,
      "satuan": "pcs"
    }
  ]
}
```

### PUT /api/produk/:id
Update produk

### DELETE /api/produk/:id
Hapus produk

---

## Riwayat Pengadaan API

### GET /api/riwayat
Mendapatkan semua riwayat pengadaan

### GET /api/riwayat/:id
Mendapatkan riwayat berdasarkan ID

### GET /api/riwayat/komponen/:komponenId
Mendapatkan riwayat berdasarkan komponen

### POST /api/riwayat
Membuat riwayat pengadaan baru
```json
Request Body:
{
  "komponenId": "...",
  "namaKomponen": "Resistor 10K",
  "supplier": "PT Elektronik",
  "tanggalPengadaan": "2024-01-15",
  "quantity": 100,
  "hargaSatuan": 500,
  "matauang": "IDR",
  "kursJisdor": 1,
  "noPO": "PO-001",
  "catatan": "Pembelian rutin"
}
```

### PUT /api/riwayat/:id
Update riwayat

### DELETE /api/riwayat/:id
Hapus riwayat

---

## Kurs API

### GET /api/kurs/today
Mendapatkan kurs hari ini (otomatis fetch dari JISDOR jika belum ada)

### GET /api/kurs/:tanggal
Mendapatkan kurs berdasarkan tanggal (format: YYYY-MM-DD)

### POST /api/kurs
Membuat data kurs manual
```json
Request Body:
{
  "tanggal": "2024-01-15",
  "usdToIdr": 15500,
  "sumber": "MANUAL"
}
```

### POST /api/kurs/upload-csv
Upload data kurs dari CSV
```json
Request Body:
{
  "data": [
    { "tanggal": "2024-01-15", "usdToIdr": "15500" },
    { "tanggal": "2024-01-16", "usdToIdr": "15550" }
  ]
}
```

---

## HPE API

### GET /api/hpe/:produkId
Menghitung HPE untuk produk tertentu
```json
Response:
{
  "produk": {
    "id": "...",
    "nama": "Arduino Board",
    "deskripsi": "Arduino Uno R3"
  },
  "komponen": [
    {
      "komponenId": "...",
      "namaKomponen": "Resistor 10K",
      "quantity": 5,
      "satuan": "pcs",
      "hpePerSatuan": {
        "minimum": 450,
        "maksimum": 550,
        "median": 500,
        "rataRata": 495
      },
      "hpeTotal": {
        "minimum": 2250,
        "maksimum": 2750,
        "median": 2500,
        "rataRata": 2475
      },
      "jumlahData": 10
    }
  ],
  "totalHPE": {
    "minimum": 50000,
    "maksimum": 75000,
    "median": 62500,
    "rataRata": 61250
  }
}
```

---

## Error Responses

Semua endpoint mengembalikan error dalam format:
```json
{
  "message": "Error message here"
}
```

Status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

# Instagram Unfollowers Checker

Script Python untuk mengecek unfollowers Instagram dengan membandingkan daftar followers dan following dari file JSON.

## 🚀 Fitur

- ✅ Mengecek akun yang tidak follow back (unfollowers)
- ✅ Menampilkan daftar mutual followers
- ✅ Menampilkan followers yang tidak Anda follow back
- ✅ Statistik lengkap followers dan following
- ✅ Menyimpan hasil analisis ke file JSON
- ✅ Interface yang user-friendly dengan emoji

## 📋 Persyaratan

- Python 3.6 atau lebih baru
- File JSON data Instagram (followers dan following)

## 📁 Struktur File

Pastikan Anda memiliki file berikut di direktori yang sama dengan script:

```
CekUnfollowers-IG/
├── cek_unfollowers.py
├── followers_1.json
├── following.json
└── README.md
```

## 🎯 Cara Menggunakan

### 1. Menjalankan Script

```bash
python cek_unfollowers.py
```

### 2. Output yang Dihasilkan

Script akan menampilkan:

- **Total Followers**: Jumlah akun yang mengikuti Anda
- **Total Following**: Jumlah akun yang Anda ikuti
- **Mutual Followers**: Akun yang saling follow
- **Unfollowers**: Akun yang Anda follow tapi tidak follow back
- **Tidak Follow Back**: Akun yang follow Anda tapi Anda tidak follow back

### 3. Menyimpan Hasil

Script akan menanyakan apakah Anda ingin menyimpan hasil analisis ke file JSON. File akan disimpan dengan format:
```
unfollowers_analysis_YYYYMMDD_HHMMSS.json
```

## 📊 Contoh Output

```
🚀 Instagram Unfollowers Checker
==================================================
🔍 Memulai pengecekan unfollowers Instagram...
==================================================
📥 Memuat data followers...
📥 Memuat data following...
🔧 Mengekstrak username...
📊 Total followers: 1250
📊 Total following: 800
==================================================

📈 HASIL ANALISIS UNFOLLOWERS
==================================================
👥 Total Followers: 1250
👥 Total Following: 800
🤝 Mutual Followers: 750
❌ Unfollowers: 50
💔 Tidak Follow Back: 500
==================================================

❌ DAFTAR UNFOLLOWERS (50 akun):
------------------------------
  1. @username1
  2. @username2
  3. @username3
  ...

🤝 DAFTAR MUTUAL FOLLOWERS (750 akun):
------------------------------
  1. @mutual1
  2. @mutual2
  3. @mutual3
  ...
    ... dan 730 akun lainnya

💾 Apakah Anda ingin menyimpan hasil ke file? (y/n):
```

## 🔧 Struktur Data JSON

Script ini mendukung format JSON Instagram yang memiliki struktur:

```json
[
  {
    "title": "",
    "media_list_data": [],
    "string_list_data": [
      {
        "href": "https://www.instagram.com/username",
        "value": "username",
        "timestamp": 1234567890
      }
    ]
  }
]
```

## ⚠️ Catatan Penting

1. **Privasi**: Script ini hanya membaca file JSON lokal, tidak mengakses Instagram API
2. **Data**: Pastikan file JSON berisi data yang valid dan lengkap
3. **Keamanan**: Jangan bagikan file JSON yang berisi data pribadi Anda
4. **Update**: Data followers/following bisa berubah setiap saat

## 🛠️ Troubleshooting

### File tidak ditemukan
```
❌ File followers_1.json tidak ditemukan!
```
**Solusi**: Pastikan file JSON berada di direktori yang sama dengan script

### Error membaca JSON
```
❌ Error membaca file followers_1.json. Pastikan file JSON valid!
```
**Solusi**: Periksa format JSON file Anda

### File following kosong
```
⚠️ File following.json kosong atau tidak valid!
```
**Solusi**: Pastikan file following.json berisi data yang valid

## 📝 Lisensi

Script ini dibuat untuk tujuan edukasi dan penggunaan pribadi. Gunakan dengan bijak dan hormati privasi pengguna lain.

## 🤝 Kontribusi

Jika Anda menemukan bug atau ingin menambahkan fitur, silakan buat issue atau pull request.

---

**Happy Instagram Analysis! 🎉** 
# Simple Instagram Unfollowers Checker

Website modern untuk mengecek unfollowers Instagram dengan interface yang user-friendly dan fitur drag & drop.

## 🚀 Fitur Website

### ✨ Interface Modern
- Design responsive dengan gradient yang menarik
- Animasi smooth dan transisi yang halus
- Icon Font Awesome untuk visual yang lebih baik
- Layout yang clean dan mudah digunakan

### 📁 Upload File
- **Drag & Drop**: Seret file JSON langsung ke area upload
- **Click Upload**: Klik tombol untuk memilih file
- **Auto Detection**: Website otomatis mendeteksi file followers dan following
- **File Validation**: Validasi format JSON sebelum diproses

### 📊 Analisis Data
- **Real-time Processing**: Analisis data secara real-time
- **Loading Animation**: Spinner loading saat memproses data
- **Error Handling**: Pesan error yang informatif
- **Success Messages**: Konfirmasi ketika berhasil

### 📈 Hasil Analisis
- **Statistik Visual**: Kartu statistik dengan warna yang berbeda
- **Daftar Username**: Tampilan username yang rapi dan mudah dibaca
- **Copy Username**: Tombol copy untuk setiap username
- **Scrollable Lists**: Daftar yang bisa di-scroll jika terlalu panjang

### 💾 Export Data
- **Export JSON**: Download hasil dalam format JSON
- **Export CSV**: Download hasil dalam format CSV
- **Auto Naming**: File otomatis diberi nama dengan tanggal

## 🎯 Cara Menggunakan

### 1. Buka Website
```bash
# Buka file index.html di browser
# Atau gunakan live server
```

### 2. Upload File JSON
- **Cara 1**: Klik tombol "Upload Followers JSON" dan "Upload Following JSON"
- **Cara 2**: Drag & drop kedua file JSON ke area upload

### 3. Analisis Data
- Klik tombol "Analisis Unfollowers"
- Tunggu proses selesai (akan ada loading spinner)

### 4. Lihat Hasil
- Statistik akan ditampilkan di kartu-kartu berwarna
- Daftar username akan muncul di kolom-kolom terpisah
- Klik tombol copy untuk menyalin username

### 5. Export Data
- Klik "Export JSON" untuk download file JSON
- Klik "Export CSV" untuk download file CSV

## 📁 Struktur File

```
CekUnfollowers-IG/
├── index.html          # Halaman utama website
├── script.js           # JavaScript untuk logika website
├── followers_1.json    # File JSON followers (contoh)
├── following.json      # File JSON following (contoh)
├── README_WEBSITE.md   # Dokumentasi website
└── cek_unfollowers.py  # Script Python (alternatif)
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Gradient biru-ungu (#667eea → #764ba2)
- **Success**: Hijau (#28a745)
- **Warning**: Kuning (#ffc107)
- **Danger**: Merah (#dc3545)
- **Info**: Biru (#007bff)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Ukuran font menyesuaikan layar

### Components
- **Cards**: Border radius 15px dengan shadow
- **Buttons**: Hover effects dengan transform
- **Inputs**: Styled file inputs yang menarik
- **Lists**: Scrollable dengan hover effects

## 🔧 Technical Features

### JavaScript Features
- **ES6 Classes**: Menggunakan class untuk organisasi kode
- **Async/Await**: Untuk operasi asynchronous
- **Event Listeners**: Handling semua interaksi user
- **File API**: Membaca file JSON di browser
- **Clipboard API**: Copy username ke clipboard

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **ES6 Support**: Menggunakan fitur JavaScript modern
- **File API**: Support untuk file upload
- **CSS Grid**: Layout responsive dengan CSS Grid

### Performance
- **Client-side Processing**: Semua analisis dilakukan di browser
- **No Server Required**: Bisa dijalankan tanpa server
- **Fast Loading**: Optimized untuk kecepatan
- **Memory Efficient**: Menggunakan Set untuk deduplication

## 📱 Responsive Design

### Mobile First
- **Breakpoint**: 768px untuk mobile
- **Flexible Layout**: Grid yang menyesuaikan ukuran layar
- **Touch Friendly**: Tombol dan area yang mudah disentuh
- **Readable Text**: Ukuran font yang nyaman dibaca

### Desktop Optimized
- **Wide Layout**: Menggunakan ruang layar secara optimal
- **Hover Effects**: Efek hover untuk desktop
- **Keyboard Navigation**: Support untuk keyboard
- **Large Screens**: Layout yang baik untuk layar besar

## 🛠️ Customization

### Mengubah Warna
Edit CSS variables di `index.html`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --success-color: #28a745;
    --danger-color: #dc3545;
}
```

### Mengubah Font
Ganti Google Fonts link di `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Menambah Fitur
Edit `script.js` untuk menambah fitur baru:
```javascript
// Contoh: Menambah fitur search
addSearchFeature() {
    // Implementasi fitur search
}
```

## 🚀 Deployment

### Local Development
```bash
# Buka file index.html di browser
# Atau gunakan live server
npx live-server
```

### Web Hosting
Upload file ke web hosting:
- `index.html`
- `script.js`
- Pastikan CORS policy mengizinkan file upload

### GitHub Pages
1. Push ke repository GitHub
2. Aktifkan GitHub Pages
3. Website akan tersedia di `username.github.io/repository`

## 🔒 Security & Privacy

### Client-side Only
- **No Server**: Data tidak dikirim ke server
- **Local Processing**: Semua analisis di browser
- **No Data Storage**: Data tidak disimpan di server
- **Privacy First**: Data tetap di perangkat user

### File Handling
- **JSON Validation**: Validasi format file
- **Error Handling**: Handling error dengan baik
- **Memory Management**: Cleanup setelah selesai
- **Safe Processing**: Tidak ada eksekusi kode berbahaya

## 🐛 Troubleshooting

### File Tidak Terupload
- Pastikan file format JSON
- Cek ukuran file (max 50MB)
- Refresh halaman dan coba lagi

### Hasil Tidak Muncul
- Pastikan kedua file sudah diupload
- Cek console browser untuk error
- Pastikan format JSON valid

### Export Tidak Berfungsi
- Pastikan ada hasil analisis
- Cek permission browser untuk download
- Coba browser berbeda

## 📞 Support

Jika ada masalah atau pertanyaan:
1. Cek console browser (F12)
2. Pastikan file JSON valid
3. Coba refresh halaman
4. Gunakan browser terbaru

---

**Happy Instagram Analysis! 🎉** 

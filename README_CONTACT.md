# Panduan Kontak WhatsApp Admin

Dokumentasi untuk mengatur dan mengubah nomor WhatsApp admin di website Instagram Unfollowers Checker.

## 📞 Konfigurasi Kontak Admin

### 🔧 File Konfigurasi
File `config.js` berisi semua konfigurasi kontak admin yang bisa dengan mudah diubah.

### 📝 Cara Mengubah Nomor WhatsApp

#### 1. Buka File `config.js`
```javascript
const ADMIN_CONFIG = {
    admin1: {
        number: "6281234567890", // Ganti dengan nomor admin 1
        name: "Admin 1",
        description: "Untuk pertanyaan umum dan bantuan teknis",
        message: "Halo admin, saya butuh bantuan untuk Instagram Unfollowers Checker"
    },
    admin2: {
        number: "6289876543210", // Ganti dengan nomor admin 2
        name: "Admin 2", 
        description: "Untuk masalah khusus dan troubleshooting",
        message: "Halo admin, saya mengalami masalah dengan Instagram Unfollowers Checker"
    }
};
```

#### 2. Ganti Nomor WhatsApp
- **Admin 1**: Ganti `"6281234567890"` dengan nomor WhatsApp admin 1
- **Admin 2**: Ganti `"6289876543210"` dengan nomor WhatsApp admin 2

#### 3. Format Nomor
- Gunakan format internasional: `628xxxxxxxxxx`
- Tanpa tanda `+` atau spasi
- Contoh: `6281234567890`

### 🎯 Pengaturan Pesan WhatsApp

#### Pesan Default
```javascript
defaultMessage: "Halo admin, saya butuh bantuan untuk Instagram Unfollowers Checker"
```

#### Pesan Khusus Admin
```javascript
admin1: {
    message: "Halo admin, saya butuh bantuan untuk Instagram Unfollowers Checker"
},
admin2: {
    message: "Halo admin, saya mengalami masalah dengan Instagram Unfollowers Checker"
}
```

### ⏰ Jam Operasional
```javascript
operatingHours: {
    days: "Senin - Jumat",
    time: "09:00 - 17:00 WIB",
    responseTime: "Maksimal 2 jam dalam jam operasional"
}
```

## 📱 Fitur Kontak WhatsApp

### 🎨 Tampilan Kontak
- **Section Kontak**: Di bagian bawah halaman utama dan tutorial
- **Floating Button**: Tombol WhatsApp mengambang di pojok kanan bawah
- **Kartu Admin**: Tampilan kartu untuk setiap admin

### 🔗 Link WhatsApp
- **Auto-generated**: Link WhatsApp dibuat otomatis dari nomor
- **Pre-filled Message**: Pesan sudah diisi otomatis
- **Target Blank**: Buka di tab baru

### 📍 Lokasi Kontak
1. **Halaman Utama** (`index.html`)
   - Section kontak di bagian bawah
   - Floating WhatsApp button

2. **Halaman Tutorial** (`tutorial.html`)
   - Section kontak di bagian bawah
   - Floating WhatsApp button

## 🛠️ Customization

### Mengubah Nama Admin
```javascript
admin1: {
    name: "Nama Admin Baru",
    // ...
}
```

### Mengubah Deskripsi
```javascript
admin1: {
    description: "Deskripsi baru untuk admin",
    // ...
}
```

### Mengubah Jam Operasional
```javascript
operatingHours: {
    days: "Senin - Sabtu",
    time: "08:00 - 18:00 WIB",
    responseTime: "Maksimal 1 jam dalam jam operasional"
}
```

### Menambah Admin Baru
```javascript
const ADMIN_CONFIG = {
    admin1: { /* ... */ },
    admin2: { /* ... */ },
    admin3: {
        number: "6289999999999",
        name: "Admin 3",
        description: "Untuk bantuan khusus",
        message: "Halo admin 3, saya butuh bantuan"
    }
};
```

## 🔒 Keamanan

### ✅ Best Practices
- **Validasi Nomor**: Pastikan format nomor benar
- **Testing**: Test link WhatsApp sebelum deploy
- **Backup**: Simpan backup konfigurasi lama

### ⚠️ Perhatian
- **Privacy**: Jangan bagikan nomor admin di publik
- **Spam**: Monitor pesan masuk untuk mencegah spam
- **Response Time**: Pastikan admin bisa merespons sesuai jam operasional

## 📋 Checklist Update

### ✅ Sebelum Update
- [ ] Backup file `config.js` lama
- [ ] Siapkan nomor WhatsApp admin baru
- [ ] Test nomor WhatsApp di browser

### ✅ Setelah Update
- [ ] Test link WhatsApp di website
- [ ] Cek floating button berfungsi
- [ ] Verifikasi pesan default
- [ ] Test di mobile dan desktop

### ✅ Monitoring
- [ ] Cek pesan masuk WhatsApp
- [ ] Monitor response time
- [ ] Update jam operasional jika perlu

## 🚀 Deployment

### Local Testing
1. Buka file `config.js`
2. Ganti nomor WhatsApp
3. Buka website di browser
4. Test link WhatsApp

### Production
1. Update file `config.js` di server
2. Clear cache browser
3. Test semua link WhatsApp
4. Monitor pesan masuk

## 📞 Support

Jika ada masalah dengan konfigurasi kontak:
1. Cek format nomor WhatsApp
2. Pastikan file `config.js` ter-load
3. Test link di browser
4. Cek console browser untuk error

---

**Happy Admin Management! 🎉** 
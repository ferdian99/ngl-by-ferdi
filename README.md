# NGL Clone by Ferdi

## Halo, selamat datang di NGL Clone ala Ferdi!
Proyek santai sambil belajar bikin project web SSG (Apa itu? Google aja, deh! :p). 
Dibikin pake **Nuxt 2** dan **Tailwind CSS**.  
Intinya, di sini kita bisa bikin form tanya-jawab anonim, kayak NGL beneran.

---

## Apa Aja Yang Ada di Sini?
- **Form Anonim**: Orang bisa kirim pertanyaan/pesan secara anonim.
- **Tombol Dadu**: Kalo males ngetik, tinggal klik dadu buat ngisi pertanyaan random (bahasa Indonesia).
- **Counter Dinamis**: Ada angka yang terus naik tiap beberapa detik, seolah-olah banyak yang nge-tap tombol.
- **Halaman Success**: Kalo udah submit, bakal ada halaman “Sent!” lengkap sama tombol balik ke form.

---

## Tech yang Dipake
- **Nuxt 2**: Buat struktur dan ngejalankan aplikasi.
- **Tailwind CSS**: Biar styling cepet, ga repot atur CSS.
- **Axios**: Buat ngirim data (post) ke **Formspark**.
- **Formspark**: Biar gak perlu bikin backend sendiri.

---

## Cara Install

1. **Clone repo**:
   git clone https://github.com/ferdian99/ngl-by-ferdi.git

2. **Masuk ke folder**:
cd ngl-by-ferdi

3. **Install dependencies**:
npm install

4. **Jalankan di mode dev**:
npm run dev
Buka http://localhost:3000 di browser kamu.

5. **Generate file statis (opsional)**:
*(Biar ga usah punya node server di hosting)*
npm run generate
Nanti hasilnya ada di folder dist/. Boleh juga upload ke Netlify, Vercel, GitHub Pages, dsb. (Kalo aku pake Hostinger)

**Info Struktur folder**:
.
├─ pages/
│   └─ index.vue          # Halaman utama Nuxt, cuma manggil <NGL />
├─ components/
│   ├─ NGL.vue            # Komponen induk, nge-switch antara Form & Success
│   ├─ NGLForm.vue        # Komponen form anonim + dadu + submit
│   └─ NGLSuccess.vue     # Komponen "Sent!" + counter + tombol balik
├─ assets/
│   └─ css/
│       └─ tailwind.css   # File CSS utama (Tailwind, font, dsb.)
├─ static/
│   └─ img/
│       └─ profile.png    # Gambar profil contoh
├─ nuxt.config.js
└─ ...

**Gimana Cara Kerjanya?**
1. User buka halaman index.vue, yang isinya cuma <NGL />.
2. NGL.vue cek apakah statusnya success atau belum.
2a. Kalo belum, munculin <NGLForm />.
2b. Kalo udah success, munculin <NGLSuccess />.
3. NGLForm.vue punya form buat ngetik pertanyaan, terus tombol dadu buat bikin pertanyaan random kocak. Kalo axios.post ke endpoint Formspark berhasil, dia emit(onSuccess) ke NGL.vue.
4. NGLSuccess.vue nunjukin tampilan “Sent!”, punya counter naik tiap detik, plus tombol balik ke form atau "Get your own messages!".

**Mau Kustom?**
- Formspark Endpoint: Ubah URL di NGLForm.vue (baris await axios.post('https://api.formspark.io/…')) ke endpoint Formspark kamu.
- Desain: Semua styling utama di tailwind.css. Atau bisa edit di komponen Vue sesuai selera.
- Random Questions: Di NGLForm.vue ada array RANDOM_QUESTIONS. Silakan tambah, kurangi, ganti.

**Kontribusi**
Silakan fork, main-main, kalo ada ide seru boleh bikin pull request.
Kalo nemu bug, bikin issue atau DM @haloferdi, ya!

**Lisensi**
Bebas aja dipake (toh saya juga ngikutin NGL wkwk-- tapi kan buat belajar hehe:D). Selamat ngoprek dan semoga project ini bermanfaat!

'use strict';

const tombolNav = document.querySelector('#tombol-nav');
const menuUtama = document.querySelector('#menu-utama');

tombolNav.addEventListener('click', () => {
  const terbuka = menuUtama.classList.toggle('terbuka');
  tombolNav.setAttribute('aria-expanded', String(terbuka));
});

menuUtama.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    menuUtama.classList.remove('terbuka');
    tombolNav.setAttribute('aria-expanded', 'false');
  });
});

const dataFitur = [
  { judul: 'Hadiah Menarik', deskripsi: 'Total hadiah jutaan rupiah untuk juara.', kategori: 'kompetisi' },
  { judul: 'Wasit Bersertifikat', deskripsi: 'Pertandingan dipimpin wasit resmi.', kategori: 'kompetisi' },
  { judul: 'Ajang Silaturahmi', deskripsi: 'Mempererat hubungan antar mahasiswa.', kategori: 'komunitas' },
  { judul: 'Dokumentasi Lengkap', deskripsi: 'Foto dan video pertandingan tersedia.', kategori: 'komunitas' },
];

const daftarFitur = document.querySelector('#daftar-fitur');

function buatKartuFitur(item) {
  const div = document.createElement('div');
  const heading = document.createElement('h3');
  const description = document.createElement('p');
  div.classList.add('feature-card');
  heading.textContent = item.judul;
  description.textContent = item.deskripsi;
  div.append(heading, description);
  return div;
}

function renderFitur(data) {
  daftarFitur.replaceChildren();
  if (data.length === 0) {
    const kosong = document.createElement('p');
    kosong.textContent = 'Tidak ada fitur pada kategori ini.';
    daftarFitur.append(kosong);
    return;
  }
  data.forEach((item) => daftarFitur.append(buatKartuFitur(item)));
}

renderFitur(dataFitur);

const filterKategori = document.querySelector('#filter-kategori');

filterKategori.addEventListener('change', () => {
  const nilai = filterKategori.value;
  const hasil = nilai === 'semua' ? dataFitur : dataFitur.filter((item) => item.kategori === nilai);
  renderFitur(hasil);
});
const dataFaq = [
  { pertanyaan: 'Siapa yang boleh mendaftar?', jawaban: 'Seluruh mahasiswa aktif D3-D4 Teknik Informatika.' },
  { pertanyaan: 'Berapa biaya pendaftaran?', jawaban: 'Gratis, cukup isi formulir pendaftaran tim.' },
  { pertanyaan: 'Berapa jumlah pemain per tim?', jawaban: 'Satu tim terdiri dari 8 hingga 12 pemain.' },
];

const daftarFaq = document.querySelector('#daftar-faq');

dataFaq.forEach((item, index) => {
  const wrapper = document.createElement('div');
  const tombol = document.createElement('button');
  const jawaban = document.createElement('div');

  wrapper.classList.add('faq-item');
  tombol.classList.add('faq-pertanyaan');
  tombol.type = 'button';
  tombol.textContent = item.pertanyaan;
  tombol.setAttribute('aria-expanded', 'false');
  tombol.id = `faq-tombol-${index}`;

  jawaban.classList.add('faq-jawaban');
  jawaban.textContent = item.jawaban;
  jawaban.id = `faq-jawaban-${index}`;
  jawaban.hidden = true;
  tombol.setAttribute('aria-controls', jawaban.id);

  tombol.addEventListener('click', () => {
    const sedangTerbuka = tombol.getAttribute('aria-expanded') === 'true';
    daftarFaq.querySelectorAll('.faq-pertanyaan').forEach((t) => t.setAttribute('aria-expanded', 'false'));
    daftarFaq.querySelectorAll('.faq-jawaban').forEach((j) => { j.hidden = true; });
    if (!sedangTerbuka) {
      tombol.setAttribute('aria-expanded', 'true');
      jawaban.hidden = false;
    }
  });

  wrapper.append(tombol, jawaban);
  daftarFaq.append(wrapper);
});
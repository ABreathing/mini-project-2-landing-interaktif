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
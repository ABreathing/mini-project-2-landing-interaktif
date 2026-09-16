Lomba Basket D3-D4 Informatika - Landing Page Interaktif

Lanjutan dari landing page statis modul 1, sekarang udah ditambahin interaksi pake vanilla JavaScript.

Cara buka

Buka index.html lewat local server (misal Live Server di VS Code), soalnya beberapa fitur butuh file JS dan CSS eksternal kebaca dengan bener. Jangan cuma double click filenya.

Fitur yang ditambahin
Menu navigasi buat mobile, bisa dibuka tutup lewat tombol
Daftar syarat/fitur dirender dari data array, bukan ditulis manual di HTML
Filter kategori buat milih fitur mana yang mau ditampilin
FAQ accordion, klik pertanyaan buat liat jawaban, yang lain otomatis nutup
Form kontak dengan validasi nama, email, sama pesan
Tombol kembali ke atas yang muncul kalau udah scroll jauh
Tombol ganti tema terang/gelap
Progress

Dikerjain bertahap satu fitur satu commit, biar gampang dilacak kalau ada yang error. Sempet ada bug variabel belum dideklarasiin sama CSS ke-duplikat, udah dibenerin di commit berikutnya.
// script.js

// 1. Array untuk menyimpan koleksi novel (data perpustakaan)
const koleksiNovel = [
    {
        judul: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        tahunTerbit: 2005,
        genre: "Fiksi, Inspirasi"
    },
    {
        judul: "Bumi Manusia",
        penulis: "Pramoedya Ananta Toer",
        tahunTerbit: 1980,
        genre: "Sastra, Sejarah"
    },
    {
        judul: "Cantik Itu Luka",
        penulis: "Eka Kurniawan",
        tahunTerbit: 2002,
        genre: "Fiksi, Fantasi"
    },
    {
        judul: "Harry Potter dan Batu Bertuah",
        penulis: "J.K. Rowling",
        tahunTerbit: 1997,
        genre: "Fantasi"
    }
];

// 2. Fungsi untuk menampilkan semua novel
function tampilkanSemuaNovel(daftar) {
    console.log("--- Daftar Koleksi Novel ---");
    if (daftar.length === 0) {
        console.log("Perpustakaan kosong.");
        return;
    }

    daftar.forEach((novel, index) => {
        console.log(`\n${index + 1}. Judul: ${novel.judul}`);
        console.log(`   Penulis: ${novel.penulis}`);
        console.log(`   Tahun: ${novel.tahunTerbit}`);
        console.log(`   Genre: ${novel.genre}`);
    });
}

// 3. Fungsi untuk mencari novel berdasarkan judul
function cariNovel(judulPencarian) {
    // Ubah input pencarian menjadi huruf kecil agar pencarian tidak case-sensitive
    const judulLower = judulPencarian.toLowerCase();
    
    // Gunakan filter untuk mendapatkan novel yang cocok
    const hasilPencarian = koleksiNovel.filter(novel => 
        novel.judul.toLowerCase().includes(judulLower)
    );

    if (hasilPencarian.length > 0) {
        console.log(`\n--- Hasil Pencarian untuk "${judulPencarian}" ---`);
        tampilkanSemuaNovel(hasilPencarian);
    } else {
        console.log(`\nNovel dengan judul "${judulPencarian}" tidak ditemukan.`);
    }
}

// --- EKSEKUSI (Coba Jalankan Fungsinya) ---

// 1. Menampilkan seluruh novel
tampilkanSemuaNovel(koleksiNovel);

// 2. Contoh pencarian
// cariNovel("Bumi"); 
// cariNovel("Potter");
// cariNovel("Novel yang tidak ada");

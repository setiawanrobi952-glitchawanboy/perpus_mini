// 1. DATA BUKU STATIS
const library = [
    { 
        title: "Dasar-Dasar Pemrograman Web", 
        author: "Ahmad Riyadi", 
        isbn: "978-602-03-3286-9", 
        link: "assets/buku1.pdf" // Ganti dengan path file PDF atau link unduhan Anda
    },
    { 
        title: "Pengantar Algoritma dan Struktur Data", 
        author: "Budi Santoso", 
        isbn: "978-979-27-8628-8", 
        link: "assets/buku2.pdf" 
    },
    { 
        title: "Cara Mudah Menguasai Git dan GitHub", 
        author: "Citra Dewi", 
        isbn: "978-623-7729-01-5", 
        link: "assets/buku3.pdf" 
    }
    // Tambahkan lebih banyak data buku di sini!
];

const bookListContainer = document.getElementById('bookList');

// 2. FUNGSI UNTUK MENAMPILKAN DAFTAR BUKU
function displayBooks(books) {
    bookListContainer.innerHTML = ''; // Kosongkan daftar sebelum mengisi

    if (books.length === 0) {
        bookListContainer.innerHTML = '<p>Tidak ada buku yang ditemukan.</p>';
        return;
    }

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Penulis:</strong> ${book.author}</p>
            <p><strong>ISBN:</strong> ${book.isbn}</p>
            <a href="${book.link}" target="_blank">Baca / Unduh</a>
        `;
        bookListContainer.appendChild(bookItem);
    });
}

// 3. FUNGSI UNTUK PENCARIAN
function filterBooks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    const filteredBooks = library.filter(book => {
        // Cek judul, penulis, dan ISBN
        return book.title.toLowerCase().includes(searchTerm) ||
               book.author.toLowerCase().includes(searchTerm) ||
               book.isbn.includes(searchTerm);
    });

    displayBooks(filteredBooks);
}

// Tampilkan semua buku saat halaman pertama dimuat
document.addEventListener('DOMContentLoaded', () => {
    displayBooks(library);
});

// 1. DATA BUKU STATIS
const library = [
    { 
        title: "Dasar-Dasar Pemrograman Web", 
        author: "Ahmad Riyadi", 
        isbn: "978-602-03-3286-9", 
        link: "assets/buku1.pdf" // https://export-download.canva.com/a9Mv0/DAG5xYa9Mv0/45/0-4579520659858237357.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251125T075245Z&X-Amz-Expires=88662&X-Amz-Signature=e55cea23c06ee271e37fd40e15b6858f90a9c18ad5574018c1351b10ded9f5fb&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Local%2520Area%2520Network%2528LAN%2529.pdf&response-expires=Wed%2C%2026%20Nov%202025%2008%3A30%3A27%20GMT
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

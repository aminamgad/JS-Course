// Library System

class Book {
    constructor(title, author, id) {
        this.title = title;
        this.author = author;
        this.id = id;
        this.isAvialable = true
    }

    borrowBook() {
        if(this.isAvialable) {
            this.isAvialable = false;
            console.log(`This Book ${this.title} has been borrowed`);
        } else{
            console.log(`${this.title} is currently unavailable`);
        }
    }

    returnBook() {
        this.isAvialable = true;
        console.log(`${this.title} has been returned`);
    }
}

class User {
    #borrowBooks;

    constructor(name, userId) {
        this.name = name;
        this.userId = userId
        this.#borrowBooks = []
    }

    borrowBook(book) {
        if(book.isAvialable) {
            book.borrowBook();
            this.#borrowBooks.push(book)
        } else {
            console.log(`${book.title} is already borrowed`);
            
        }
    }

    returnBook(book) {
        const bookIndex = this.#borrowBooks.findIndex(b => b.id === book.id)
        if(bookIndex !== -1) {
            book.returnBook()
            this.#borrowBooks.splice(bookIndex, 1)// [1, 2, 3, 4, 5, 6, 7]
        } else{
            console.log(`${this.name} does not have ${book.title}`);
        }
    }

    viewBorrowBooks() {
        console.log(`${this.name}'s Borrowed Books:`);
        this.#borrowBooks.forEach(book => console.log(`${book.title} and autor ${book.author}`));
    }
}

class Admin extends User {
    constructor(name, userId) {
        super(name, userId)
    }

    addBook(library, book) {
        library.addBook(book)
            console.log(`${book.title} has been added to the Library`);
    }

    removeBook(library, book) {
        library.removeBook(book);
        console.log(`${book.title} has been removed to the Library`);
    }
}

class Library {
    constructor() {
        this.books = []
    }

    addBook(book) {
        this.books.push(book)
    }

    removeBook(book) {
        this.books.filter(b => b.id !== book.id)
    }

    viewBooks() {
        console.log(`Library Bokks:`);
        
        this.books.forEach(book => {
            console.log(`${book.title} by ${book.author} ${book.isAvialable ? "Available" : "Unavaliable"}`);
        })
    }
}

class Member extends User {
    constructor(name, userId) {
        super(name, userId)
    }

    calcLateFee(daysLate) {
        const feePerDay = 1;
        return daysLate * feePerDay;
    }
}

const library = new Library()
const admin = new Admin("Amin Amgad", 1)
const member = new Member("Loai", 2)

const book1 = new Book("1984", "Amin Amgad", 123)
const book2 = new Book("Kill", "Wessam Abo Ali", 456)

admin.addBook(library, book1)
admin.addBook(library, book2)
library.viewBooks()

member.borrowBook(book1)
member.viewBorrowBooks()

library.viewBooks()

member.returnBook(book1)
member.viewBorrowBooks()

library.viewBooks()

const daysLate = 5;
console.log(member.calcLateFee(daysLate));

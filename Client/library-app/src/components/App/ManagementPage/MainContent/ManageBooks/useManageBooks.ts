import { useState, useEffect } from "react";

import { Book } from "models/Book";
import { genericFetch } from "utils/utils";

const useManageBooks = () => {
  const [books, setBooks] = useState<Array<Book>>([]);
  const [selectedBook, setSelectedBook] = useState({
    _id: -999,
    name: "",
    authorId: -999,
  });

  useEffect(() => {
    getAllBooks();
  });

  const getAllBooks = async () => {
    if (books.length === 0) {
      const bookList = await genericFetch("/books", "GET", true);
      setBooks(bookList);
    }
  };

  const getSelectedBook = async (id: Number) => {
    const book = await genericFetch(`/book/${id}`, "GET", true);
    setSelectedBook(book);
  };

  const updateBookName = async (bookId: number, name: string) => {
    const newBook = await genericFetch(
      `/update/book/${bookId}/${name}`,
      "POST",
      true
    );

    const newBooks: Array<Book> = [];

    books.forEach((book: Book) => {
      if (book._id === newBook._id) {
        book.name = newBook.name;
      }
      newBooks.push(book);
    });

    setBooks(newBooks);
    if (bookId === selectedBook._id) {
      setSelectedBook(newBook);
    }
  };

  const deleteBook = async (bookId: number) => {
    await genericFetch(`/remove/book/${bookId}`, "POST", false);
    setBooks(books.filter((book: Book) => book._id !== bookId));
  };

  return {
    books,
    selectedBook,
    deleteBook,
    getSelectedBook,
    updateBookName,
  };
};

export default useManageBooks;

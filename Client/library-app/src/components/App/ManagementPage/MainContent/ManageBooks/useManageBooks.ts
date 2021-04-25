import { useState, useEffect } from "react";

import { Book } from "models/Book";
import { User } from "models/User";
import { UNDIFNED_ID, UNDIFNED_NAME, genericFetch } from "utils/utils";

const useManageBooks = () => {
  const [books, setBooks] = useState<Array<Book>>([]);
  const [bookUserList, setBookUserList] = useState<Array<User>>([]);
  const [selectedBook, setSelectedBook] = useState({
    _id: UNDIFNED_ID,
    name: UNDIFNED_NAME,
    authorId: UNDIFNED_ID,
  });

  useEffect(() => {
    getAllBooks();
    getBookUserList();
  }, [selectedBook]);

  const getBookUserList = async () => {
    if (selectedBook._id !== UNDIFNED_ID) {
      const bookList = await genericFetch(
        `/bookUserList/${selectedBook._id}`,
        "GET",
        true
      );
      setBookUserList(bookList);
    }
  };

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

  const deleteUser = async (userId: number) => {
    await genericFetch(
      `/remove/user/book/${userId}/${selectedBook._id}`,
      "POST",
      false
    );
    setBookUserList(bookUserList.filter((user: User) => user._id !== userId));
  };

  return {
    books,
    selectedBook,
    bookUserList,
    deleteBook,
    deleteUser,
    getSelectedBook,
    updateBookName,
  };
};

export default useManageBooks;

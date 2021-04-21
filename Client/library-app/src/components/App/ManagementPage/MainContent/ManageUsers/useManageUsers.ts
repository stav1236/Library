import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { User } from "models/User";
import { Book } from "models/Book";
import {
  UNDIFNED_ID,
  UNDIFNED_NAME,
  genericFetch,
  Toast,
  ICON,
  MASSAGES,
} from "utils/utils";
import StoreStateType from "redux/StoreStateType";
import { setUser } from "redux/User/UserActionCreators";

const useManageUsers = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [books, setBooks] = useState<Array<Book>>([]);
  const [selectedUser, setSelectedUser] = useState({
    _id: UNDIFNED_ID,
    name: UNDIFNED_NAME,
    favBook: UNDIFNED_ID,
  });
  const [selectedBook, setSelectedBook] = useState(UNDIFNED_ID);
  const [userBookList, setUserBookList] = useState<Array<Book>>([]);
  const loggedUser = useSelector<StoreStateType, User>((state) => state.user);

  useEffect(() => {
    getAllUsers();
    getAllBooks();
    getUserBookList();
  });

  const getAllUsers = async () => {
    if (users.length === 0) {
      const usersList = await genericFetch("/users", "GET", true);
      setUsers(usersList);
    }
  };

  const getAllBooks = async () => {
    if (books.length === 0) {
      const bookList = await genericFetch("/books", "GET", true);
      setBooks(bookList);
    }
  };

  const getSelectedUser = async (id: Number) => {
    const user = await genericFetch(`/user/${id}`, "GET", true);
    setSelectedUser(user);
  };

  const getUserBookList = async () => {
    if (selectedUser._id !== UNDIFNED_ID) {
      const bookList = await genericFetch(
        `/userBookList/${selectedUser._id}`,
        "GET",
        true
      );
      setUserBookList(bookList);
    }
  };

  const updateFavBook = async (userId: number, bookId: number) => {
    const newUser = await genericFetch(
      `/update/favBook/${userId}/${bookId}`,
      "POST",
      true
    );
    setSelectedUser(newUser);
    if (newUser._id === loggedUser._id) {
      setUser(newUser);
    }
  };

  const updateUserName = async (userId: number, name: string) => {
    const newUser = await genericFetch(
      `/update/name/${userId}/${name}`,
      "POST",
      true
    );

    const newUsers: Array<User> = [];

    users.forEach((user: User) => {
      if (user._id === newUser._id) {
        user.name = newUser.name;
      }
      newUsers.push(user);
    });

    setUsers(newUsers);
    if (userId === selectedUser._id) {
      setSelectedUser(newUser);
    }

    if (userId === loggedUser._id) {
      setUser(newUser);
    }
  };

  const deleteBook = async (bookId: number) => {
    await genericFetch(
      `/remove/user/book/${selectedUser._id}/${bookId}`,
      "POST",
      false
    );
    setUserBookList(userBookList.filter((book: Book) => book._id !== bookId));
  };

  const deleteUser = async (userId: number) => {
    await genericFetch(`/remove/user/${userId}`, "POST", false);
    setUsers(users.filter((user: User) => user._id !== userId));
  };

  const findBookFromList = (list: Array<Book>, bookId: number) => {
    return list.filter((book: Book) => book._id === bookId);
  };

  const bookInNotBookList = () => {
    return !findBookFromList(userBookList, selectedBook).length;
  };

  const insertBookToBookList = async () => {
    if (bookInNotBookList()) {
      await genericFetch(
        `/user/book/${selectedUser._id}/${selectedBook}`,
        "POST",
        false
      );
      const newBook: Book = findBookFromList(books, selectedBook)[0];
      setUserBookList([...userBookList, newBook]);
    } else {
      Toast.fire({
        icon: ICON.WARNING,
        title: MASSAGES.BOOK_ALREADY_EXIST,
      });
    }
  };

  return {
    users,
    books,
    selectedUser,
    userBookList,
    setSelectedBook,
    getSelectedUser,
    updateFavBook,
    updateUserName,
    deleteBook,
    deleteUser,
    insertBookToBookList,
  };
};

export default useManageUsers;

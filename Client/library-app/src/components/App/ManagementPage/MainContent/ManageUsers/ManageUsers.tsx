import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { useStyles } from "./ManageUserStyles";
import EditUserCard from "./EditUserCard/EditUserCard";
import UserBookCard from "./UserBookCard/UserBookCard";
import { User } from "../../../../../models/User";
import { Book } from "../../../../../models/Book";
import StoreStateType from "../../../../../redux/StoreStateType";
import { setUser } from "../../../../../redux/User/UserActionCreators";

const { REACT_APP_SERVER_ADDRESS } = process.env;

const ManageUsers = () => {
  useEffect(() => {
    getAllUsers();
    getAllBooks();
    getUserBookList();
  });

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const [books, setBooks] = useState<Array<Book>>([]);
  const [selectedUser, setSelectedUser] = useState({
    _id: -999,
    name: "",
    favBook: -999,
  });
  const [userBookList, setUserBookList] = useState([]);
  const loggedUser = useSelector<StoreStateType, User>((state) => state.user);

  const getAllUsers = async () => {
    if (users.length === 0) {
      const response = await fetch(`${REACT_APP_SERVER_ADDRESS}/users`);
      const usersList = await response.json();
      setUsers(usersList);
    }
  };

  const getAllBooks = async () => {
    if (books.length === 0) {
      const response = await fetch(`${REACT_APP_SERVER_ADDRESS}/books`);
      const bookList = await response.json();
      setBooks(bookList);
    }
  };

  const getSelectedUser = async (id: Number) => {
    const response = await fetch(`${REACT_APP_SERVER_ADDRESS}/user/${id}`);
    const user = await response.json();
    setSelectedUser(user);
  };

  const getUserBookList = async () => {
    if (selectedUser._id !== -999) {
      const response = await fetch(
        `${REACT_APP_SERVER_ADDRESS}/userBookList/${selectedUser._id}`
      );
      const bookList = await response.json();
      setUserBookList(bookList);
    }
  };

  const updateFavBook = async (userId: number, bookId: number) => {
    const response = await fetch(
      `${REACT_APP_SERVER_ADDRESS}/update/favBook/${userId}/${bookId}`,
      {
        method: "POST",
      }
    );
    const newUser = await response.json();
    setSelectedUser(newUser);
  };

  const updateUserName = async (userId: number, name: string) => {
    const response = await fetch(
      `${REACT_APP_SERVER_ADDRESS}/update/name/${userId}/${name}`,
      {
        method: "POST",
      }
    );
    const newUser = await response.json();

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
    await fetch(
      `${REACT_APP_SERVER_ADDRESS}/remove/user/book/${selectedUser._id}/${bookId}`,
      {
        method: "POST",
      }
    );
    setUserBookList(userBookList.filter((book: Book) => book._id !== bookId));
  };

  const deleteUser = async (userId: number) => {
    await fetch(`${REACT_APP_SERVER_ADDRESS}/remove/user/${userId}`, {
      method: "POST",
    });
    setUsers(users.filter((user: User) => user._id !== userId));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onsubmit = async () => {
    handleClose();
  };

  return (
    <div>
      <Grid container spacing={10}>
        <Grid item>
          {users.map((user: User) => (
            <EditUserCard
              id={user._id}
              name={user.name}
              callSetUser={getSelectedUser}
              deleteUser={deleteUser}
              setUserName={updateUserName}
            />
          ))}
        </Grid>
        <Divider variant="middle" />
        <Grid item>
          <Box
            display={selectedUser._id !== -999 ? "flex" : "none"}
            justifyContent="space-between"
            alignItems="ceneter"
          >
            <Typography>הספרים שקרא {selectedUser.name}:</Typography>
            <Button className={classes.addBookButton} onClick={handleClickOpen}>
              הוסף ספר
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <FormControl className={classes.formControl}>
                  <Select>
                    {books.map((book: Book) => (
                      <MenuItem key={book._id} value={book._id}>
                        {book.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button onClick={onsubmit}>הוסף ספר</Button>
              </DialogContent>
            </Dialog>
          </Box>
          {userBookList.map((book: Book) => (
            <UserBookCard
              book={book}
              user={selectedUser}
              updateFavBook={updateFavBook}
              deleteBook={deleteBook}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ManageUsers;

import { useState, useEffect } from "react";
import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";

import { useStyles } from "./ManageUserStyles";
import EditUserCard from "./EditUserCard/EditUserCard";
import UserBookCard from "./UserBookCard/UserBookCard";
import { User } from "../../../../../models/User";
import { Book } from "../../../../../models/Book";

const { REACT_APP_SERVER_ADDRESS } = process.env;

const ManageUsers = () => {
  useEffect(() => {
    getAllUsers();
    getUserBookList();
  });
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({
    _id: -999,
    name: "",
    favBook: "",
  });
  //check how to do this with function and no with state =>
  const [userBookList, setUserBookList] = useState([]);

  const getAllUsers = async () => {
    if (users.length === 0) {
      const response = await fetch(`${REACT_APP_SERVER_ADDRESS}/users`);
      const usersList = await response.json();
      setUsers(usersList);
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

  return (
    <div>
      <Grid container spacing={10}>
        <Grid item>
          {users.map((user: User) => (
            <EditUserCard
              id={user._id}
              name={user.name}
              callSetUser={getSelectedUser}
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
            <Button className={classes.addBookButton}>הוסף ספר</Button>
          </Box>
          {userBookList.map((book: Book) => (
            <UserBookCard
              id={book._id}
              bookName={book.name}
              authorId={book.authorId}
              favBook={selectedUser.favBook}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ManageUsers;

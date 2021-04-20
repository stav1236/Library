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

import { useStyles } from "./ManageUserStyles";
import EditUserCard from "./EditUserCard/EditUserCard";
import UserBookCard from "./UserBookCard/UserBookCard";
import { User } from "models/User";
import { Book } from "models/Book";
import useDialog from "customHooks/useDialog";
import useManageUsers from "./useManageUsers";

const ManageUsers = () => {
  const classes = useStyles();
  const { open, changeMod } = useDialog();
  const {
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
  } = useManageUsers();

  const onsubmit = async () => {
    await insertBookToBookList();
    changeMod();
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
            className={classes.marginTop}
          >
            <Typography>הספרים שקרא {selectedUser.name}:</Typography>
            <Button className={classes.addBookButton} onClick={changeMod}>
              הוסף ספר
            </Button>
            <Dialog open={open} onClose={changeMod}>
              <DialogContent>
                <Box display="flex">
                  <FormControl className={classes.formControl}>
                    <Select
                      onChange={(event) =>
                        setSelectedBook(event.target.value as number)
                      }
                    >
                      {books.map((book: Book) => (
                        <MenuItem key={book._id} value={book._id}>
                          {book.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Button onClick={onsubmit}>הוסף</Button>
                </Box>
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

import { Divider, Grid, Typography, Box } from "@material-ui/core";

import useManageBooks from "./useManageBooks";
import { useStyles } from "./ManageBookStyles";
import EditBookCard from "./EditBookCard/EditBookCard";
import BookUserCard from "./BookUserCard/BookUserCard";

import { Book } from "models/Book";
import { User } from "models/User";

const ManageBooks = () => {
  const classes = useStyles();
  const {
    books,
    selectedBook,
    bookUserList,
    deleteBook,
    deleteUser,
    getSelectedBook,
    updateBookName,
  } = useManageBooks();

  return (
    <div>
      <Grid container spacing={10}>
        <Grid item>
          {books.map((book: Book) => (
            <EditBookCard
              book={book}
              callSetBook={getSelectedBook}
              deleteBook={deleteBook}
              setBookName={updateBookName}
            />
          ))}
        </Grid>
        <Divider variant="middle" />
        <Grid item>
          <Box
            display={selectedBook._id !== -999 ? "flex" : "none"}
            alignItems="ceneter"
          >
            <Typography className={classes.marginTop}>
              הקוראים של {selectedBook.name}:
            </Typography>
          </Box>
          {bookUserList.map((user: User) => (
            <BookUserCard user={user} deleteUser={deleteUser} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ManageBooks;

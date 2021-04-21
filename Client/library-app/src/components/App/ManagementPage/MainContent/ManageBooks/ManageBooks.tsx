import { Divider, Grid, Typography, Box } from "@material-ui/core";

import { useStyles } from "./ManageBookStyles";
import EditBookCard from "./EditBookCard/EditBookCard";
import { Book } from "models/Book";
import useManageBooks from "./useManageBooks";

const ManageBooks = () => {
  const classes = useStyles();
  const {
    books,
    selectedBook,
    deleteBook,
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
        </Grid>
      </Grid>
    </div>
  );
};

export default ManageBooks;

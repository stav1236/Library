import { Divider, Grid, Typography, Box } from "@material-ui/core";

import useManageBooks from "./useManageAuthors";
import { useStyles } from "./ManageAuthorStyles";
import EditAuthorCard from "./EditAuthorCard/EditAuthorCard";
import BookCard from "./BookCard/BookCard";

import { Book } from "models/Book";
import { Author } from "models/Author";

const ManageAuthors = () => {
  const classes = useStyles();
  const {
    authors,
    selectedAuthor,
    authorBookList,
    deleteAuthor,
    getSelectedAuthor,
    updateAuthorName,
  } = useManageBooks();

  return (
    <div>
      <Grid container spacing={10}>
        <Grid item>
          {authors.map((author: Author) => (
            <EditAuthorCard
              author={author}
              callSetAuthor={getSelectedAuthor}
              deleteAuthor={deleteAuthor}
              setAuthorName={updateAuthorName}
            />
          ))}
        </Grid>
        <Divider variant="middle" />
        <Grid item>
          <Box
            display={selectedAuthor._id !== -999 ? "flex" : "none"}
            alignItems="ceneter"
          >
            <Typography className={classes.marginTop}>
              הספרים של {selectedAuthor.name}:
            </Typography>
          </Box>
          {authorBookList.map((book: Book) => (
            <BookCard book={book} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ManageAuthors;

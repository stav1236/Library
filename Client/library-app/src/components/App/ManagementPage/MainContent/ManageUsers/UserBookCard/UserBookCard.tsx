import {
  Typography,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Box,
  Divider,
  Checkbox,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyles } from "./UserBookCardStyles";
import { Book } from "models/Book";
import { User } from "models/User";
import useAuthorName from "customHooks/useAuthorName";

type CardProps = {
  book: Book;
  user: User;
  updateFavBook: Function;
  deleteBook: Function;
};

const UserBookCard = ({ book, user, updateFavBook, deleteBook }: CardProps) => {
  const classes = useStyles();
  const authorName = useAuthorName(book.authorId);

  const handleClick = async () => {
    updateFavBook(user._id, book._id);
  };

  const removeBook = async () => {
    deleteBook(book._id);
  };

  return (
    <Card className={classes.card}>
      <Box display="flex">
        <CardContent className={classes.cardText}>
          <Typography>
            מזהה:{book._id} שם:{book.name}
          </Typography>
          <Typography>סופר:{authorName}</Typography>
        </CardContent>
        <Divider orientation="vertical" flexItem />
        <CardActions>
          <Box display="flex">
            <Checkbox
              onClick={handleClick}
              checked={book._id === user.favBook}
              icon={<StarIcon />}
              checkedIcon={<StarIcon className={classes.yellowStart} />}
              name="checkedH"
            />
            <IconButton onClick={removeBook}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
};

export default UserBookCard;

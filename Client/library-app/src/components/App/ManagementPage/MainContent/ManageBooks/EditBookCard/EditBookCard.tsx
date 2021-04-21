import {
  Typography,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Box,
  ButtonBase,
  Divider,
  Dialog,
  DialogContent,
  Button,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyles } from "./EditBookCardStyles";
import useDialog from "customHooks/useDialog";
import useAuthorName from "customHooks/useAuthorName";
import { Book } from "models/Book";
type CardProps = {
  book: Book;
  callSetBook: Function;
  deleteBook: Function;
  setBookName: Function;
};

const EditBookCard = ({
  book,
  callSetBook,
  deleteBook,
  setBookName,
}: CardProps) => {
  const classes = useStyles();
  const { open, changeMod } = useDialog();
  const [newName, setNewName] = useState("");
  const authorName = useAuthorName(book.authorId);

  const onsubmit = async () => {
    setBookName(book._id, newName);
    changeMod();
  };

  const handleClick = async () => {
    callSetBook(book._id);
  };

  const removeBook = async () => {
    deleteBook(book._id);
  };

  return (
    <Card className={classes.card}>
      <Box display="flex">
        <ButtonBase className={classes.cardText} onClick={handleClick}>
          <CardContent>
            <Typography>
              מזהה:{book._id} שם:{book.name}
            </Typography>
            <Typography>סופר:{authorName}</Typography>
          </CardContent>
        </ButtonBase>
        <Divider orientation="vertical" flexItem />
        <CardActions>
          <Box display="flex">
            <IconButton onClick={changeMod}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={removeBook}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Box>
      <Dialog open={open} onClose={changeMod}>
        <DialogContent>
          <TextField
            value={newName}
            onChange={(e) => setNewName(e.target.value as string)}
          />
          <Button onClick={onsubmit}>שנה</Button>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default EditBookCard;

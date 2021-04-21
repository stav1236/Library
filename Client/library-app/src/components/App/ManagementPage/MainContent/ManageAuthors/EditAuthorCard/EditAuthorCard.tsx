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

import { Author } from "models/Author";
import useDialog from "customHooks/useDialog";
import { useStyles } from "./EditAuthorCardStyles";

type CardProps = {
  author: Author;
  callSetAuthor: Function;
  deleteAuthor: Function;
  setAuthorName: Function;
};

const EditBookCard = ({
  author,
  callSetAuthor,
  deleteAuthor,
  setAuthorName,
}: CardProps) => {
  const classes = useStyles();
  const { open, changeMod } = useDialog();
  const [newName, setNewName] = useState("");

  const onsubmit = async () => {
    setAuthorName(author._id, newName);
    changeMod();
  };

  const handleClick = async () => {
    callSetAuthor(author._id);
  };

  const removeAuthor = async () => {
    deleteAuthor(author._id);
  };

  return (
    <Card className={classes.card}>
      <Box display="flex">
        <ButtonBase className={classes.cardText} onClick={handleClick}>
          <CardContent>
            <Typography>
              מזהה:{author._id} שם:{author.name}
            </Typography>
          </CardContent>
        </ButtonBase>
        <Divider orientation="vertical" flexItem />
        <CardActions>
          <Box display="flex">
            <IconButton onClick={changeMod}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={removeAuthor}>
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

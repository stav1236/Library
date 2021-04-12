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
import { useState, useEffect } from "react";
import StarIcon from "@material-ui/icons/Star";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyles } from "./UserBookCardStyles";

type CardProps = {
  id: Number;
  bookName: string;
  authorId: Number;
  favBook: String;
};

const { REACT_APP_SERVER_ADDRESS } = process.env;

const UserBookCard = ({ id, bookName, authorId, favBook }: CardProps) => {
  useEffect(() => {
    getAuthorName();
  });

  const classes = useStyles();
  const [authorName, setAuthorName] = useState("");

  const getAuthorName = async () => {
    const response = await fetch(
      `${REACT_APP_SERVER_ADDRESS}/author/name/${authorId}`
    );
    const name = await response.json();
    setAuthorName(name);
  };

  const handleClick = async () => {
    console.log(bookName);
  };

  return (
    <Card className={classes.card}>
      <Box display="flex">
        <CardContent className={classes.cardText}>
          <Typography>
            מזהה:{id} שם:{bookName}
          </Typography>
          <Typography>סופר:{authorName}</Typography>
        </CardContent>
        <Divider orientation="vertical" flexItem />
        <CardActions>
          <Box display="flex">
            <Checkbox
              onClick={handleClick}
              checked={bookName === favBook}
              icon={<StarIcon />}
              checkedIcon={<StarIcon className={classes.yellowStart} />}
              name="checkedH"
            />
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
};

export default UserBookCard;

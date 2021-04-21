import { Typography, Card, CardContent, Box } from "@material-ui/core";

import { useStyles } from "./BookCardStyles";

import { Book } from "models/Book";

type CardProps = {
  book: Book;
};

const BookCard = ({ book }: CardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Box display="flex">
        <CardContent>
          <Typography>
            מזהה:{book._id} שם:{book.name}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BookCard;

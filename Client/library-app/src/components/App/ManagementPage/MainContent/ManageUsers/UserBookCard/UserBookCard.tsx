import {
  Typography,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Box,
  ButtonBase,
  Divider,
  Checkbox,
} from "@material-ui/core";

import StarIcon from "@material-ui/icons/Star";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyles } from "./UserBookCardStyles";

type CardProps = {
  id: Number;
  bookName: string;
  authorName: string;
};

const UserBookCard = ({ id, bookName, authorName }: CardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Box display="flex">
        <ButtonBase className={classes.cardText}>
          <CardContent>
            <Typography>
              מזהה:{id} שם:{bookName}
            </Typography>
            <Typography>סופר:{authorName}</Typography>
          </CardContent>
        </ButtonBase>
        <Divider orientation="vertical" flexItem />
        <CardActions>
          <Box display="flex">
            <Checkbox
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

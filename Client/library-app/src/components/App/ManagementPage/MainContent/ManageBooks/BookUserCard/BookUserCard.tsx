import {
  Typography,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Box,
  Divider,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyles } from "./BookUserCardStyles";

import { User } from "models/User";

type CardProps = {
  user: User;
  deleteUser: Function;
};

const UserBookCard = ({ user, deleteUser }: CardProps) => {
  const classes = useStyles();

  const removeUser = async () => {
    deleteUser(user._id);
  };

  return (
    <Card className={classes.card}>
      <Box display="flex">
        <CardContent className={classes.cardText}>
          <Typography>
            מזהה:{user._id} שם:{user.name}
          </Typography>
        </CardContent>
        <Divider orientation="vertical" flexItem />
        <CardActions>
          <Box display="flex">
            <IconButton onClick={removeUser}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
};

export default UserBookCard;

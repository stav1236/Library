import {
  Typography,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Box,
  Divider,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyles } from "./BookUserCardStyles";

import { User } from "models/User";
import StoreStateType from "redux/StoreStateType";

type CardProps = {
  user: User;
  deleteUser: Function;
};

const UserBookCard = ({ user, deleteUser }: CardProps) => {
  const classes = useStyles();
  const loggedUser = useSelector<StoreStateType, User>((state) => state.user);

  const removeUser = async () => {
    deleteUser(user._id);
  };

  return (
    <Card className={classes.card}>
      <Box display="flex" justifyContent="center">
        <CardContent className={classes.cardText}>
          <Typography>
            מזהה:{user._id} שם:{user.name}
          </Typography>
        </CardContent>
        <Box display={user._id === loggedUser._id ? "flex" : "none"}>
          <Divider orientation="vertical" flexItem />
          <CardActions>
            <Box display="flex">
              <IconButton onClick={removeUser}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};

export default UserBookCard;

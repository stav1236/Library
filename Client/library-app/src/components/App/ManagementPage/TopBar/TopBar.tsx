import {
  AppBar,
  Grid,
  Typography,
  Button,
  Box,
  Avatar,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { useStyles } from "./TopBarStyles";

import { User } from "models/User";

import StoreStateType from "redux/StoreStateType";

type TopBarProps = {
  favBookName: string;
};

const TopBar = ({ favBookName }: TopBarProps) => {
  const classes = useStyles();
  const history = useHistory();
  const loggedUser = useSelector<StoreStateType, User>((state) => state.user);

  const handleClick = () => {
    history.push("/home");
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Box
        display="flex"
        height="10vh"
        width="100vw"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Avatar className={classes.bookLogo}></Avatar>
          <Typography className={classes.header}>הספריה </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <div>
            <Typography className={classes.userWellcomText}>
              שלום {loggedUser.name}!
            </Typography>
            <Typography className={classes.favBookMassage}>
              הספר המועדף עליך: {favBookName}
            </Typography>
          </div>
          <Button className={classes.disconnectButton} onClick={handleClick}>
            התנתק
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default TopBar;

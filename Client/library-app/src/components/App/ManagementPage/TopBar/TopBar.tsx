import {
  AppBar,
  Grid,
  Typography,
  Button,
  Box,
  Avatar,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useStyles } from "./TopBarStyles";
import { User } from "models/User";
import StoreStateType from "redux/StoreStateType";
import { genericFetch } from "utils/utils";

const TopBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [favBookname, setFavBookname] = useState("");
  const loggedUser = useSelector<StoreStateType, User>((state) => state.user);

  useEffect(() => {
    getFavBookName();
  });

  const getFavBookName = async () => {
    const bookName = await genericFetch(
      `/book/name/${loggedUser.favBook}`,
      "GET",
      true
    );
    setFavBookname(bookName);
  };

  const handleClick = () => {
    history.push("/home");
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Grid container alignItems="center" justify="space-between">
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
              הספר המועדף עליך: {favBookname}
            </Typography>
          </div>
          <Button className={classes.disconnectButton} onClick={handleClick}>
            התנתק
          </Button>
        </Box>
      </Grid>
    </AppBar>
  );
};

export default TopBar;

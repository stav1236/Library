import {
  AppBar,
  Grid,
  Typography,
  Button,
  Box,
  Avatar,
} from "@material-ui/core";

import { useStyles } from "./TopBarStyles";

const TopBar = () => {
  const classes = useStyles();

  const handleClick = () => {
    window.location.href = "/";
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
              שלום עידן דוידי!
            </Typography>
            <Typography className={classes.favBookMassage}>
              הספר המועדף עליך: קיצור תולדות האנושות
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

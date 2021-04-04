import { AppBar, Grid, Typography, Button } from "@material-ui/core";

import { useStyles } from "./TopBarStyles";

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Grid container justify="space-between" alignItems="center">
        <Typography className={classes.header}>הספריה </Typography>
        <Button className={classes.disconnectButton}>התנתק</Button>
      </Grid>
    </AppBar>
  );
};

export default TopBar;

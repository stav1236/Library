import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";

import EditUserCard from "./EditUserCard/EditUserCard";
import UserBookCard from "./UserBookCard/UserBookCard";
import { useStyles } from "./ManageUserStyles";

const ManageUsers = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={10}>
        <Grid item>
          <EditUserCard id={1} name="סתיו מאור" />
          <EditUserCard id={2} name="אודי דורון" />
          <EditUserCard id={3} name="גיל שמשון" />
        </Grid>
        <Divider variant="middle" />
        <Grid item>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="ceneter"
          >
            <Typography>הספרים שקרא דוידי:</Typography>
            <Button className={classes.addBookButton}>הוסף ספר</Button>
          </Box>
          <UserBookCard
            id={1}
            bookName="לא רציונלי ולא במקרה"
            authorName="סתיו מאור"
          />
          <UserBookCard
            id={2}
            bookName="לא רציונלי ולא במקרה"
            authorName="אודי דורון"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ManageUsers;

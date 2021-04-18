import {
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { User } from "../../../models/User";
import { useStyles } from "./HomePageStyles";

const { REACT_APP_SERVER_ADDRESS } = process.env;

const HomePage = () => {
  useEffect(() => {
    getAllUsers();
  });

  const classes = useStyles();
  const [connecedtUserId, setConnectedUserId] = useState(-999);
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    if (users.length === 0) {
      const response = await fetch(`${REACT_APP_SERVER_ADDRESS}/users`);
      const usersList = await response.json();
      setUsers(usersList);
    }
  };

  const handleClick = () => {
    if (connecedtUserId !== -999) {
      window.location.href = "/management";
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="80vh"
    >
      <Typography variant="h1" className={classes.header}>
        הספריה של הסתיו
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>בחר משתמש להתחברות..</InputLabel>
        <Select
          onChange={(event) => setConnectedUserId(event.target.value as number)}
        >
          {users.map((user: User) => (
            <MenuItem key={user._id} value={user._id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        className={classes.connectButton}
        onClick={handleClick}
        disabled={connecedtUserId === -999}
      >
        התחבר
      </Button>
    </Box>
  );
};

export default HomePage;

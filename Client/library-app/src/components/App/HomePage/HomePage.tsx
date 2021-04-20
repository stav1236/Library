import {
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { User } from "models/User";
import { useStyles } from "./HomePageStyles";
import { setUser } from "redux/User/UserActionCreators";
import StoreStateType from "redux/StoreStateType";

const { REACT_APP_SERVER_ADDRESS } = process.env;

const HomePage = () => {
  const loggedUser = useSelector<StoreStateType, User>((state) => state.user);
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    getAllUsers();
  }, [users]);

  const getAllUsers = async () => {
    if (users.length === 0) {
      const response = await fetch(`${REACT_APP_SERVER_ADDRESS}/users`);
      const usersList = await response.json();
      setUsers(usersList);
    }
  };

  const changeUser = (id: number) => {
    const user: Array<User> = users.filter((user: User) => user._id === id);
    setUser(user[0]);
  };

  const handleClick = () => {
    if (loggedUser._id !== -999) {
      history.push("/management");
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
          value={loggedUser._id}
          onChange={(event) => changeUser(event.target.value as number)}
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
        disabled={loggedUser._id === -999}
      >
        התחבר
      </Button>
    </Box>
  );
};

export default HomePage;

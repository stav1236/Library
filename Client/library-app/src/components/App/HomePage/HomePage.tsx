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
  const [connecedtUser, setConnectedUser] = useState("");
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    if (users.length === 0) {
      const response = await fetch(`${REACT_APP_SERVER_ADDRESS}/users`);
      const usersList = await response.json();
      setUsers(usersList);
    }
  };

  const handleClick = () => {
    if (connecedtUser !== "") {
      window.location.href = "/management";
    }
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setConnectedUser(event.target.value as string);
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
        <Select value={connecedtUser} onChange={handleChange}>
          {users.map((user: User) => (
            <MenuItem value={user.name}>{user.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button className={classes.connectButton} onClick={handleClick}>
        התחבר
      </Button>
    </Box>
  );
};

export default HomePage;

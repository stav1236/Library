import { useState, useEffect } from "react";
import {
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@material-ui/core";

import { useStyles } from "./HomePageStyles";
import {manager} from "../../../models/manager"

const { REACT_APP_SERVER_ADDRESS } = process.env;

const HomePage = () => {
  useEffect(() => {
    getAllMannagers();
  });

  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [managersList, setManagersList] = useState([]);

  const getAllMannagers = async () => {
    if ([...managersList].length === 0) {
      console.log(process.env);
      const response = await fetch(`${REACT_APP_SERVER_ADDRESS}/managers`);
      console.log(response);
      const allMannagers = await response.json();
      console.log(allMannagers);

      await setManagersList(allMannagers);
    }
  };

  const handleClick = () => {
    if (userName !== "") {
      window.location.href = "/management";
    }
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUserName(event.target.value as string);
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
        <Select value={userName} onChange={handleChange}>
          {managersList.map((manager: manager) => (
            <MenuItem value={manager.name}>{manager.name}</MenuItem>
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

import { useState } from "react";
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

const HomePage = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState("");

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
          <MenuItem value={"סתיו"}>סתיו</MenuItem>
          <MenuItem value={"גיל"}>גיל</MenuItem>
          <MenuItem value={"רון"}>רון</MenuItem>
        </Select>
      </FormControl>
      <Button className={classes.connectButton} onClick={handleClick}>
        התחבר
      </Button>
    </Box>
  );
};

export default HomePage;

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
        הספרייה של הסתיו
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>בחר משתמש להתחברות..</InputLabel>
        <Select>
          <MenuItem value={10}>סתיו</MenuItem>
          <MenuItem value={20}>גיל</MenuItem>
          <MenuItem value={30}>רון</MenuItem>
        </Select>
      </FormControl>
      <Button className={classes.connectButton}>התחבר</Button>
    </Box>
  );
};

export default HomePage;

import { makeStyles, Theme } from "@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) => ({
  header: {
    fontFamily: "sans-serif",
    fontSize: "10vw",
    color: "rgb(7, 114, 255)",
    WebkitTextStroke: "0.3vw blue",
  },
  connectButton: {
    margin: "5vh",
    width: "15vw",
    height: "10vh",
    fontSize: "2vw",
    color: "white",
    backgroundColor: "rgb(86 228 20)",
    "&:hover": {
      backgroundColor: lightGreen.A700,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "25vw",
  },
}));

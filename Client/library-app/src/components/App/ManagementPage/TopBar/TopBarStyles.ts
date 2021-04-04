import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  header: {
    marginRight: "1vw",
    fontFamily: "sans-serif",
    fontSize: "3vw",
  },
  appBar: {
    height: "10vh",
  },
  disconnectButton: {
    marginLeft: "1vw",
    width: "7vw",
    height: "5.5vh",
    fontSize: "1.5vw",
    color: "white",
    backgroundColor: "rgb(255, 174, 0)",
    "&:hover": {
      backgroundColor: "rgb(255, 162, 0)",
    },
  },
});

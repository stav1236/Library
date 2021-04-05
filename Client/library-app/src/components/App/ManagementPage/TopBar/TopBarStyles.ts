import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  header: {
    marginRight: "0.5vw",
    fontFamily: "sans-serif",
    fontSize: "3vw",
  },
  appBar: {
    height: "10vh",
    zIndex: theme.zIndex.drawer + 1,
  },
  disconnectButton: {
    marginLeft: "1vw",
    marginRight: "1vw",
    width: "7vw",
    height: "5.5vh",
    fontSize: "1.5vw",
    color: "white",
    backgroundColor: "rgb(255, 174, 0)",
    "&:hover": {
      backgroundColor: "rgb(255, 162, 0)",
    },
  },
  userWellcomText: {
    fontSize: "1.7vw",
    textAlign: "start",
  },
  favBookMassage: {
    fontSize: "1vw",
  },
  bookLogo: {
    width: "3vw",
    height: "3vw",
    marginRight: "1vw",
  },
}));

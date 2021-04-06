import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  addBookButton: {
    marginRight: "6vw",
    width: "8vw",
    height: "5.5vh",
    fontSize: "1.5vw",
    color: "white",
    backgroundColor: "rgb(17, 31, 189)",
    "&:hover": {
      backgroundColor: "rgb(3, 15, 145)",
    },
  },
});

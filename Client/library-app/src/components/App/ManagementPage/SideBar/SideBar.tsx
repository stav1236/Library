import {
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  Toolbar,
  ButtonBase,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { useStyles } from "./SideBarStyles";

const SideBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const routePage = (path: string) => {
    history.push(path);
  };

  return (
    <Drawer
      anchor="right"
      variant="persistent"
      open
      className={classes.drawer}
      classes={{
        paper: classes.drawer,
      }}
    >
      <Toolbar />
      <div>
        <List>
          {[
            { text: "ניהול משתמשים", path: "/management/users" },
            { text: "ניהול ספרים", path: "/management/books" },
            { text: "ניהול סופרים", path: "/management/authors" },
          ].map((item) => (
            <ButtonBase onClick={() => history.push(item.path)}>
              <ListItem button key={item.text}>
                <ListItemText primary={item.text} />
              </ListItem>
              <Divider />
            </ButtonBase>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default SideBar;

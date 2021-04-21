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

import { URL } from "utils/utils";

const SideBar = () => {
  const classes = useStyles();
  const history = useHistory();

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
            { text: "ניהול משתמשים", path: URL.USERS },
            { text: "ניהול ספרים", path: URL.BOOKS },
            { text: "ניהול סופרים", path: URL.AUTHORS },
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

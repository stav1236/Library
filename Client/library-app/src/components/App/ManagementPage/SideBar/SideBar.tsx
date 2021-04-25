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

const pathsList = [
  { text: "ניהול משתמשים", path: URL.USERS },
  { text: "ניהול ספרים", path: URL.BOOKS },
  { text: "ניהול סופרים", path: URL.AUTHORS },
];

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
      <List>
        {pathsList.map((item) => (
          <ButtonBase
            className={classes.drawer}
            onClick={() => history.push(item.path)}
          >
            <ListItem button key={item.text}>
              <ListItemText primary={item.text} />
            </ListItem>
            <Divider />
          </ButtonBase>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;

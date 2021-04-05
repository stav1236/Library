import {
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  Toolbar,
} from "@material-ui/core";

import { useStyles } from "./SideBarStyles";

const SideBar = () => {
  const classes = useStyles();

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
          {["ניהול משתמשים", "ניהול ספרים", "ניהול סופרים"].map((text) => (
            <div>
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default SideBar;

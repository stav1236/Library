import {
  Typography,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Box,
  ButtonBase,
  Divider,
  Dialog,
  DialogContent,
  Button,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { User } from "models/User";
import { useStyles } from "./EditUserCardStyles";
import StoreStateType from "redux/StoreStateType";
import useDialog from "customHooks/useDialog";
import { Toast, ICON, UNDIFNED_NAME, MASSAGES } from "utils/utils";

type CardProps = {
  id: Number;
  name: string;
  callSetUser: Function;
  deleteUser: Function;
  setUserName: Function;
};

const EditUserCard = ({
  id,
  name,
  callSetUser,
  deleteUser,
  setUserName,
}: CardProps) => {
  const classes = useStyles();
  const { open, changeMod } = useDialog();
  const [newName, setNewName] = useState(UNDIFNED_NAME);
  const loggedUser = useSelector<StoreStateType, User>((state) => state.user);

  const onsubmit = async () => {
    setUserName(id, newName);
    changeMod();
  };

  const handleClick = async () => {
    callSetUser(id);
  };

  const removeUser = async () => {
    if (loggedUser._id !== id) {
      deleteUser(id);
    } else {
      Toast.fire({
        icon: ICON.WARNING,
        title: MASSAGES.CANT_DELETE_CONNECTED,
      });
    }
  };

  return (
    <Card className={classes.card}>
      <Box display="flex">
        <ButtonBase className={classes.cardText} onClick={handleClick}>
          <CardContent>
            <Typography>
              מזהה:{id} שם:{name}
            </Typography>
          </CardContent>
        </ButtonBase>
        <Divider orientation="vertical" flexItem />
        <CardActions>
          <Box display="flex">
            <IconButton onClick={changeMod}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={removeUser}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Box>
      <Dialog open={open} onClose={changeMod}>
        <DialogContent>
          <TextField
            value={newName}
            onChange={(e) => setNewName(e.target.value as string)}
          />
          <Button onClick={onsubmit}>שנה</Button>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default EditUserCard;

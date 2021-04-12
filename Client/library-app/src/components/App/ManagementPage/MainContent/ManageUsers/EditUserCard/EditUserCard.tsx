import {
  Typography,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Box,
  ButtonBase,
  Divider,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyles } from "./EditUserCardStyles";

type CardProps = {
  id: Number;
  name: string;
  callSetUser: Function;
};

const EditUserCard = ({ id, name, callSetUser }: CardProps) => {
  const classes = useStyles();

  const handleClick = async () => {
    callSetUser(id);
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
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
};

export default EditUserCard;

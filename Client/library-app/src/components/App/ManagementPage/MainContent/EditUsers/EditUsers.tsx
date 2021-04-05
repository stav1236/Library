import { Typography } from "@material-ui/core";

type CardProps = {
  name: string;
};

const EditUsers = ({ name }: CardProps) => {
  return (
    <div>
      <Typography paragraph>{name}</Typography>
    </div>
  );
};

export default EditUsers;

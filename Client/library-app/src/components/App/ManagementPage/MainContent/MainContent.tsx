import { Box, Toolbar } from "@material-ui/core";
import EditUsers from "./EditUsers/EditUsers";
import UserBookDetails from "./UserBookDetails/UserBookDetails";

const MainContent = () => {
  return (
    <main>
      <Toolbar />
      <Box display="flex">
        <EditUsers name="stav" />
        {/* <UserBookDetails /> */}
      </Box>
    </main>
  );
};

export default MainContent;

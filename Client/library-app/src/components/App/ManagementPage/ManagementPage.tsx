import { Box, Toolbar } from "@material-ui/core";

import TopBar from "./TopBar/TopBar";
import SideBar from "./SideBar/SideBar";
import MainContent from "./MainContent/MainContent";
import { useStyles } from "./ManagementPageStyles";

const ManagementPage = () => {
  const classes = useStyles();

  return (
    <Box display="flex">
      <TopBar />
      <SideBar />
      <MainContent />
    </Box>
  );
};

export default ManagementPage;

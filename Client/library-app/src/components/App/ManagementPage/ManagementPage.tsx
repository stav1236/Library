import { Box } from "@material-ui/core";

import TopBar from "./TopBar/TopBar";
import SideBar from "./SideBar/SideBar";
import MainContent from "./MainContent/MainContent";

const ManagementPage = () => {
  return (
    <Box display="flex">
      <TopBar />
      <SideBar />
      <MainContent />
    </Box>
  );
};

export default ManagementPage;

import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";

import TopBar from "./TopBar/TopBar";
import SideBar from "./SideBar/SideBar";
import MainContent from "./MainContent/MainContent";

import { User } from "models/User";
import { UNDIFNED_ID } from "utils/utils";
import StoreStateType from "redux/StoreStateType";

const ManagementPage = () => {
  const loggedUser = useSelector<StoreStateType, User>((state) => state.user);

  return (
    <Box display={loggedUser._id !== UNDIFNED_ID ? "flex" : "none"}>
      <TopBar />
      <SideBar />
      <MainContent />
    </Box>
  );
};

export default ManagementPage;

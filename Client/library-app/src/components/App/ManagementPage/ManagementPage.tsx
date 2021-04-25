import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import TopBar from "./TopBar/TopBar";
import SideBar from "./SideBar/SideBar";
import MainContent from "./MainContent/MainContent";

import { User } from "models/User";
import {
  genericFetch,
  UNDIFNED_NAME,
  UNDIFNED_BOOK_NAME,
  UNDIFNED_ID,
} from "utils/utils";
import StoreStateType from "redux/StoreStateType";

const ManagementPage = () => {
  const [favBookName, setFavBookName] = useState(UNDIFNED_NAME);
  const loggedUser = useSelector<StoreStateType, User>((state) => state.user);

  useEffect(() => {
    getFavBookName();
  });

  const getFavBookName = async () => {
    let bookName = UNDIFNED_BOOK_NAME;
    if (loggedUser.favBook !== UNDIFNED_ID) {
      bookName = await genericFetch(
        `/book/name/${loggedUser.favBook}`,
        "GET",
        true
      );
    }

    setFavBookName(bookName);
  };
  return (
    <Box display={loggedUser._id !== UNDIFNED_ID ? "flex" : "none"}>
      <TopBar favBookName={favBookName} />
      <SideBar />
      <MainContent />
    </Box>
  );
};

export default ManagementPage;

import { Route } from "react-router-dom";
import { Toolbar } from "@material-ui/core";

import ManageUsers from "./ManageUsers/ManageUsers";
import ManageBooks from "./ManageBooks/ManageBooks";
import ManageAuthors from "./ManageAuthors/ManageAuthors";

import { URL } from "utils/utils";

const MainContent = () => {
  return (
    <main>
      <Toolbar />
      <Route path={URL.USERS} component={ManageUsers} />
      <Route path={URL.BOOKS} component={ManageBooks} />
      <Route path={URL.AUTHORS} component={ManageAuthors} />
    </main>
  );
};

export default MainContent;

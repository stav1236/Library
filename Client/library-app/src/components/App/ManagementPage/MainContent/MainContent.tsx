import { Toolbar } from "@material-ui/core";
import ManageUsers from "./ManageUsers/ManageUsers";
import ManageBooks from "./ManageBooks/ManageBooks";

import { Route } from "react-router-dom";

const MainContent = () => {
  return (
    <main>
      <Toolbar />
      <Route path="/management/users" component={ManageUsers} />
      <Route path="/management/books" component={ManageBooks} />
      <Route path="/management/authors" />
    </main>
  );
};

export default MainContent;

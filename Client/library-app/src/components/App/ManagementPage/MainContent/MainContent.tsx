import { Toolbar } from "@material-ui/core";
import ManageUsers from "./ManageUsers/ManageUsers";
import { Route } from "react-router-dom";

const MainContent = () => {
  return (
    <main>
      <Toolbar />
      <Route path="/management/users" component={ManageUsers} />
      <Route path="/management/books" />
      <Route path="/management/authors" />
    </main>
  );
};

export default MainContent;

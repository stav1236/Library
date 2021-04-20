import { Toolbar } from "@material-ui/core";
import ManageUsers from "./ManageUsers/ManageUsers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainContent = () => {
  return (
    <main>
      <Toolbar />
      <Router>
        <Switch>
          <Route path="/users">
            <ManageUsers />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default MainContent;

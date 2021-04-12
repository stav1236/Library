import rtl from "jss-rtl";
import { create } from "jss";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import ManagementPage from "./ManagementPage/ManagementPage";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const rtlTheme = createMuiTheme({ direction: "rtl" });

const App = () => {
  return (
      <Router>
        <Switch>
          <Route path="/management">
            <ManagementPage />
          </Route>
          <Route path="/">
            <StylesProvider jss={jss}>
              <ThemeProvider theme={rtlTheme}>
                <HomePage />
              </ThemeProvider>{" "}
            </StylesProvider>
          </Route>
        </Switch>
      </Router>
  );
};

export default App;

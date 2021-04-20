import rtl from "jss-rtl";
import { create } from "jss";
import { Provider } from "react-redux";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import { store } from "redux/store";
import HomePage from "./HomePage/HomePage";
import ManagementPage from "./ManagementPage/ManagementPage";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const rtlTheme = createMuiTheme({ direction: "rtl" });

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Redirect exact from="/" to="home" />
        <Route path="/home">
          <StylesProvider jss={jss}>
            <ThemeProvider theme={rtlTheme}>
              <HomePage />
            </ThemeProvider>{" "}
          </StylesProvider>
        </Route>
        <Route path="/management">
          <ManagementPage />
        </Route>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

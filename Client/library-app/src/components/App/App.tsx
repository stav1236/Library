import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

import HomePage from "./HomePage/HomePage";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const rtlTheme = createMuiTheme({ direction: "rtl" });

const App = () => {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={rtlTheme}>
        <HomePage />
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;

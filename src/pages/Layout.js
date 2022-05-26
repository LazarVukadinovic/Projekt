import { Outlet, Link } from "react-router-dom";
import React, {useState} from "react";
import "./Layout.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MaterialUISwitch from "../SwitcherComponent";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../Themes";

const Layout = () => {

    const [theme, setTheme] = useState("light");
    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todoapp">ToDo lista</Link>
            </li>
            <li>
              <Link to="/calculator">Kalkulator</Link>
            </li>
            <li className="switcher">
              <GlobalStyles />
              <FormGroup>
                <FormControlLabel
                  onClick={themeToggler}
                  control={<MaterialUISwitch sx={{ m: 1 }} />}
                  label="Theme"
                />
              </FormGroup>
            </li>
          </ul>
        </nav>

        <Outlet />
      </>
    </ThemeProvider>
  );
};

export default Layout;
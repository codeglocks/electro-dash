import React,{useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import MiniDrawer from "./shared/component/navigation";
import HomePage from "./homepage/pages/HomePage";
import Interface_01 from "./example_01/pages/Interface_01";
import Interface_02 from "./example_01/pages/Interface_02";
import InterfaceStats from "./stats/pages/Interface_stats";
import { Helmet } from "react-helmet";
import { ThemeContext } from "./shared/context/ThemeContext";
import DarkTheme from "./shared/themes/DarkTheme";
import LightTheme from "./shared/themes/LightTheme";
import { ThemeProvider } from "@material-ui/core";
import regeneratorRuntime from "regenerator-runtime";

export default function App() {
  const [darkState, setDarkState] = useState(false);
  const selectedTheme = darkState ? DarkTheme : LightTheme;

  const toggleTheme = () => {
    localStorage.setItem(
      "userTheme",
      JSON.stringify({
        themeState: !darkState,
      })
    );
    setDarkState(!darkState);
  };

  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem("userTheme"));
    if (storedTheme) {
      if (storedTheme.themeState) {
        setDarkState(true);
      }
    } else {
      setDarkState(false);
    }
  }, []);
  const routes = (
    <div>
      <MiniDrawer>
        <Switch>
          <Route path="/" exact>
            <HomePage></HomePage>
          </Route>
          <Route path="/interface-01" exact>
            <Interface_01></Interface_01>
          </Route>
          <Route path="/interface-02" exact>
            <Interface_02></Interface_02>
          </Route>
          <Route path="/interface-stats" exact>
            <InterfaceStats></InterfaceStats>
          </Route>
          
          <Redirect to="/"></Redirect>
        </Switch>
      </MiniDrawer>
    </div>
  );

  return (
    <ThemeProvider theme={selectedTheme}>
      <ThemeContext.Provider
        value={{ themeState: darkState, toggleTheme: toggleTheme }}
      >
        <Helmet>
          <meta
            http-equiv="Content-Security-Policy"
            content="script-src 'self';"
          />
        </Helmet>
        <Router>{routes}</Router>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

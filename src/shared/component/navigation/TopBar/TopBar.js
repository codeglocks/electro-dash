import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  useTheme,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { NavContext } from "../../../context/NavContext";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { ThemeContext } from "../../../context/ThemeContext";
import { autoUpdater } from "electron";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: 36,
  },
  toggleIcon: {
    marginRight:'1rem',
    marginLeft:'auto'
  },
  hide: {
    display: "none",
  },
}));

const TopBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const navCon = useContext(NavContext);
  const themeContext = useContext(ThemeContext);

  const icon = !themeContext.themeState ? (
    <Brightness7Icon />
  ) : (
    <Brightness3Icon />
  );

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: navCon.open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={navCon.drawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: navCon.open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Electro-Dash
        </Typography>
        <IconButton
          className={classes.toggleIcon}
          color="inherit"
          aria-label="mode"
          onClick={themeContext.toggleTheme}
          edge="start"
        >
          {icon}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import TopBar from "./TopBar";
import { NavContext } from "../../context/NavContext";
import { SideDrawer, SideBarLinks } from "./SideDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavContext.Provider
        value={{
          open: open,
          drawerOpen: handleDrawerOpen,
          drawerClose: handleDrawerClose,
        }}
      >
        <TopBar />
        <SideDrawer>
          <SideBarLinks></SideBarLinks>
        </SideDrawer>
      </NavContext.Provider>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className="page-content">{props.children}</div>
      </main>
    </div>
  );
}

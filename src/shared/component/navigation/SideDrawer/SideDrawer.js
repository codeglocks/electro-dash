import React, { useContext } from "react";
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  useTheme,
  Typography,
} from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import { NavContext } from "../../../context/NavContext";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  appName: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const SideDrawer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const navCon = useContext(NavContext);
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: navCon.open,
        [classes.drawerClose]: !navCon.open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: navCon.open,
          [classes.drawerClose]: !navCon.open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <Typography
          className={classes.appName}
          component="h3"
          variant="h6"
          align="right"
          color="textPrimary"
        >
          Your Logo
        </Typography>
        <IconButton onClick={navCon.drawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      {props.children}
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Drawer>
  );
};

export default SideDrawer;

import React from "react";
import { NavLink } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  makeStyles,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import StarBorder from "@material-ui/icons/StarBorder";
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const SideBarLinks = () => {
  const classes = useStyles();
  const [roomOpen, setRoomOpen] = React.useState(false);
  const [buildingOpen, setBuildingOpen] = React.useState(false);

  return (
    <List>
      {/*============== Home Page===================== */}
      <NavLink
        style={{ textDecoration: "none" }}
        to="/"
        className="MuiTypography-colorInherit "
      >
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home Page" />
        </ListItem>
      </NavLink>
      {/*============== Home page End===================== */}
      {/* ============== Sample drop down ===================== */}
      <ListItem button onClick={() => setBuildingOpen(!buildingOpen)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Sample" />
        {buildingOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={buildingOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/interface-01"
            className="MuiTypography-colorInherit "
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Interface 01" />
            </ListItem>
          </NavLink>
        </List>
        <List component="div" disablePadding>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/interface-02"
            className="MuiTypography-colorInherit "
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <EqualizerIcon />
              </ListItemIcon>
              <ListItemText primary="Interface 02" />
            </ListItem>
          </NavLink>
        </List>
      </Collapse>
      {/* ============== Sample dropdown End ===================== */}
      {/*============== Stats Page===================== */}
      <NavLink
        style={{ textDecoration: "none" }}
        to="/interface-stats"
        className="MuiTypography-colorInherit "
      >
        <ListItem button>
          <ListItemIcon>
            <EqualizerIcon></EqualizerIcon>
          </ListItemIcon>
          <ListItemText primary="Statistics" />
        </ListItem>
      </NavLink>
      {/*============== Stats page End===================== */}
    </List>
  );
};
export default SideBarLinks;

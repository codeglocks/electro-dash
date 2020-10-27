import React from "react";
import { Box, Typography, Grid, Link, Button, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    linkButton: {
      textDecoration: 'none',
    },
  })

const HomePage = () => {
    const classes = useStyles();

  return (
    <Box mx={2} my={5}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Electro-Dash
      </Typography>

      <Typography variant="h5" align="center" color="textSecondary" paragraph>
      An Electron+React Dashboard with Material UI to speed up the process of building desktop applications. Start to develop your next desktop application without any hassle.
      </Typography>
      <div>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <NavLink className={classes.linkButton} to="/interface-01">
              <Button variant="contained" color="primary">
                View 01
              </Button>
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink className={classes.linkButton} to="/interface-02">
              <Button variant="outlined" color="primary">
                View 02
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </div>
      {/*  <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <br></br>
        <Link href="/admin" color="secondary">
          Go to the admin page
        </Link> */}
    </Box>
  );
};
export default HomePage;

import React, { useState, useEffect } from "react";
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";
import { Line, Doughnut, Radar } from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  table: {
    minWidth: 650,
  },

  marginT: {
    marginTop: "2rem",
  },
  marginY: {
    marginTop: "0.5rem",
  },
  paper: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

const InterfaceStats = () => {
  const classes = useStyles();
  const [lineChartData, setLineChartData] = useState({});
  const [pieChartData, setPieChartData] = useState({});
  const [radarChartData, setRadarChartData] = useState({});

  const lineChart = () => {
    setLineChartData({
      labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      datasets: [
        {
          label: "Working hours per day",
          data: [3.5, 5.0, 4.0, 5.5, 3.5],
          backgroundColor: ["rgba(75,192,192,0.6)"],
          borderWidth: 4,
        },
      ],
    });
  };
  const pieChart = () => {
    setPieChartData({
      labels: ["Lecture hours", "Tutorial hours", "Labs hours"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    });
  };
  const radarChart = () => {
    setRadarChartData({
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running",
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBackgroundColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255,99,132,1)",
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    });
  };
  useEffect(() => {
    lineChart();
    pieChart();
    radarChart();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          paragraph
          className={classes.marginT}
        >
          Employees Statistics
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
            className={classes.marginY}
          >
            Working hours per day
          </Typography>
          <Line data={lineChartData}></Line>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
            className={classes.marginY}
          >
            Average precentage of subject contents (Hours)
          </Typography>

          <Doughnut data={pieChartData} />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
            className={classes.marginY}
          >
            Radar View
          </Typography>

          <Radar data={radarChartData} />
        </Paper>
      </Grid>
    </Grid>
  );
};
export default InterfaceStats;

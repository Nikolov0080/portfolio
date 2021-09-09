import { Grid } from "@material-ui/core";
import React from "react";
import Info from "../../components/home/Info";
import PersonalInfo from "../../components/home/PersonalInfo";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  info: {
    [theme.breakpoints.down("md")]: {
      paddingBottom: 60,
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="space-evenly">
      <Grid className={classes.info} item xs={12} md={3}>
        <PersonalInfo />
      </Grid>
      <Grid item xs={12} md={6}>
        <Info />
      </Grid>
    </Grid>
  );
};

export default Home;

import { Grid } from "@material-ui/core";
import React from "react";
import Info from "../../components/about/Info";
import PersonalInfo from "../../components/about/PersonalInfo";
import { makeStyles } from "@material-ui/core";
import Certificates from "../../components/about/Certificates";

const useStyles = makeStyles((theme) => ({
  personalInfo: {
    [theme.breakpoints.down("md")]: {
      paddingBottom: 30,
    },
  },
  info: {
    paddingTop: "5%",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container justifyContent="space-evenly">
        <Grid className={classes.personalInfo} item xs={12} md={3}>
          <PersonalInfo />
        </Grid>
        <Grid className={classes.info} item xs={12} md={6}>
          <Info />
        </Grid>
      </Grid>
      <Certificates />
    </div>
  );
};

export default About;

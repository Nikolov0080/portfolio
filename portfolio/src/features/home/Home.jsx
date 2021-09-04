import { Grid } from "@material-ui/core";
import React from "react";
import PersonalInfo from "../../components/home/PersonalInfo";
const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={5}>
        <PersonalInfo />
      </Grid>
      <Grid item>info here</Grid>
    </Grid>
  );
};

export default Home;

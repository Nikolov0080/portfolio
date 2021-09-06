import { Grid } from "@material-ui/core";
import React from "react";
import Info from "../../components/home/Info";
import PersonalInfo from "../../components/home/PersonalInfo";
const Home = () => {
  return (
    <Grid container justifyContent="space-between">
      <Grid item xs={12} md={3}>
        <PersonalInfo />
      </Grid>
      <Grid item xs={12} md={6}>
        <Info />
      </Grid>
    </Grid>
  );
};

export default Home;

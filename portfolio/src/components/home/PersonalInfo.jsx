import { Avatar } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    "@media (max-width:780px)": {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  },
}));
const PersonalInfo = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={6}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Avatar variant="circular" className={classes.avatar} />
      </Grid>
      <Grid item>sd</Grid>
    </Grid>
  );
};

export default PersonalInfo;

import { Avatar, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { ReactComponent as ReactLogo } from "../../app/images/svg/react.svg";
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    "@media (max-width:780px)": {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  },
  text: {
    lineHeight: theme.spacing(0.4),
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textBig: {
    lineHeight: theme.spacing(0.2),
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
      <Grid item>
        <Typography className={classes.textBig} variant="h4" align="left">
          Hi, I'm Zhivko
        </Typography>
        <Typography variant="h4">Web developer</Typography>
        <Typography className={classes.text} variant="body2">
          Front End / React Developer
          <ReactLogo height={30} width={30} />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;

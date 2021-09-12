import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { SocialIcon } from "react-social-icons";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
  },
  socialBox: {
    margin: theme.spacing(3),
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2),
      marginTop: theme.spacing(1),
    },
  },
}));

const Social = () => {
  const classes = useStyles();
  return (
    <div className={classes.socialBox}>
      <SocialIcon url="https://github.com/Nikolov0080" />
      <SocialIcon url="https://www.linkedin.com/in/zhivko-nikolov-24b5a8191/" />
      <SocialIcon url="https://www.upwork.com/freelancers/~01137fda5121f52a5f" />
      <SocialIcon url="https://www.facebook.com/UserUndefine01100100/" />
    </div>
  );
};

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <BottomNavigation className={classes.root}>
        <Grid container>
          <Grid xs={11} sm={6} md={8} lg={8} item></Grid>
          <Grid xs={11} sm={5} md={3} lg={3} item>
            <Social />
          </Grid>
        </Grid>
      </BottomNavigation>
    </div>
  );
};

export default Footer;

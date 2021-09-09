import { Divider, Typography, Chip } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { CHIPS_SKILLS } from "../../app/constants";
import { SocialIcon } from "react-social-icons";
const useStyles = makeStyles((theme) => ({
  heading: {
    marginLeft: theme.spacing(2),
  },
  skillsBox: {
    margin: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(1),
      textAlign: "center",
    },
  },
  second: {
    paddingTop: 50,
  },
  socialBox: {
    margin: theme.spacing(3),
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0),
      marginTop: theme.spacing(1),
    },
  },
}));

const Info = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.heading} variant="h5">
        My skills
      </Typography>
      <Divider />
      <Skills />
      <Typography
        className={[classes.heading, classes.second].join(" ")}
        variant="h5"
      >
        Add me in
      </Typography>
      <Divider />
      <Social />
    </div>
  );
};

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.skillsBox}>
      {CHIPS_SKILLS.map(({ skill, icon }) => {
        return <Chip icon={icon} label={skill} variant="outlined" />;
      })}
    </div>
  );
};

export default Info;
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

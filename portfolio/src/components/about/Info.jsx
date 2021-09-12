import { Divider, Typography, Chip } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { CHIPS_SKILLS } from "../../app/static/constants";
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

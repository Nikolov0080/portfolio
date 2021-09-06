import { Divider, Typography, Chip } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { CHIPS_SKILLS } from "../../app/constants";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginLeft: theme.spacing(2),
  },
  skillsBox: {
    margin: theme.spacing(3),
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
      {CHIPS_SKILLS.map(({ skill, color, icon }) => {
        return (
          <Chip icon={icon} color={color} label={skill} variant="outlined" />
        );
      })}
    </div>
  );
};

export default Info;

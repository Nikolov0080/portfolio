import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 245,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  media: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.short,
    }),
  },
  link: {
    textDecoration: "none",
  },
}));

const CertificateCard = ({ title, imageURL, link }) => {
  const classes = useStyles();
  console.log(imageURL);
  console.log(title);

  return (
    <Tooltip placement="top" title="Click to see full info">
      <a className={classes.link} target="_blank" href={link}>
        <Card className={classes.root}>
          <CardHeader disableTypography="subheader" title={title} />
          <CardMedia
            alt="certificate image"
            component="img"
            image={imageURL}
            className={classes.media}
          />
        </Card>
      </a>
    </Tooltip>
  );
};

export default CertificateCard;

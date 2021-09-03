import React from "react";
import image from "../../app/images/bg.jpg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100%",
    minWidth: "100%",
    position: "fixed",
    top: 0,
    left: 0,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.background}>{children}</div>;
};

export default Layout;

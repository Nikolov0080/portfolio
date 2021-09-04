import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Navigation from "../../components/layout/Navigation";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(4),
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Navigation />
      <Container className={classes.mainContainer}>{children}</Container>
    </div>
  );
};

export default Layout;

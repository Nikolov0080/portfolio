import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Navigation from "../../components/layout/Navigation";
import ParticlesBg from "particles-bg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(6),
    height: "100%",
    padding: 0,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Navigation style={{ maxWidth: "96vh" }} />
      <ParticlesBg num={12} color="#4C4C4C" type="cobweb" bg={true} />
      <Container className={classes.mainContainer}>{children}</Container>
    </div>
  );
};

export default Layout;

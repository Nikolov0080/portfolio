import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Navigation from "../../components/layout/Navigation";
import ParticlesBg from "particles-bg";
import Footer from "../../components/layout/Footer";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(6),
    display: "flex",
    minHeight: "80vh",
    flexDirection: "column",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Navigation style={{ maxWidth: "96vh" }} />
      <ParticlesBg num={12} color="#4C4C4C" type="cobweb" bg={true} />
      <Container className={classes.mainContainer}>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;

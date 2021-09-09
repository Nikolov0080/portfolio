import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import PageTabs from "../../features/tabs/Tabs";
import { Grid, Typography } from "@material-ui/core";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const NavBar = (props) => {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ opacity: 0.9 }} color="inherit">
          <Toolbar>
            <Grid container alignItems="center" justifyContent="space-around">
              <Grid item xs={12} md={4}>
                <Typography align="center">Zhivko Nikolov</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <PageTabs />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default NavBar;

import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setLoading } from "./loadingSlice";

const useStyles = makeStyles((theme) => ({
  mainContainer: {},
}));

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  dispatch(setLoading(false));
  const classes = useStyles();
  return <Container className={classes.mainContainer}>{children}</Container>;
};

export default Layout;

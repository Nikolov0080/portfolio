import { Typography, Grid, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { CERTIFICATES } from "../../app/static/constants";
import CertificateCard from "./CertificateCard";
import { SocialIcon } from "react-social-icons";

const useStyles = makeStyles((theme) => ({
  certBox: {
    padding: 10,
  },
  cert: {
    padding: 20,
    margin: 20,
  },
  info: {
    padding: 40,
  },
}));

const ListCertificates = () => {
  return (
    <>
      <Grid spacing={4} justifyContent="center" container>
        {CERTIFICATES.map(({ title, imageURL, link }) => (
          <Grid item>
            <CertificateCard title={title} imageURL={imageURL} link={link} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const Certificates = () => {
  const classes = useStyles();
  return (
    <div className={classes.certBox}>
      <Paper className={classes.cert} elevation={0}>
        <Typography variant="h4" align="center">
          Certificates and Education
        </Typography>
      </Paper>

      <ListCertificates />

      <Typography align="center" className={classes.info}>
        View the code of this app from here{" "}
        <SocialIcon url="https://github.com/Nikolov0080/portfolio/tree/main/portfolio" />
      </Typography>
    </div>
  );
};

export default Certificates;

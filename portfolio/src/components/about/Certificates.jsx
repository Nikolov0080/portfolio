import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { CERTIFICATES } from "../../app/static/constants";
import CertificateCard from "./CertificateCard";

const useStyles = makeStyles((theme) => ({
  certBox: {
    padding: 10,
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
      <Typography align="center">Certificates / education</Typography>
      <ListCertificates />
    </div>
  );
};

export default Certificates;

import { Grid } from "@material-ui/core";
import React from "react";
import SendEmail from "../../components/contacts/SendEmail";

const Contacts = () => {
  return (
    <div>
      <Grid container justifyContent="space-evenly">
        <Grid sm={12} md={6} lg={6} xl={5} item>
          <SendEmail />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contacts;

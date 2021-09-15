import { Grid } from "@material-ui/core";
import React from "react";
import SendEmail from "../../components/contacts/SendEmail";

const Contacts = () => {
  return (
    <div>
      <Grid container justifyContent="space-evenly">
        <Grid style={{ marginBottom: 40 }} sm={12} md={5} lg={5} xl={4} item>
          sd text text Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Eum porro quis quae? Officiis asperiores molestiae nam natus laborum
          ipsa, aspernatur cum quam beatae debitis nemo velit esse dolore
          corporis voluptatem!
        </Grid>
        <Grid sm={12} md={6} lg={6} xl={5} item>
          <SendEmail />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contacts;

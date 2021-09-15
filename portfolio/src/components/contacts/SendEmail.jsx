import { Button, Paper, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import {
  email,
  inputEmail,
  inputMessage,
  inputName,
  message,
  name,
} from "./formSlice";
import { useSelector } from "react-redux";
// import {} from 'date-fns'
const useStyles = makeStyles((theme) => ({
  box: {
    margin: "auto",
    padding: 30,
  },
  input: {
    width: "100%",
    marginTop: 20,
  },
  btnBox: {
    marginTop: 20,
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const SendEmail = () => {
  const classes = useStyles();

  const currentEmail = useSelector(email);
  const currentName = useSelector(name);
  const currentMessage = useSelector(message);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // structure the message for sending date,time etc.
  };

  const handleChange =
    (type) =>
    ({ target }) => {
      const value = target.value;
      switch (type) {
        case "email":
          dispatch(inputEmail(value));
          break;
        case "name":
          dispatch(inputName(value));
          break;
        case "message":
          dispatch(inputMessage(value));
          break;
        default:
          break;
      }
    };

  return (
    <Paper className={classes.box}>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          variant="outlined"
          size="small"
          type="email"
          name="email"
          label="Email"
          onChange={handleChange("email")}
          value={currentEmail}
        />

        <TextField
          className={classes.input}
          variant="outlined"
          size="small"
          type="text"
          name="name"
          label="Your name"
          onChange={handleChange("name")}
          value={currentName}
        />

        <TextField
          className={classes.input}
          variant="outlined"
          size="small"
          type="text"
          name="message"
          multiline
          label="Message"
          rows={4}
          onChange={handleChange("message")}
          value={currentMessage}
        />
        <div className={classes.btnBox}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default SendEmail;

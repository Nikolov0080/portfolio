import React from "react";
import { Button, CircularProgress, Paper, TextField } from "@material-ui/core";
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
import addMessage from "../../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { selectLoading, setLoading } from "../../features/layout/loadingSlice";

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
  btn: {
    width: 100,
    height: 40,
  },
  progressBox: {
    width: 50,
    marginRight: 20,
  },
}));

const SendEmail = () => {
  const classes = useStyles();
  const currentEmail = useSelector(email);
  const currentName = useSelector(name);
  const currentMessage = useSelector(message);
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();

  const notification = (message, type) => toast[type](message);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    const { status } = await addMessage(
      currentEmail,
      currentName,
      currentMessage
    );

    status === 400
      ? notification("Something went wrong :/", "error")
      : notification("Email send!", "success");

    dispatch(setLoading(false));
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
      <ToastContainer theme="colored" hideProgressBar={true} autoClose={3000} />
      <form onSubmit={handleSubmit}>
        <TextField
          required
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
          required
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
          required
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
          {loading === true ? (
            <>
              <div className={classes.progressBox}>
                <CircularProgress />
              </div>
            </>
          ) : (
            <>
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </>
          )}
        </div>
      </form>
    </Paper>
  );
};

export default SendEmail;

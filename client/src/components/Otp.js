import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    marginTop: theme.spacing(22),
    width: 300,
    marginLeft: "40%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Otp({ userNumber }) {
  const classes = useStyles();
  const [otp, setOtp] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(`http://localhost:8000/otp`, { otp, userNumber }).then((res) => {
      if (res.data.resp.valid) {
        history.push(`/home?number=${userNumber}&otp=${otp}`);
      } else {
        alert("Expired otp");
      }
    });
  };

  const handleChange = (event) => {
    setOtp(event.target.value);
  };

  return (
    <>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="number"
          label="Otp"
          autoComplete="Otp"
          autoFocus
          value={otp}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit Otp
        </Button>
      </form>
    </>
  );
}

export default Otp;

import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { DEL_USER } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import AuthService from "../utils/auth";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: theme.spacing(0, 0, 0.5),
  },
  avatar: {
    verticalAlign: "left",
    marginRight: theme.spacing(0.5),
  },
  large: {
    alignItems: "center",
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(2, 2, 0),
  },
  container: {
    height: "84vh",
  },
}));

export default function MyAccount() {
  const classes = useStyles();
  const {
    data: { _id },
  } = AuthService.getProfile();
  console.log(_id);

  const [deleteUser] = useMutation(DEL_USER);
  const handleDeleteUser = async () => {
    try {
      await deleteUser({
        variables: { id: _id },
      });
      AuthService.logout();
    } catch (err) {
      console.error(err);
    }
  };

  const { loading, data = {} } = useQuery(QUERY_ME);
  const { me } = data;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card variant="outlined" className="my-account">
      <h1 className="my-account-title">MY ACCOUNT</h1>
      <Grid container spacing={2}>
        <Grid item xs={4} id="myaccountprofilepic">
          <CardMedia align="left">
            <Avatar
              alt="avatar of account owner"
              src={me.profilePic}
              className={classes.large}
            />
          </CardMedia>
        </Grid>

        <Grid item xs={8}>
          <CardContent align="left" id="myaccountdetails">
            <Typography
              id="myaccountdetailstext"
              className={classes.text}
              color="textSecondary"
              variant="h6"
              align="left"
            >
              {"First Name: "}
              <span className="italics">{me.firstName}</span>
            </Typography>
            <Typography
              id="myaccountdetailstext"
              className={classes.text}
              color="textSecondary"
              variant="h6"
              align="left"
            >
              {"Last name: "}
              <span className="italics">{me.lastName}</span>
            </Typography>
            <Typography
              id="myaccountdetailstext"
              className={classes.text}
              color="textSecondary"
              variant="h6"
              align="left"
            >
              {"Email:  "}
              <span className="italics">{me.email}</span>
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              color="error"
              onClick={handleDeleteUser}
              size="large"
            >
              Delete Account
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

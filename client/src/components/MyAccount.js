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

const handleButtonClick = () => {
  console.log("clicked");
};

export default function UserCard(props) {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.container}>
      <h1 id="myaccountitle">My Account:</h1>
      <Grid container spacing={2}>
        <Grid item xs={4} id="myaccountprofilepic">
          <CardMedia align="left">
            <Avatar
              alt="Remy Sharp"
              src={props?.content?.picture?.large}
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
              {"First Name: Mohamed "}
            </Typography>
            <Typography
              id="myaccountdetailstext"
              className={classes.text}
              color="textSecondary"
              variant="h6"
              align="left"
            >
              {"First Name: Mohamed "}
            </Typography>
            <Typography
              id="myaccountdetailstext"
              className={classes.text}
              color="textSecondary"
              variant="h6"
              align="left"
            >
              {"Email: Mohamed@test.com "}
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              color="error"
              onClick={handleButtonClick}
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

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
      <Grid container spacing={2}>
        <Grid item xs={4} id="profilepic">
          <CardMedia align="left">
            <Avatar
              alt="Remy Sharp"
              src={props?.content?.picture?.large}
              className={classes.large}
            />
          </CardMedia>
        </Grid>

        <Grid item xs={8} id>
          <CardContent align="left">
            <Typography
              className={classes.text}
              color="textSecondary"
              variant="h6"
              align="center"
            >
              {"First Name: Mohamed "}
            </Typography>
            <Typography
              className={classes.text}
              color="textSecondary"
              variant="h6"
              align="center"
            >
              {"First Name: Mohamed "}
            </Typography>
            <Typography
              className={classes.text}
              color="textSecondary"
              variant="h6"
              align="center"
            >
              {"Email: Mohamed@test.com "}
            </Typography>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              color="error"
              onClick={handleButtonClick}
            >
              Delete Account
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

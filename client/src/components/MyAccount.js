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
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: theme.spacing(0, 0, 0.5),
  },
  avatar: {
    verticalAlign: "middle",
    marginRight: theme.spacing(0.5),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(2, 2, 0),
  },
}));

export default function UserCard(props) {
  const classes = useStyles();

  return (
    <Card variant="outlined">
      <CardMedia align="center">
        <Avatar
          alt="Remy Sharp"
          src={props?.content?.picture?.large}
          className={classes.large}
        />
      </CardMedia>
      <CardContent>
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
          <AlternateEmailIcon className={classes.avatar} fontSize="small" />
          {props?.content?.email}
          {"mohamed@test.com"}
        </Typography>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
          color="error"
        >
          Delete Account
        </Button>
      </CardContent>
    </Card>
  );
}

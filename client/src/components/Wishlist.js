import Auth from "../utils/auth";
import { removeTreatmentId } from "../utils/localStorage";

import { useQuery, useMutation } from "@apollo/client";
// name of the functions to be edited after getting the code from backend team
import { GET_USER } from "../utils/queries";
import { DEL_WISHLIST } from "../utils/mutations";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Wishlist = () => {
  //   const { loading, data } = useQuery(GET_USER);
  //   const [removeTreatment] = useMutation(DEL_WISHLIST);

  //   const userData = data?.user || {};

  //   const handleDeleteTreatment = async (treatmentId) => {
  //     const token = Auth.loggedIn() ? Auth.getToken() : null;

  //     if (!token) {
  //       return false;
  //     }
  //     try {
  //       await removeTreatment({
  //         variables: { treatmentId },
  //       });
  //       removeTreatmentId(treatmentId);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   // if data isn't here yet
  //   if (loading) {
  //     return <h2>LOADING...</h2>;
  //   }

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // hard-coded for testing
  return (
    <>
      <div>
        <h2 className="wishlist-title">WISHLIST</h2>
      </div>
      <Card sx={{ maxWidth: 345 }} className="wishlist-card">
        <CardHeader subheader="treatment.name" />
        <CardMedia
          component="img"
          height="194"
          image="treatment.pic_url"
          alt="treament photo"
        />
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <IconButton
              alignItems="center"
              aria-label="delete"
              disabled
              color="primary"
            >
              <AddShoppingCartIcon sx={{ fontSize: 25 }} />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <DeleteIcon sx={{ fontSize: 25 }} />
            </IconButton>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

// TODO: render in the App.js after checking the varible name with the models, queries, and mutations
export default Wishlist;

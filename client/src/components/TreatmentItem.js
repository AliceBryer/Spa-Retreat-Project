// map through the treatment items to produce this component

import * as React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_TREATMENTS } from "../utils/queries";
import { ADD_ORDER, ADD_WISHLIST } from "../utils/mutations";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const TreatmentItem = () => {
  const [addOrder] = useMutation(ADD_ORDER);
  const [addWishlist] = useMutation(ADD_WISHLIST);
  const { loading, data } = useQuery(QUERY_TREATMENTS);
  const dispatch = useDispatch();

  const addToCart = (treatment) => {
    addOrder({
      variables: {
        treatment: treatment._id,
      },
    });
    dispatch({
      type: "ADD",
      payload: treatment,
    });
    console.log("added to cart");
  };

  const addToWishlist = (treatment) => {
    addWishlist({
      variables: {
        treatment: treatment._id,
      },
    });
    dispatch({
      type: "ADD",
      payload: treatment,
    });
    console.log("added to wishlist");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const treatmentsData = data?.treatments ?? [];

  const treatmentCard = treatmentsData.map((treatment) => {
    return (
      <div style={{ margin: 10 }} key={treatment._id}>
        <Card sx={{ maxWidth: 345 }} style={{ height: "100%" }}>
          <CardMedia
            className="treatment-image"
            component="img"
            height="200"
            image={treatment.pictureURL}
            alt={treatment.name}
          />
          <CardContent className="treatment-card-content">
            <Typography
              className="treatment-title"
              gutterBottom
              variant="h5"
              component="div"
            >
              {treatment.name}
            </Typography>
            <Typography
              className="treatment-description"
              variant="body2"
              color="text.secondary"
              height="100"
            >
              {treatment.description}
            </Typography>
            <br />
            <Typography
              className="treatment-price"
              variant="body2"
              color="text.secondary"
            >
              £{treatment.price}.00
            </Typography>
          </CardContent>
          <CardActions className="icon-buttons">
            <Button size="small" onClick={() => addToWishlist(treatment)}>
              Add to wishlist
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />{" "}
            </Button>
            <Button
              size="small"
              onClick={() => {
                addToCart(treatment);
              }}
            >
              Add to Basket
              <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  });

  return <div className="treatment-item-container">{treatmentCard}</div>;
};

export default TreatmentItem;

// map through the treatment items to produce this component

import * as React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TREATMENTS } from "../utils/queries";

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
  const { loading, data } = useQuery(QUERY_TREATMENTS);
  const dispatch = useDispatch();

  if (loading) {
    return <div>Loading...</div>;
  }

  const treatmentsData = data?.treatments ?? [];

  const treatmentCard = treatmentsData.map((treatment) => {
    return (
      <div className="single-treatment-item" key={treatment._id}>
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardMedia
            className="treatment-image"
            component="img"
            height="340"
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
            >
              {treatment.description}
            </Typography>
            <Typography
              className="treatment-price"
              variant="body2"
              color="text.secondary"
            >
              £{treatment.price}.00
            </Typography>
          </CardContent>
          <CardActions className="icon-buttons">
            <Button size="small">
              {" "}
              Add to wishlist{" "}
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />{" "}
            </Button>
            <Button
              size="small"
              onClick={() => dispatch({ type: "ADD", payload: treatment })}
            >
              Add to Basket{" "}
              <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />{" "}
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  });

  return <div className="treatment-item-container">{treatmentCard}</div>;
  // return <h1>Hello</h1>;
};

export default TreatmentItem;

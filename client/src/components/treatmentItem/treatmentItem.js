// map through the treatment items to produce this component

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

// eventually replace/extract placeholder function with add to wishlist functionality
const wishlistPlaceholder = () => {
  console.log("wishlist button press successful");
};
// eventually replace/extract  placeholder function with add to cart functionality
const cartPlaceholder = () => {
  console.log("cart button press successful");
};

// seed data hard coded here. Swap for a link to seed/model.
const dummyTreatmentData = [
  {
    name: "Full Body Massage",
    description:
      "This medium pressure full body massage promises to melt away any hidden tension, applying the finest heated Elemis oils.",
    price: "80",
    pictureURL:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "Head, Neck and Shoulders",
    description: "Deep Tissue Full Body Massage",
    price: "95",
    pictureURL:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  },
  {
    name: "Feet Massage",
    description:
      "Hot to trot. Focusing on the foot and lower leg, this treatment includes exfoliation and a warm foot bath, followed by a tension relieving massage and work on your cuticles. Nails are then filed, shaped and painted in the colour of your choice, with you being able to take home the midi colour as our little treat.",
    price: "55",
    pictureURL:
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Deep tissue full body",
    description:
      "Combat those aches and pains, with a deep tissue massage that can be tailored to focus on your specific areas of concern, ensuring your tired muscles get the TLC they truly deserve",
    price: "95",
    pictureURL:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: " Pro- Collagen Age defying facial massage",
    description:
      "Combining our most-loved Elemis treatments to create the ultimate two-hour experience. Your treatment will begin with a relaxing full body massage, designed to soothe both your muscles and mind, leading onto our Pro-Collagen facial, known for its clinically proven anti-wrinkle results. Leave Spa-Retreat not only feeling refreshed and rebalanced, but also with a firm, radiant and youthful looking complexion.",
    price: "160",
    pictureURL:
      "https://images.unsplash.com/photo-1603274737277-f43f54446c7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNpYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Indian head massage",
    description:
      "Total relaxation. This massage focuses on energy centres of the head, neck, scalp, and face by using key acupressure points to relieve tension and stress. Inclusive of a welcoming foot ritual. Please note this treatment is performed on a therapy chair.",
    price: "80",
    pictureURL:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZCUyMG1hc3NhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Deluxe Manicure",
    description:
      "A luxurious hand and nail treatment. Using the latest anti-ageing products, this treatment includes exfoliation and massage, followed by a nourishing mask and heated mitts. Nails are then filed, shaped and painted in the colour of your choice, with you being able to take home the midi colour as our little treat.",
    price: "55",
    pictureURL:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
  },
  {
    name: "Deluxe Pedicure",
    description:
      "Hot to trot. Focusing on the foot and lower leg, this treatment includes exfoliation and a warm foot bath, followed by a tension relieving massage and work on your cuticles. Nails are then filed, shaped and painted in the colour of your choice, with you being able to take home the midi colour as our little treat.",
    price: "55",
    pictureURL:
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVkaWN1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Cut and blowdry",
    description:
      "Put a little bounce in your barnet with a nourishing blow-dry treatment.",
    price: "34",
    pictureURL:
      "https://images.unsplash.com/photo-1620331317312-74b88bf40907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFpciUyMGRyeWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Balayage",
    descripton:
      "Balayage allows for a sun-kissed, natural looking hair colour, with softer, less noticeable re-growth.",
    price: "84",
    pictureURL: "https://unsplash.com/photos/W6cwaL7PMSw",
  },
  {
    name: "Express styling",
    description:
      "Styling primer is applied to towel-dried hair before your regular styling products.",
    price: "17",
    pictureURL:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFpciUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Couples relaxing full body massage ",
    description:
      "Share a relaxing and memorable occasion providing you an opportunitiy for connecting and bonding with your loved one in a wonderful way.",
    price: "100",
    pictureURL:
      "https://media.istockphoto.com/photos/couple-massage-at-spa-resort-beautiful-couple-getting-a-back-massage-picture-id1336348648?k=20&m=1336348648&s=612x612&w=0&h=aLzVuCJQMnA3zMxl-PBirqJkJykZLCDhZNMvXq9aq5g=",
  },
  {
    name: "Couples pro-radiance facial",
    description:
      "This facial will rejuvenate your skin. It will energise & detoxify a stressed, dull skin with a nutritional superfood boost",
    price: "100",
    pictureURL:
      "https://images.unsplash.com/photo-1643684391140-c5056cfd3436?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjaWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
];

// singular treatment item
const treatmentItem = () => {
  const treatmentCard = dummyTreatmentData.map((item) => {
    return (
      <div className="single-treatment-item">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            className="treatment-image"
            component="img"
            height="340"
            image={item.pictureURL}
            alt={item.name}
          />
          <CardContent>
            <Typography
              className="treatment-title"
              gutterBottom
              variant="h5"
              component="div"
            >
              {item.name}
            </Typography>
            <Typography
              className="treatment-description"
              variant="body2"
              color="text.secondary"
            >
              {item.description}
            </Typography>
            <Typography
              className="treatment-price"
              variant="body2"
              color="text.secondary"
            >
              £{item.price}.00
            </Typography>
          </CardContent>
          <CardActions className="icon-buttons">
            <Button size="small" onClick={wishlistPlaceholder}>
              {" "}
              Add to wishlist{" "}
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />{" "}
            </Button>
            <Button size="small" onClick={cartPlaceholder}>
              Add to Basket{" "}
              <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />{" "}
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  });

  return <div className="treatment-item-container">{treatmentCard}</div>;
};

export default treatmentItem;

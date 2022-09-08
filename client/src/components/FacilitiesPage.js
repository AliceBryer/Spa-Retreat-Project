import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const dummyData = [
  {
    name: "Snooze Room",
    description:
      "Featuring atmospheric lighting and tranquil energy, the water beds are the ideal spots to truly switch off and unwind in silence.",
    pictureURL:
      "https://images.unsplash.com/photo-1535312800630-1c173409799a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Hair & Spa Boutique",
    description:
      "Leave our spa looking your best as a great addition to your day ",
    pictureURL:
      "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=897&q=80",
  },
  {
    name: "Hydrotherapy Pool",
    description:
      "Heal tired muscles whilst lowering your stress levels, in our blissful hydrotherapy pool. Swim under our massage jets, or unwind in our bubbling hot tub. ",
    pictureURL:
      "https://images.unsplash.com/photo-1470376619031-a6791e534bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "Saltwater Pool",
    description:
      "Promote the bodies automatic relaxtion in our mesmerising saltwater pool. Float amongst the crystal clear waters, discovering our starlit cave and poolside loungers.",
    pictureURL:
      "https://images.unsplash.com/photo-1427097829427-56a905bf7004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2FsdHdhdGVyJTIwcG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Detox Centre",
    description:
      "Remove harmful toxins from the body by stimulating your circulatory system in our experience showers or tropical sauna.",
    pictureURL:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "The Atrium",
    description:
      "Kick back in our open plan area and make the most of our detoxing juices and healthy meals and snacks.",
    pictureURL:
      "https://images.unsplash.com/photo-1559625482-34b91d929ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];

const ActionAreaCard = () => {
  const cards = dummyData.map((item) => {
    return (
      <div className="facilities-card">
        <Card sx={{ maxWidth: 445 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={item.pictureURL}
              alt={item.name}
            />
            <CardContent className="facilities-card-content">
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  });

  return <div className="facilities-card-container">{cards}</div>;
};

export default ActionAreaCard;

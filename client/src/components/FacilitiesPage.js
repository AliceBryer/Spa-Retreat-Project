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
    picture:
      "https://images.unsplash.com/photo-1535312800630-1c173409799a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Hair & Spa Boutique",
    description:
      "Leave our spa looking your best as a great addition to you day ",
    picture:
      "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=897&q=80",
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
              height="140"
              image={item.picture}
              alt="green iguana"
            />
            <CardContent>
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

  return (
    <>
      <div>
        <h2 className="title">FACILITIES</h2>
      </div>
      <div className="facilities-card-container">{cards}</div>
    </>
  );
};

export default ActionAreaCard;

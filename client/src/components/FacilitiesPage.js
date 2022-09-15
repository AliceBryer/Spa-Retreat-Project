import * as React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_FACILITIES } from "../utils/queries";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Facilities = () => {
  const { data } = useQuery(QUERY_FACILITIES);
  const facilitiesData = data?.facilities ?? [];

  const facilitiesCard = facilitiesData.map((item) => {
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

  return (
    <>
      <div>
        <h2 className="title">FACILITIES</h2>
      </div>
      <div className="facilities-card-container">{facilitiesCard}</div>
    </>
  );
};

export default Facilities;

import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";

import images from "../photos";

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    height: "100%",
    "@media (min-width:330px)": {
      display: "flex",
    },
  },
  media: {
    height: 300,
    maxHeight: "40%",
    minWidth: "35%",
  },
});

export default function AnimalCard({
  id,
  name,
  age,
  weight,
  gender,
  breed,
  blurb,
  foster,
  picture_link,
}) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{ marginBottom: "1rem", marginLeft: "auto", marginRight: "auto " }}
    >
      <CardMedia
        className={classes.media}
        image={images[picture_link]}
        title="Contemplative Reptile"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}{" "}
        </Typography>
        <Typography gutterBottom variant="h6" component="h5">
          {foster ? (
            <div>
              <HomeSharpIcon />
              Foster Home Needed
            </div>
          ) : null}
          <span>&#8226;</span> {breed}, {age}, {weight}, {gender}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {blurb}
        </Typography>
      </CardContent>
    </Card>
  );
}

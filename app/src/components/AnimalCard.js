import React from "react";

// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";

import images from "../photos";

const useStyles = makeStyles({
  root: {
    display: "flex",
    maxWidth: 800,
  },
  media: {
    height: "auto",
    minWidth: 250,
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
      style={{ marginBottom: "1rem", marginLeft: "1rem" }}
    >
      {/* <CardActionArea> */}
      <CardMedia
        className={classes.media}
        image={images[picture_link]}
        title="Contemplative Reptile"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="h5">
          <span>&#8226;</span> {breed}, {age}, {weight}, {gender}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {blurb}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
      <CardActions>
        {foster ? (
          <div>
            <HomeSharpIcon />
            Foster Me
          </div>
        ) : null}

        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}
import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    // height: "100%",
    // marginBottom: "1rem",
  },
  media: {
    height: 400,
  },
});

export default function FrontPageCard(prop) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={prop.img}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <center>{prop.name}</center>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {prop.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

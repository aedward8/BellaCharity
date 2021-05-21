import React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    height: "100%",
    // marginBottom: "1rem",
  },
  media: {
    height: 400,
  },
  // muicardactions: {
  //   display: "flex",
  //   alignSelf: "flexEnd",
  // },
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
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

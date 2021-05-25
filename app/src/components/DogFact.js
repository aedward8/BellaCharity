import * as React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";

import * as apiClient from "../apiClient";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: 1,
    borderStyle: "solid",
    borderColor: "black",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DogFact() {
  const classes = useStyles();
  const [fact, setFact] = React.useState(
    "Fact: At the age of 4 weeks, most dogs have developed the majority of their vocalizations",
  );

  const loadFact = async () => {
    const data = await apiClient.getFact();
    setFact(data.fact);
  };

  React.useEffect(() => {
    loadFact();
  }, []);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          <InfoIcon /> Dog Fact
        </Typography>{" "}
        <br />
        <Typography variant="h5" component="h2">
          {fact}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => loadFact()} size="small">
          Get Another Fact
        </Button>
      </CardActions>
    </Card>
  );
}

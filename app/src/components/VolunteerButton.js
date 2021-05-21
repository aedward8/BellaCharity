import * as React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PetsIcon from "@material-ui/icons/Pets";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons(prop) {
  const classes = useStyles();
  const { onFilter } = prop;
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<PetsIcon />}
        // onClick={() => onFilter(animals, false)}
      >
        I want to Adopt!
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<HomeIcon />}
        // onClick={() => onFilter(animals, true)}
      >
        I want to Foster!
      </Button>
    </div>
  );
}

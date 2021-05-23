import * as React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Container from "react-bootstrap/esm/Container";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons(prop) {
  const classes = useStyles();
  const { onFilter } = prop;
  return (
    <Container>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        href="/signup-form"
        className={classes.button}
        startIcon={<FavoriteIcon />}
        onClick={() => onFilter("neither")}
      >
        Sign up to Foster or Adopt!
      </Button>{" "}
    </Container>
  );
}

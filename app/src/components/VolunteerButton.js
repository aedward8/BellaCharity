import * as React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PetsIcon from "@material-ui/icons/Pets";
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
        className={classes.button}
        startIcon={
          <>
            <PetsIcon /> <HomeIcon />
          </>
        }
        onClick={() => onFilter("neither")}
      >
        all animals
      </Button>{" "}
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<PetsIcon />}
        onClick={() => onFilter(false)}
      >
        adoption animals
      </Button>{" "}
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<HomeIcon />}
        onClick={() => onFilter(true)}
      >
        foster animals
      </Button>
    </Container>
  );
}

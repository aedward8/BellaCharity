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

export default function IconLabelButtons({ showAnimals }) {
  const classes = useStyles();
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
        onClick={() => showAnimals("all")}
      >
        all animals
      </Button>{" "}
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<PetsIcon />}
        onClick={() => showAnimals("adopt")}
      >
        adoption animals
      </Button>{" "}
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<HomeIcon />}
        onClick={() => showAnimals("foster")}
      >
        foster animals
      </Button>
    </Container>
  );
}

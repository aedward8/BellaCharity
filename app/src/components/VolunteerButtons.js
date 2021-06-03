import * as React from "react";

import ButtonImpl from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PetsIcon from "@material-ui/icons/Pets";
import Container from "react-bootstrap/esm/Container";

export default function IconLabelButtons({ filter, setFilter }) {
  return (
    <Container>
      <Button
        startIcon={
          <>
            <PetsIcon /> <HomeIcon />
          </>
        }
        filterSetting="all"
        {...{ filter, setFilter }}
      >
        all animals
      </Button>

      <Button
        startIcon={<PetsIcon />}
        filterSetting="adopt"
        {...{ filter, setFilter }}
      >
        adoption animals
      </Button>

      <Button
        startIcon={<HomeIcon />}
        filterSetting="foster"
        {...{ filter, setFilter }}
      >
        foster animals
      </Button>
    </Container>
  );
}

const Button = ({ filterSetting, filter, setFilter, ...props }) => {
  const classes = useStyles();

  return (
    <ButtonImpl
      variant="contained"
      color="secondary"
      size="large"
      className={classes.button}
      onClick={() => setFilter(filterSetting)}
      disabled={filter === filterSetting}
      {...props}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

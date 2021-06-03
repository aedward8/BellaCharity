import * as React from "react";

import Container from "react-bootstrap/Container";

import * as apiClient from "../apiClient";

import AdoptButton from "./AdoptButton";
import AnimalList from "./AnimalList";
import VolunteerButtons from "./VolunteerButtons";

const Adoptions = () => {
  const [animals, setAnimals] = React.useState([]);
  const [filter, setFilter] = React.useState("all");

  React.useEffect(() => {
    (async () => {
      setAnimals(await apiClient.getAnimals());
    })();
  }, []);

  let filteredAnimals;
  switch (filter) {
    case "adopt":
      filteredAnimals = animals.filter((animal) => !animal.foster);
      break;
    case "foster":
      filteredAnimals = animals.filter((animal) => animal.foster);
      break;
    default:
      filteredAnimals = animals;
  }

  return (
    <div>
      <Container>
        <h1>Meet our adoptable rescues and fosters animals!</h1>
        <VolunteerButtons {...{ filter, setFilter }} />
        <AnimalList animals={filteredAnimals} />
        <AdoptButton />
      </Container>
    </div>
  );
};

export default Adoptions;

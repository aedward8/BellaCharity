import * as React from "react";

import Container from "react-bootstrap/Container";

import * as apiClient from "../apiClient";

import AdoptButton from "./AdoptButton";
import AnimalList from "./AnimalList";
import VolunteerButton from "./VolunteerButton";

const Adoptions = () => {
  const [animals, setAnimals] = React.useState([]);

  const [filteredAnimals, setFilteredAnimals] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const animals = await apiClient.getAnimals();
      setAnimals(animals);
      setFilteredAnimals(animals);
    })();
  }, []);

  const showAnimals = (status) => {
    switch (status) {
      case "adopt":
        setFilteredAnimals(animals.filter((animal) => !animal.foster));
        break;
      case "foster":
        setFilteredAnimals(animals.filter((animal) => animal.foster));
        break;
      default:
        setFilteredAnimals(animals);
    }
  };

  return (
    <div>
      <Container>
        <h1>Meet our adoptable rescues and fosters animals!</h1>
        <VolunteerButton {...{ showAnimals }} />
        <AnimalList animals={filteredAnimals} />
        <AdoptButton />
      </Container>
    </div>
  );
};

export default Adoptions;

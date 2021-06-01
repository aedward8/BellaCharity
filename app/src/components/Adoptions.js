import * as React from "react";

import Container from "react-bootstrap/Container";

import * as apiClient from "../apiClient";

import AdoptButton from "./AdoptButton";
import AnimalList from "./AnimalList";
import VolunteerButton from "./VolunteerButton";

const Adoptions = () => {
  const [animals, setAnimals] = React.useState([]);

  const [filteredAnimals, setFilteredAnimals] = React.useState([]);

  const loadAnimals = async () => {
    setAnimals(await apiClient.getAnimals());
  };

  const onFilter = (isFoster) => {
    if (isFoster === false) {
      setFilteredAnimals(
        animals.filter((animal) => {
          return animal.foster === false;
        }),
      );
    } else if (isFoster === true) {
      setFilteredAnimals(
        animals.filter((animal) => {
          return animal.foster === true;
        }),
      );
    } else {
      setFilteredAnimals(animals);
    }
  };

  React.useEffect(() => {
    loadAnimals();
  }, []);

  React.useEffect(() => {
    setFilteredAnimals(animals);
  }, [animals]);

  return (
    <div>
      <Container>
        <h1>Meet our adoptable rescues and fosters animals!</h1>
        <VolunteerButton onFilter={onFilter} />
        <AnimalList animals={filteredAnimals} />
        <AdoptButton />
      </Container>
    </div>
  );
};

export default Adoptions;

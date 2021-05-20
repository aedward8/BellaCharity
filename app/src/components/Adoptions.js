import * as React from "react";

import * as apiClient from "../apiClient";

import AnimalList from "./AnimalList";
import VolunteerButton from "./VolunteerButton";

const Adoptions = () => {
  const [animals, setAnimals] = React.useState([]);

  const loadAnimals = async () => setAnimals(await apiClient.getAnimals());

  React.useEffect(() => {
    loadAnimals();
  }, []);

  console.log(animals);

  return (
    <div>
      <h1>This is Adoption Page</h1>
      <AnimalList animals={animals} />
      <VolunteerButton />
    </div>
  );
};

export default Adoptions;

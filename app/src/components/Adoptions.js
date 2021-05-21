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
      <h1>Meet our adoptable rescues and fosters animals!</h1>
      <AnimalList animals={animals} />
      <VolunteerButton />
    </div>
  );
};

export default Adoptions;

import * as React from "react";

import * as apiClient from "../apiClient";

import AnimalList from "./AnimalList";
import VolunteerButton from "./VolunteerButton";

const Adoptions = () => {
  const [animals, setAnimals] = React.useState([]);

  const loadAnimals = async () => setAnimals(await apiClient.getAnimals());
  let isFoster;
  const onFilter = (animals, isFoster) => {
    let animalsList = [];
    for (let i = 0; i < animals.length; i++) {
      // if (isFoster === true) {
      // }
    }
    return animalsList;
    //adopt ,foster ==false

    //foster , foster === true
  };

  React.useEffect(() => {
    loadAnimals();
  }, []);

  console.log(animals);

  return (
    <div>
      <h1>Meet our adoptable rescues and fosters animals!</h1>
      <AnimalList animals={animals} />
      <VolunteerButton onFilter={onFilter(animals, isFoster)} />
    </div>
  );
};

export default Adoptions;

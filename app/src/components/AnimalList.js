import * as React from "react";

import AnimalCard from "./AnimalCard";

const AnimalList = ({ animals }) => {
  let cards = animals.map((animal) => (
    <AnimalCard key={animal.id} {...animal} />
  ));

  return (
    <>
      <h1>Cards</h1>
      <div
        style={{
          overflowY: "scroll",
          maxHeight: "300px",
          borderStyle: "solid",
          borderColor: "white",
        }}
      >
        {cards}
      </div>
    </>
  );
};

export default AnimalList;

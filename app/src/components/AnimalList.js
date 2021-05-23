import * as React from "react";

import AnimalCard from "./AnimalCard";

const AnimalList = ({ animals }) => {
  let cards = animals.map((animal) => (
    <AnimalCard key={animal.id} {...animal} />
  ));

  let display;
  if (!cards) {
    display = <h1>Your new animal pals are loading!</h1>;
  } else {
    display = cards;
  }

  return (
    <>
      <div
        style={{
          overflowY: "scroll",
          maxHeight: "50vh",
          borderStyle: "solid",
          borderColor: "black",
        }}
      >
        {display}
      </div>
    </>
  );
};

export default AnimalList;

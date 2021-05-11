import * as React from "react";

import images from "../photos";

const AnimalList = ({ animals }) => {
  return (
    <ul>
      {animals.map(
        ({
          id,
          name,
          age,
          weight,
          gender,
          breed,
          blurb,
          foster,
          picture_link,
        }) => (
          <li key={id}>
            {name}
            {age}
            {weight}
            {gender}
            {breed}
            {foster},
            <img src={images[picture_link]} alt="test" />
            <p>{blurb}</p>
          </li>
        ),
      )}
    </ul>
  );
};

export default AnimalList;

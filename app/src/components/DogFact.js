import * as React from "react";

import * as apiClient from "../apiClient";

const DogFact = () => {
  const [fact, setFact] = React.useState();

  const loadFact = async () => setFact(await apiClient.getFact());

  React.useEffect(() => {
    loadFact();
  }, []);

  console.log(fact);

  return (
    <div>
      <h1>This is Dog Fact</h1>
      {/* {fact} */}
    </div>
  );
};

export default DogFact;

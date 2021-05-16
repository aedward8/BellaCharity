import * as React from "react";

import Image from "react-bootstrap/Image";
const Home = () => {
  React.useEffect(() => {}, []);

  return (
    <div>
      This is Home
      <h1>Welcome to Bella Charity!</h1>
      <div className="mission">
        <Image src="holder.js/100px250" fluid />
        <h4>
          The Bella Charity’s mission is to save and improve lives wherever
          possible. Ultimately, The Bella Charity aims to create a
          well-functioning sanctuary where animals can be rescued, sheltered,
          and properly cared for. In addition to this long-term goal, The Bella
          Charity is actively pursuing projects to help animals. A few of the
          projects include: Create a Mobile Application to easily connect
          adoptable and foster-able pets to people. A link to download from the
          App store will be available soon. Create a network of foster homes,
          veterinarians, and animal care workers to house and aid animals in
          need.
        </h4>
      </div>
    </div>
  );
};

export default Home;

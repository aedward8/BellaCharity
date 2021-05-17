import * as React from "react";

import Image from "react-bootstrap/Image";

import MainPhoto from "../photos/bella-main.jpg";
import Foster from "../photos/khaleesi.jpeg";
import Adopt from "../photos/osito.JPG";
import Resident from "../photos/resident-bella.png";

import FrontPageCard from "./FrontPageCard";
import HomeButtons from "./HomeButtons";

const Home = () => {
  React.useEffect(() => {}, []);

  return (
    <div>
      <h1>Welcome to Bella Charity!</h1>
      <div className="mission">
        <Image src={MainPhoto} fluid />
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
      <div className="cards">
        <FrontPageCard
          name="Resident Animals"
          desc="Say hi to some of our forever animals that we couldn't bear to say goodbye to!"
          img={Resident}
        />
        <FrontPageCard
          name="Adopt Me"
          desc="View all the furbabies that are available to be adopted into your family"
          img={Adopt}
        />
        <FrontPageCard
          name="Foster Me"
          desc="Some of our rescues need practice being inside a home and socializing with humans before they are ready for adoption"
          img={Foster}
        />
      </div>
      <h1>Get Involved</h1>
      <HomeButtons />
    </div>
  );
};

export default Home;

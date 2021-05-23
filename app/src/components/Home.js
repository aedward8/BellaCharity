import * as React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import MainPhoto from "../photos/bella-main.jpg";
import Foster from "../photos/khaleesi.jpeg";
import Adopt from "../photos/osito.JPG";
import Resident from "../photos/resident-bella.png";

import DogFact from "./DogFact";
import FrontPageCard from "./FrontPageCard";
import HomeButtons from "./HomeButtons";

const Home = () => {
  return (
    <div>
      <Container>
        <h1>Welcome to Bella Charity!</h1>
      </Container>

      <Container style={{ marginBottom: "2rem" }}>
        <Row>
          <Col xs={12} md={6} style={{ marginBottom: "2rem" }}>
            <Image src={MainPhoto} alt="Pitbull named Bella" fluid />
          </Col>
          <Col xs={12} md={6}>
            <h4 style={{ marginLeft: "1rem" }}>
              The Bella Charity’s mission is to save and improve lives wherever
              possible. Ultimately, The Bella Charity aims to create a
              well-functioning sanctuary where animals can be rescued,
              sheltered, and properly cared for. In addition to this long-term
              goal, The Bella Charity is actively pursuing projects to help
              animals. A few of the projects include: Create a Mobile
              Application to easily connect adoptable and foster-able pets to
              people. A link to download from the App store will be available
              soon. Create a network of foster homes, veterinarians, and animal
              care workers to house and aid animals in need.
            </h4>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginBottom: "2rem" }}>
        <Row>
          <Col xs={12} md={4} style={{ marginBottom: "2rem" }}>
            <FrontPageCard
              name="Resident Animals"
              desc="Say hi to some of our forever animals that we couldn't bear to say goodbye to"
              img={Resident}
              style={{ marginRight: "1rem" }}
              title="Pitbull Bella sitting on Grandpa's lap"
            />
          </Col>
          <Col xs={12} md={4} style={{ marginBottom: "2rem" }}>
            <FrontPageCard
              name="Adopt Me"
              desc="View all the furbabies that are available to be adopted into your family"
              img={Adopt}
              style={{ marginRight: "1rem", marginBottom: "1rem" }}
              link={"/adopt"}
              title="Osito the pomeranian dog in desert background"
            />
          </Col>
          <Col xs={12} md={4} style={{ marginBottom: "2rem" }}>
            <FrontPageCard
              name="Foster Me"
              desc="Foster our rescues and help them prepare to be adopted and ready to join a family"
              img={Foster}
              style={{ marginRight: "2rem" }}
              link={"/adopt"}
              title="Khaleesi the Calico cat with treebackground"
            />
          </Col>
        </Row>
      </Container>
      <Container style={{ marginBottom: "2rem" }}>
        <h1>Did You Know?</h1>
        <DogFact />
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <center>
              <h1>Get Involved</h1>
              <HomeButtons />
            </center>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

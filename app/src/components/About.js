import * as React from "react";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import bellabeach from "../photos/bellabeach.jpg";

const About = () => {
  return (
    <div>
      <Container>
        <center>
          <Row>
            <Image src={bellabeach} alt="Pitbull named Bella" fluid />
          </Row>
          <h1>Our Mission</h1>
          <h3>
            Our Mission The Bella Charity’s mission is to save and improve lives
            wherever possible. Ultimately, The Bella Charity aims to create a
            well-functioning sanctuary where animals can be rescued, sheltered,
            and properly cared for.{" "}
          </h3>
          <h5>
            In addition to this long-term goal, The Bella Charity is actively
            pursuing projects to help animals. A few of the projects include:
            <ol>
              <li>
                Create a Mobile Application to easily connect adoptable and
                foster-able pets to people. A link to download from the App
                store will be available soon.
              </li>
              <li>
                Create a network of foster homes, veterinarians, and animal care
                workers to house and aid animals in need. Click the Volunteer
                link under “Quick Links” to fill out a volunteer or foster-home
                application
              </li>
            </ol>
          </h5>
        </center>
      </Container>
    </div>
  );
};

export default About;

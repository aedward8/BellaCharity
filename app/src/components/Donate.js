import * as React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import DonationCards from "./DonationCards";

// import General from "../photos/resident-bella.png";

const Donate = () => {
  return (
    <>
      <h1>You Can Donate to the Bella Charity Today</h1>
      <h3>
        Please make a general donation or choose the fund into which you would
        like to donate. Any amount is welcomed and is greatly appreciated.
      </h3>
      <Container style={{ marginBottom: "2rem" }}>
        <Row>
          <Col>
            <DonationCards
              name="General Donation"
              desc="A general donation will go to the General Bella Charity Fund. This fund is used for the necessary operating expenses such as licenses, permits, website costs. This fund may also be used for immediate or emergency use as needed."
            />
          </Col>
          <Col>
            <DonationCards
              name="Pet Supplies Donation"
              desc="A donation to the pets supply fund will go directly to items and services required for pets. This may include but is not limited to food, water, medication, veterinary bills, toys, crates, leashes, blankets, and grooming supplies."
            />
          </Col>
          <Col>
            <DonationCards
              name="Sanctuary Donation "
              desc="This fund will be used for the future Bella Charity property. Our long-term goal is to operate a rescue where we can bring in and care for animals."
            />
          </Col>
        </Row>
      </Container>
      {/* PayPal Donate Button */}
      <Container>
        <center>
          <h3>Donate with PayPal</h3>
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="632J35GCSK2CL"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </center>
      </Container>
      {/* <Container>
        <script
          src="https://donorbox.org/widget.js"
          paypalExpress="false"
        ></script>
        <iframe
          title="donorBox"
          allowpaymentrequest=""
          frameborder="0"
          height="900px"
          name="donorbox"
          scrolling="no"
          seamless="seamless"
          src="https://donorbox.org/embed/the-bella-charity-fund"
          //   style="max-width: 500px; min-width: 250px; max-height:none!important"
          width="100%"
        ></iframe>
      </Container> */}
    </>
  );
};

export default Donate;

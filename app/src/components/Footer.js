import React from "react";

import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <h5>
          <LocationOnIcon /> San Francisco Bay Area | <EmailIcon />{" "}
          info@bellacharity.org
        </h5>
        <p>
          The Bella Charity is registered as a 501(c)(3) non-profit
          organization. Contributions to The Bella Charity are tax-deductible to
          the extent permitted by law.
        </p>

        <h5 className="text-dark">
          &copy; {new Date().getFullYear()} Bella Charity
        </h5>
      </div>
    </MDBFooter>
  );
}

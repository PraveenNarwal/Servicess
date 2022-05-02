import React, { useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const Home = () => {
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "1000px",
        alignContent: "center",
      }}
    >
      <MDBInput
        label="Email"
        type="text"
        name="email"
        required
        invalid
        validation="Please provide your email"
      />
      <h5>Home page</h5>
    </div>
  );
};

export default Home;

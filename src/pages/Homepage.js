import React from "react";
import About from "../components/HomePage/About";
import UserReview from "../components/HomePage/UserReview";
import Services from "../components/HomePage/Services";

function Homepage() {
  return (
    <>
      <About />
      <Services />
      <UserReview />
    </>
  );
}

export default Homepage;

import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

//
import styled from "styled-components";
//
const Container = styled.div``;

//
//

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <h1>hello</h1>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;

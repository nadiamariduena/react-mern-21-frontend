import React from "react";
import styled from "styled-components";

//
//

const Container = styled.div`
  height: 30px;
  background-color: #121212;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 500;
  font-family: "Poppins-light";
  color: rgb(248, 248, 248);
`;

//

const Announcement = () => {
  return <Container>Super Deal! Freee Shipping on Orders Over $50</Container>;
};

export default Announcement;

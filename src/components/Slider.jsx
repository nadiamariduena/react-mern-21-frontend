import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import styled from "styled-components";

//
//

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  //
  //
  position: relative;
`;
//
// Arrows
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  //
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  //
  // props direction=
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  //
  margin: auto;
 
  //
`;

//
//
//

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;

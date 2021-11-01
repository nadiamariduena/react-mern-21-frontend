import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import styled from "styled-components";
//
import { sliderItems } from "../data";
//
import img1 from "../img-store/oladimeji-odunsi-2.jpg";
//

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: #ff0; */
  //
  //
  position: relative;
`;
//
// Arrows
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  /* background-color: #fff7f7; */
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
  opacity: 0.5;
  cursor: pointer;
  //
  z-index: 2;
`;

//
// ----------------------- slide --------------
const Wrapper = styled.div`
  height: 100%;
  /*  */
  display: flex;
  //
  transform: translateX(0vw);
  //100 will move it to the right
  //-100 will move the slider to the left
`;
//
//

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  /*  */
  display: flex;
  align-items: center;
  /*  */
  /* background-image: url("../img-store/oladimeji-odunsi-2.jpg");
  background-size: cover; */
  //
  //
  //color PROPS
  background-color: #${(props) => props.bg};
`;
//blocl img 1   ---------------
const ImgContainer = styled.div`
  height: 100%;
  /*  */
  flex: 1;

  /* background-color: #fde9d7; */
`;
const Image = styled.img`
  /* height:80%;  */
  width: 84%;
  min-height: auto;
  object-fit: cover;
`;

//
// block text 2  ---------------
const InfoContainer = styled.div`
  /* background-color: #ff0; */
  flex: 1;
  padding: 50px 50px 50px 20px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
//
const Title = styled.h1`
  font-size: 70px;
  font-family: "Poppins-medium";
  color: #121212;
`;
const Desc = styled.p`
  margin: 50px 10px 50px 0px;
  font-size: 1.3em;
  font-weight: 500;
  font-family: "Poppins-light";
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 1.3em;
  background-color: transparent;
  border: 1px solid #000;
`;
//
//
//
// ----------------------- slide --------------

const Slider = () => {
  //
  const [slideIndex, setSlideIndex] = useState(0);
  //

  const handleClick = (direction) => {};

  //
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper>
        {sliderItems.map((items) => (
          <Slide bg={items.bg}>
            <ImgContainer>
              <Image src={items.img} />
            </ImgContainer>

            <InfoContainer>
              <Title>{items.title}</Title>
              <Desc>
               {items.desc}
              </Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}

        {/*  */}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;

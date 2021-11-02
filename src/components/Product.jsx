import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

//
//
const Container = styled.div`
  flex: 1;
  margin: 8px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  //you dont really need the color
  background-color: #f3f0ec;
  border: 1px solid #000;
  //related to info
  position: relative;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #e0edf0;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

//
//
// This is going to be a mask on top of the products
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #aaaaaa;
  z-index: 3;
  //to center the icons
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  //
  display: flex;
  justify-content: center;
  align-items: center;
  //
  margin: 7px;
  //
  //hover
  &:hover {
    background-color: #ffcda3;
    transform: scale(1.1);

  }
`;

//
//

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />

      <Info>
        {/*  */}
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        {/*  */}
        <Icon>
          <SearchOutlined />
        </Icon>
        {/*  */}
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

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
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* add this to see where you are at */
  border: 1px solid #000;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
const Image = styled.img`
  height: 75%;
`;
const Info = styled.div``;
const Icon = styled.div``;

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

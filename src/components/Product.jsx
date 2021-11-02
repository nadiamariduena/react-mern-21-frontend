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
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
const Image = styled.img``;
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

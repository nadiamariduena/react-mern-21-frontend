import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import { mobile, mobileM, tablet, laptop } from "../responsive";
import CategoryItem from "./CategoryItem";

//
//
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
  ${mobileM({ padding: "0px", flexDirection: "column" })}
  ${tablet({ padding: "20px", flexDirection: "column" })}
  ${laptop({ padding: "20px", flexDirection: "column" })}
`;
//
//

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;

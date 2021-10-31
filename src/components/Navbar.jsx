import React from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import styled from "styled-components";

//
//

const Container = styled.div`
  padding: 10px 0;
  min-height: 1vh;
  background-color: rgb(248, 248, 248);
 
`;

//
const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  //   will divide them in 3 parts
  justify-content: space-between;
`;
// ----------------------

const Left = styled.div`
  // if you consider the wrapper 100%
  flex: 1; //with this you dont have to add 33.33% to each box
  display: flex;
  align-items: center;
  flex-direction: row;
  //
  // border: 0.5px solid green;
`;
//
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
//
const SearchContainer = styled.div`
  border: 0.5px solid #dddddd;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
//
// ----------------------
//
//
//
const Center = styled.div`
  flex: 2;

  text-align: center;
  // border: 1px solid #000;
`;
//
//LOGO
const Logo = styled.h1`
  font-weight: bold;
  font-family: "Syncopate-Bold";
  letter-spacing: 15px;
`;
//
//
//
//
//
// ----------------------
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  // border: 1px solid #000;
`;
//
//
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 0 15px 0 10px;
`;

//
//

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

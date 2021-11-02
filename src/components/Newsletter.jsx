import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";

//
//
const Container = styled.div`
  /* margin-top: 100px;  between the newsletter and the products*/
  height: 60vh;
  /* border-top: 1px solid #000; */
  background-color: #e7e5db;
  //
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //
`;
const Title = styled.div`
  font-size: 70px;
  margin-bottom: 20px;
  font-weight: 600;
  font-family: "Raleway-SemiBold", sans-serif;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
//
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  //flex: 1; will change the size of the button
  flex: 1;
  border: none;
  background-color: white;
  color: black;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>

      <Desc>Get timely updates from your favorite products.</Desc>

      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

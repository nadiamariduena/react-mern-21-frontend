import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";

//
//
const Container = styled.div``;
const Title = styled.div``;
const Description = styled.div``;
//
const InputContainer = styled.div``;
const Input = styled.div``;
const Button = styled.button``;

const Newsletter = () => {
  return (
    <Container>
      <Title></Title>

      <Description></Description>

      <InputContainer>
        <Input />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

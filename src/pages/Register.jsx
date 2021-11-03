import React from "react";
import styled from "styled-components";
//
//

const Container = styled.div``;

//
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
 
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

//
//
const Register = () => {
  return (

    <Container>
    <Wrapper>
      <Title>CREATE AN ACCOUNT</Title>
 
    </Wrapper>
  </Container>
  )
};

export default Register;

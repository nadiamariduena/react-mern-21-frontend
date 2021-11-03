import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";

//
//

const Container = styled.div`
  display: flex;
`;
//
//
//
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
//
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
//
//
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  /* background-color: white; */
  display: flex;

  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

//
//
//
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          {/*  */}
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          {/*  */}
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          {/*  */}
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
    </Container>
  );
};

export default Footer;

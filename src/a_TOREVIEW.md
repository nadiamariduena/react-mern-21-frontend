### START adding the first components

- I will copy and paste the code from the original because most of it is just repetitive stuff, the only thing i will care to test is the statements, as i wanted to have more options for the buttons

<br>

- Here below i added a prop color inside the 2 **TopButton**, the goal was to have different hover colors for each button but even if the 2 versions worked i dont feel like it s all, i feel there s a way to make it shorter, so i will make a research at the end of the project.

<br>

> border: 2px solid ${(props) => props.type === "filled" && props.color};

<br>

## no.1 version

```javascript
const TopButton = styled.button`
  width: 18%;
  padding: 10px 25px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  transition: all 1s ease-in-out;
  //if props is equal to 'filled' then border none, in this case
  /* i want color in the border (props.color) just to test */
  border: 2px solid ${(props) => props.type === "filled" && props.color};
  //
  //
  //if props is equal to filled ? if its, then it will be black,
  /* if it s not filled it will be  transparent
      <TopButton type="transparento" bg="#ffffff">
      CONTINUE SHOPPING
    </TopButton>
  */
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  //
  color: ${(props) => props.type === "filled" && "white"};
  //
  //
  //
  //

  &:hover {
    //if props is equal to 'filled' on HOVER ,props.color(check the props on filled button)
    border: 2px solid ${(props) => props.type === "filled" && props.color};

    color: #121212;
    /* border: 1px solid #121212; */
    background-color: ${(props) =>
      props.type === "transparento" ? props.bg : "transparent"};
  }

  //
`;

//
//
//
<Wrapper>
  <Title>YOUR BAG</Title>
  <Top>
    <TopButton type="transparento" bg="#ffffff">
      CONTINUE SHOPPING
    </TopButton>
    <TopTexts>
      <TopText>Shopping Bag(2)</TopText>
      <TopText>Your Wishlist (0)</TopText>
    </TopTexts>
    <TopButton type="filled" color="#121212">
      CHECKOUT NOW
    </TopButton>
  </Top>
</Wrapper>;
```

<br>
<br>

## no.2 version

> border: ${((props) => props.type === "filled" && "0.5px", "solid")};

<br>

```javascript
const TopButton = styled.button`
  padding: 10px 25px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  transition: all 1s ease-in-out;
  //if props is equal to 'filled' then border none
  border: ${((props) => props.type === "filled" && "0.5px", "solid")};
  //
  //
  //if props is equal to filled ? its then ,it will be black,
  /* if it s not filled it will be  transparent*/
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  //
  color: ${(props) => props.type === "filled" && "white"};
  //
  //
  //

  //
  //
  &:hover {
    padding: 10px 25px;
    //if props is equal to 'filled' on HOVER ,props.color(check the props on filled button)
    border: ${((props) => props.type === "filled" && props.color,
    "10px",
    "solid")};
    color: #121212;
    /*   */
    background-color: ${(props) =>
      props.type === "transparento" ? props.bg : "transparent"};
  }

  //
`;
```

[<img src="/src/img/if_statements_buttons_options.gif" />]()

<br>

### Original

```javascript
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
//
//
//
<Top>
  <TopButton>CONTINUE SHOPPING</TopButton>
  <TopTexts>
    <TopText>Shopping Bag(2)</TopText>
    <TopText>Your Wishlist (0)</TopText>
  </TopTexts>
  <TopButton type="filled">CHECKOUT NOW</TopButton>
</Top>;
```

<br>
<br>

### Think about the design options

[<img src="/src/img/styles_checkout-default6.gif" />]()

```javascript
import React from "react";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

//
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
//
// IMage
import { popularProducts } from "../data";
//
const Container = styled.div``;
//
const Wrapper = styled.div`
  padding: 20px 20px 70px 20px;
  margin: 0px 0 70px 0;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 10px 0 30px 0;
`;

const TopButton = styled.button`
  width: 18%;
  padding: 10px 25px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  transition: all 1s ease-in-out;
  //if props is equal to 'filled' then border none, in this case
  /* i want color in the border (props.color) just to test */
  border: 2px solid ${(props) => props.type === "filled" && props.color};
  //
  //
  //if props is equal to filled ? if its, then it will be black,
  /* if it s not filled it will be  transparent*/
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  //
  color: ${(props) => props.type === "filled" && "white"};
  //
  //
  //
  //

  &:hover {
    //if props is equal to 'filled' on HOVER ,props.color(check the props on filled button)
    border: 2px solid ${(props) => props.type === "filled" && props.color};

    color: #121212;
    /* border: 1px solid #121212; */
    background-color: ${(props) =>
      props.type === "transparento" ? props.bg : "transparent"};
  }

  //
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
//
//
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ddd8c74c;
  padding: 50px 0px;
`;
//
//
//
const Info = styled.div`
  flex: 2; //the size of the block
`;
//
//
//
//
//
//
// PRODUCT / PRODUCT-DETAIL  /IMG
//
//
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ImgContainer = styled.div`
  width: 200px;
`;
//
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
//
//
//
//
//
// DETAILS / PRDUCT NAME, ID, COLOR, SIZE
//
//
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

//
//
//
//
//
//
//
// PRICE DETAIL / PRODUCT AMOUNT, PRICE
//
//

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

//
// the line that will separate the products
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
//
//
//
//
//
//
// SUMMARY
//
const Summary = styled.div`
  flex: 1; //the size of the block
  border: 0.5px dotted lightgray;
  border-radius: 10px;
  padding: 20px;
  min-height: 50vh;
  text-align: right;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  margin: 10px 10px 0 0;
  width: 50%;
  padding: 10px;
  color: #121212;
  border: 2px solid #121212;
  background-color: transparent;

  cursor: pointer;
  font-weight: 600;
  transition: all 1s ease-in-out;
  &:hover {
    border-radius: 50px;
    border: 2px solid #121212;
    color: rgb(248, 248, 248);
    background-color: #121212;
  }
`;
//
//
//
//

//
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      {/*
    
    */}
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton type="transparento" bg="#ffffff">
            CONTINUE SHOPPING
          </TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled" color="#121212">
            CHECKOUT NOW
          </TopButton>
        </Top>
        {/* 


       */}

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <ImgContainer>
                  {popularProducts
                    .filter((item) => item.title === "flower6")
                    .map((item) => (
                      <Image src={item.img} />
                    ))}
                </ImgContainer>{" "}
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              {/*  */}
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            {/*
            
            
            */}
            <Hr />
            {/* 
             
             
             */}

            <Product>
              <ProductDetail>
                <ImgContainer>
                  {popularProducts
                    .filter((item) => item.title === "flower2")
                    .map((item) => (
                      <Image src={item.img} />
                    ))}
                </ImgContainer>{" "}
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              {/*  */}
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          {/* 
        
        */}
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>

          {/*  */}
        </Bottom>
      </Wrapper>
      {/* 
    
    */}
      <Footer />
    </Container>
  );
};

export default Cart;
```

<br>
<br>
<br>
<hr>
<br>

# 🍊

## BACKGROUND IMG THROUGH PROPS

 <br>

```javascript
 ${mobileM({
    backgroundImage: (props) => `url(${props.small})`,
```

### After hours of searching for an answer I could finally visualize the BackgroundImage through props, thanks to this:

#### [Material-UI : Pass props to useStyles when using Array.map()](https://stackoverflow.com/questions/59855491/material-ui-pass-props-to-usestyles-when-using-array-map)

<br>

```javascript
/*


                    SLIDE BEFORE CHANGES



*/
//
const Slide = styled.div`
  width: 100vw;
  /* height:100vh; */
  height: calc(100vh - 12vh);
  /*  */
  display: flex;
  align-items: center;
  /*  */
  /* background-image: url("../img-store/oladimeji-odunsi-2.jpg");
  background-size: cover; */
  //
  //creme color fcf1e
  //color PROPS
  background-color: #${(props) => props.bg};
  color: #${(props) => props.fColor};
`;
/*


                    AFTER CHANGES



*/

const Slide = styled.div`
  width: 100vw;
  height:100vh;
  /* height: calc(100vh - 12vh); */

  /*  */
  display: flex;
  align-items: center;
  background-image: none;
  //color PROPS
  background-color: #${(props) => props.bg};
  color: #${(props) => props.fColor};
  //opacity for images background in smaller devices

  ${mobile({
    backgroundImage: (props) => `url(${props.small})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "transparent",
    backgroundPosition: "center",
  })}
  ${mobileM({
    backgroundImage: (props) => `url(${props.small})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "transparent",
    backgroundPosition: "center",
    color: (props) => `#${props.mobileFColor}`,
  })}
`;
//
//
//
//        JSX  BEFORE
<Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide bg={items.bg} fColor={items.fColor} key={items.id}>
            <ImgContainer>
              <Image src={items.img} />
            </ImgContainer>

            <InfoContainer>
              <Title>{items.title}</Title>
              <Desc>{items.desc}</Desc>
              <Link to={items.component}>
                <Button fColor={items.fColor}>{items.button}</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
//
//
//
//        JSX  AFTER

 <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide
            bg={items.bg}
            fColor={items.fColor}
            mobileFColor={items.mobileFColor}
            key={items.id}
            small={items.img}
          >
            <ImgContainer>
              <Image src={items.img} />
            </ImgContainer>

            <InfoContainer>
              <Title
                fColor={items.fColor}
                mobileFColor={items.mobileFColor}
                borderButton={items.borderButton}
              >
                {items.title}
              </Title>
              <Desc mobileFColor={items.mobileFColor}>{items.desc}</Desc>
              <Link to={items.component}>
                <Button
                  fColor={items.fColor}
                  borderButton={items.borderButton}
                  mobileFColor={items.mobileFColor}
                >
                  {items.button}
                </Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>


```

[<img src="/src/img/mobile_slider_half_done1.gif" />]()

#### Using the same technique i added more colors options to the mobile version of the slider, as even if the colors works nicely in Desktop(since i have yellow and clear colors) it didn't work so well in mobile

<br>

#### ⚠️

- i will clean the colors(data.js) a bi, when i will finish to correct most of the issues.

<br>
<br>

### So here is the code before and the whole code after the changes.

```javascript
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { mobile, mobileM, tablet, laptop } from "../responsive";
import styled from "styled-components";
//
import { sliderItems } from "../data";
//
// import img1 from "../img-store/oladimeji-odunsi-2.jpg";
//

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* height: calc(100vh - 12.2vh); */
  /* height: calc(100vh - 43px); */
  display: flex;
  //background: #f09819; /* fallback for old browsers */
  //background: -webkit-linear-gradient(
  /*  to right,
    #edde5d,
    #f09819
  );  Chrome 10-25, Safari 5.1-6 */
  /*  background: linear-gradient(
    to right,
    #edde5d,
    #f09819
  );  W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  //
  //mobileM
  position: relative;
  ${mobile({ display: "none" })}
  ${mobileM({ display: "none" })}
  ${tablet({ display: "none" })}
  ${laptop({ display: "none" })}
`;
//
// Arrows
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
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
  opacity: 0.4;
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
  transition: all 1.2s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  //100 will move it to the right
  //-100 will move the slider to the left
`;
//
//

const Slide = styled.div`
  width: 100vw;
  /* height:100vh; */
  height: calc(100vh - 12vh);
  /*  */
  display: flex;
  align-items: center;
  /*  */
  /* background-image: url("../img-store/oladimeji-odunsi-2.jpg");
  background-size: cover; */
  //
  //creme color fcf1e
  //color PROPS
  background-color: #${(props) => props.bg};
  color: #${(props) => props.fColor};
`;
//blocl img 1   ---------------
const ImgContainer = styled.div`
  height: 100%;
  /*  */
  flex: 1;
  overflow: hidden;
  /* background-color: #fde9d7; */
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1;
`;

//
// block text 2  ---------------
const InfoContainer = styled.div`
  /* background-color: #ff0; */
  flex: 1;
  padding: 50px 50px 50px 30px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
//
const Title = styled.h1`
  font-size: 70px;
  line-height: 68px;
  font-family: "Poppins-medium";
  /* color: #121212; */
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
  text-transform: uppercase;
  border: 1px solid #${(props) => props.fColor};
  color: #${(props) => props.fColor};
  cursor: pointer;
`;
//
//
//
// ----------------------- slide --------------

const Slider = () => {
  //
  const [slideIndex, setSlideIndex] = useState(0);
  //

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  //
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide bg={items.bg} fColor={items.fColor} key={items.id}>
            <ImgContainer>
              <Image src={items.img} />
            </ImgContainer>

            <InfoContainer>
              <Title>{items.title}</Title>
              <Desc>{items.desc}</Desc>
              <Link to={items.component}>
                <Button fColor={items.fColor}>{items.button}</Button>
              </Link>
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
```

<br>
<br>

### The after

```javascript
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { mobile, mobileM } from "../responsive";
import styled from "styled-components";
//
import { sliderItems } from "../data";
//

//

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`;
//
// Arrows
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  //
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  user-select: none;
  // props direction=
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  //
  margin: auto;
  opacity: 0.4;
  cursor: pointer;
  //
  z-index: 2;
  //
  //
  ${mobile({ userSelect: "none" })}
`;

//
// ----------------------- slide --------------
const Wrapper = styled.div`
  /* position: relative;
	overflow: hidden; */
  height: 100%;
  /*  */
  display: flex;
  //
  transition: all 1.2s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  //100 will move it to the right
  //-100 will move the slider to the left
  ${mobile({ position: "relative" })}
`;
//
//

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  /* height: calc(100vh - 12vh); */

  /*  */
  display: flex;
  align-items: center;
  background-image: none;
  //color PROPS
  background-color: #${(props) => props.bg};
  color: #${(props) => props.fColor};
  //opacity for images background in smaller devices

  ${mobile({
    backgroundImage: (props) => `url(${props.small})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "transparent",
    backgroundPosition: "center",
  })}
  ${mobileM({
    backgroundImage: (props) => `url(${props.small})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "transparent",
    backgroundPosition: "center",
    color: (props) => `#${props.mobileFColor}`,
  })}
`;

/*
small={items.img}
mobilefColor

<ImageSm type='imgSM

   style={{
              backgroundImage: `url(${items.img})`,
            }}


*/
//blocl img 1   ---------------
const ImgContainer = styled.div`
  height: 100%;
  /*  */
  flex: 1;
  overflow: hidden;
  /* WE DONT WANT THE IMG TO SHOW IN SMALL DEVICES,
   we can just leave the text and add an 
   IMG background to the slider, 
   instead of having the image by the side,
   so remove the colors or give them an opacity of 
   0.3*/
  ${mobile({ display: "none" })}
  ${mobileM({ display: "none" })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1;
`;
/*






*/
//
// block text 2  ---------------
const InfoContainer = styled.div`
  /* background-color: #ff0; z-index: 2; */
  flex: 1;
  padding: 50px 50px 50px 30px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  ${mobile({ zIndex: "2" })}
`;
//mobileFColor
const Title = styled.h1`
  font-size: 70px;
  line-height: 68px;
  font-family: "Poppins-medium";

  ${mobile({
    fontSize: "clamp(3.1rem, 0.7153rem + 1.6368vw, 1.5rem)",
    lineHeight: "50px",
    color: (props) => `#${props.borderButton}`,
  })}
  ${mobileM({
    fontSize: "clamp(3.1rem, 0.7153rem + 1.6368vw, 1.5rem)",
    lineHeight: "50px",
  })}
`;
const Desc = styled.p`
  margin: 50px 10px 50px 0px;
  font-size: 1.3em;
  font-weight: 500;
  font-family: "Poppins-light";
  letter-spacing: 3px;
  ${mobile({
    color: (props) => `#${props.mobileFColor}`,
  })}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 1.3em;
  background-color: transparent;
  text-transform: uppercase;
  border: 1px solid #${(props) => props.fColor};
  color: #${(props) => props.fColor};
  cursor: pointer;
  ${mobile({
    color: (props) => `#${props.mobileFColor}`,
    border: (props) => `0.5px solid #${props.borderButton}`,
  })}
  ${mobileM({
    color: (props) => `#${props.mobileFColor}`,
    border: (props) => `0.5px solid #${props.borderButton}`,
  })}
`;
// color: (props) => `#${props.mobileFColor}`
//
//
// ----------------------- slide --------------

const Slider = () => {
  //
  const [slideIndex, setSlideIndex] = useState(0);
  //

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  //
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide
            bg={items.bg}
            fColor={items.fColor}
            mobileFColor={items.mobileFColor}
            key={items.id}
            small={items.img}
          >
            <ImgContainer>
              <Image src={items.img} />
            </ImgContainer>

            <InfoContainer>
              <Title
                fColor={items.fColor}
                mobileFColor={items.mobileFColor}
                borderButton={items.borderButton}
              >
                {items.title}
              </Title>
              <Desc mobileFColor={items.mobileFColor}>{items.desc}</Desc>
              <Link to={items.component}>
                <Button
                  fColor={items.fColor}
                  borderButton={items.borderButton}
                  mobileFColor={items.mobileFColor}
                >
                  {items.button}
                </Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}

        {/*  */}
      </Wrapper>
      {/* 
https://www.w3schools.com/js/js_htmldom_events.asp

*/}
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
```

<br>
<br>
<br>
<hr>
<br>

# SWIMMING SLIDER AND PAGE

#### From the moment i started to handle the responsiveness of the project i knew the slider will be difficult (for me a Beginner), so first i wanted to take care of things i considered not so problematic(but they were ;)

<br>

- So before i had my break i decided to analyze one more time this issue, (just thinking), so **What if i dont handle the swimming issue from the slider and not even the slider whole file** but from the very TOP.. the **App.js**.

[<img src="/src/img/pensive_columbo.gif" />]()
<br>

- <u> **what if i add a 'div' to 'nest' all the components** </u> and add it a display:flex and flex-wrap:wrap, just to see how it behaves?

<br>

### Here is the result with the flex

- It made it worse

```scss
body {
  overflow-x: hidden;
  background-color: #edebe4;

  // ------------
  // ------------
  .page {
    display: flex;
    flex-wrap: wrap;
    // overflow-x: hidden;
  }

  // ------------
}
```

[<img src="/src/img/swimming_slider_the-issue1.gif" />]()

<br>
<br>

### I added the settings inside my scss main.scss file, since it s my first time using styled.components for a whole project I wanted to keep scss for the end, just to see if i could easily solved issues like the slider one.

<br>

##### Here is the result with only overflow:hidden

```scss
body {
  overflow-x: hidden;
  background-color: #edebe4;

  // ------------
  // ------------
  .page {
    // display: flex;
    // flex-wrap: wrap;
    overflow-x: hidden;
  }

  // ------------
}
```

<br>

### And in the App.js

- See how the page div is wrapping the whole thing

```javascript
  return (
    <Router>
      <ReactRouterScrollToTop />
      <div className="page">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/product" exact component={Product} />
          <Route path="/productList" exact component={ProductList} />
          <Route path="/*" component={Home} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};
```

<br>
<br>

# 🍯

- **It corrected the issue**, but i am still thinking about the possible issues, we will see.

[<img src="/src/img/swimming_slider_corrected1.gif" />]()

### the whole code

```javascript
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
//
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
//
//
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//

const App = () => {
  /*
  
  
  
  
  */
  return (
    <Router>
      <div className="page">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/product" exact component={Product} />
          <Route path="/productList" exact component={ProductList} />
          <Route path="/*" component={Home} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
```

<br>
<br>

## 🍯 SCSS

```scss
@import "_fonts";
//*********************************

*,
*::before,
*::after {
  margin: 0;
  padding: 0;

  text-decoration: none;
  list-style: none;
  outline: none;
  font-family: "Poppins-medium";

  // CURSOR DEFAULT NONE
  // cursor: auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/* ---------BAR STYLES------- */

// THE ERROR IN THIS FILE COMES FROM HERE********
body::-webkit-scrollbar {
  width: 1rem;
}
body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgb(248, 248, 248);
}
//   background-color: rgb(248, 248, 248);
body::-webkit-scrollbar-thumb {
  background-color: rgb(0, 0, 0);
  outline: none;
  border-radius: 50px;
}

/* ---------BAR STYLES------- */

body {
  // overflow-x: hidden;

  background-color: #edebe4;

  // rgb(248, 248, 248) original,matte white
  //  background-color: #002200; //emeraude
  // ------------
  // ------------
  // ------------
  // ------------
  .page {
    // display: flex;
    // flex-wrap: wrap;
    overflow-x: hidden;
  }

  // ------------
}

// This link color is related tot he LOGO of the page
#logoLinko {
  color: rgb(0, 0, 0);
  transition: all 1s ease;
  &:hover {
    color: #1a1a1a;
  }
}

//
// this one to the cart icon or any link
#linkos {
  color: rgb(0, 0, 0);
  transition: all 2s ease;
  &:hover {
    color: #adadad;
  }
}
```

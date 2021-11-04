  <!-- 
 styles badge, at the end i decided to cusrom them like in the ecommercejs project
 where i had to create a styles.js file and add the styles there then export it as hook
 https://stackoverflow.com/questions/55766980/custom-color-to-badge-component-not-working
 
  <br>


Photographs for projects


FOOD and objects ----------

https://unsplash.com/@imdauphong

general
https://unsplash.com/collections/75589301/bon-apetite

https://unsplash.com/@ikredenets
https://unsplash.com/photos/Jm_SqbqZYkY
https://unsplash.com/photos/DHaZQh7hR2U

https://unsplash.com/photos/xLS_W6RVx-8

https://unsplash.com/@wendish

https://unsplash.com/@stilclassics

https://unsplash.com/@charlesdeluvio

Christmas
https://unsplash.com/@samhoajti


PLACES ---------

https://unsplash.com/@spoelee4



PEOPLE ---------

https://unsplash.com/photos/BVJ5e-Z2zEk
https://unsplash.com/photos/n3GxXpVcTpI

beautiful black women
https://unsplash.com/@raphaellovaski
https://unsplash.com/photos/88IOcZz53eg
https://unsplash.com/photos/Tfbw4CFFPaY

https://unsplash.com/photos/DTdkZzXYhKI

https://unsplash.com/@dynamicwang
https://unsplash.com/photos/ISrx6MJ7XXI

---

https://unsplash.com/@kirsimakov

---

https://unsplash.com/@ronmcclenny

---

https://unsplash.com/photos/WJ85c_l6JSE

---

https://unsplash.com/photos/aU_eOcelLhQ


# 🐝

# Let's Begin!

## 1. Install the dependencies

```javascript
// copy and paste the following
npm install @material-ui/core @material-ui/icons   react-router-dom node-sass@4.14.1 styled-components

// npm i styled-components
```

 <br>


### Lets start by creating the pages folder

- create the pages folder
- inside of it, create the Home.jsx

<br>

> Here you can see how the [**emmet extension**](https://code.visualstudio.com/docs/editor/emmet) auto complete and automatically create the import on top of the file

[<img src="/src/img/compo_after_install_emet.gif"/>]()

<br>

 1 default-home-and-navbar
 2 announcement-slider
 3 categories-and-products
 4 newsletter-and-footer
 5 product-and-ProductList-page
 
 
  -->

 <br>

 <br>

- This is the continuation of **register-and-login-page**

<br>

#### Register

[<img src="/src/img/register-default_form-ready.jpg" />]()

<br>

#### Login

[<img src="/src/img/register_and_login__done.gif" />]()

<br>
<br>
<br>

# 🍌

## Let's Begin!

> **⚠️** Sometimes **styled components** can cause issues, as you cannot see if there is an error when you miss a **semicolon**

<br>
<br>
<br>

# CART <u>PAGE</u> 🥥 🐒

#### (Cart.jsx)

<br>

### Start by Creating the Cart.jsx page component (inside the pages folder)

- type **rafce** to automatic create the component default

```javascript
import React from "react";

const Cart = () => {
  return <div></div>;
};

export default Cart;
```

 <br>

### INSTEAD of importing the component to the home.jsx we will go to the App.js and replace the Home.jsx for the Register.jsx, i think its just to visualize what we do until a certain point

<br>

- AFTER THAT: it's going to be blank

```javascript
import React from "react";
import Cart from "./pages/Cart";
// import  Home  from "./pages/Home";

const App = () => {
  // return <Home />;
  return <Cart />;
};

export default App;
```

<br>

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

## THE FOLLOWING is going to mimic (the cart) when the client is ready to pay, mimic because once we will have the backend it will be made depending of what the client had put in the basket/cart

- lets add the first block of components

```javascript
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

//
import styled from "styled-components";
//
//
const Container = styled.div``;
//
const Wrapper = styled.div`
  padding: 20px;
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
//
//
//Shopping Bag(2)
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
`;
//
const Info = styled.div`
  flex: 3;
`;
//
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

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
          <Info></Info>
          <Summary></Summary>
        </Bottom>

        {/* 

*/}
      </Wrapper>
      {/* 
    
    */}
      <Footer />
    </Container>
  );
};
```

[<img src="/src/img/styles_checkout-default.gif" />]()

<br>
<br>

## Mimic a product in the cart 0

- later on, i will be mapping m yown images inside the data.js, but for now we will be using the original img of the project.

```javascript
const Info = styled.div`
  flex: 3;
`;

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
const Image = styled.img`
  width: 200px;
`;
//
//
//
const Summary = styled.div``;
//
//
//
//
//
//
<Product>
  <ProductDetail>
    <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
  </ProductDetail>
</Product>;
```

[<img src="/src/img/styles_checkout-default1.gif" />]()

## Mimic a product in the cart 1

- At this point i am just going to to add it step by step,because it can be confusing (due to the size of the data inside the Cart/checkout)

```javascript
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
const Summary = styled.div``;

//
//
//
//
//
//
//
//
<Bottom>
  <Info>
    <Product>
      <ProductDetail>
        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
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
      {/* <PriceDetail></PriceDetail> */}
      {/*  */}
    </Product>
  </Info>
  <Summary></Summary>
</Bottom>;
```

[<img src="/src/img/styles_checkout-default2.gif" />]()

<br>
<br>

## Mimic a product in the cart 3

- PRICE DETAIL / PRODUCT AMOUNT, PRICE

```javascript
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

//
const Summary = styled.div``;
//
//
//
//
//
<Bottom>
  <Info>
    <Product>
      <ProductDetail>
        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
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
      {/*  */}
    </Product>
  </Info>
  <Summary></Summary>
</Bottom>;
```
[<img src="/src/img/styles_checkout-default3.gif" />]()

<br>
<br>
<br>

## Mimic a product in the cart 3

- PRICE DETAIL / PRODUCT AMOUNT, PRICE

```javascript
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

//
const Summary = styled.div``;
//
//
//
//
//
<Bottom>
  <Info>
    <Product>
      <ProductDetail>
        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
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
      {/*  */}
    </Product>
  </Info>
  <Summary></Summary>
</Bottom>;
```
[<img src="/src/img/styles_checkout-default4.gif" />]()
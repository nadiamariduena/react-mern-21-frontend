# 🍌 🐒

# Inside the <u>navbar default </u>

#### I decided to apply styles to the basket store, more exactly, to the little number that indicates how many items we have in the basket.

> **SINCE** the icon comes from **MATERIAL UI**, i had to create a hook that i used inside the navbar.

<br>

# steps:

### 1. I created another file inside the **components folder** and i called it **styles.js**

<br>

### 2. Inside the styles.js i added the following:

```javascript
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  //   margin: {
  //     margin: theme.spacing.unit * 2,
  //   },
  customBadge: {
    backgroundColor: "#335DFF",
    color: "white",
  },
}));
```

<br>

#### Then inside the navbar.jsx

<br>

### 3. I proceed to import it and then pass the hook to a variable, like so:

- **Important**: the import has to be on top, not under the styled components styles!

```javascript
import useStyles from "./styles";

//
const Navbar = () => {
  const classes = useStyles();
```

#### and you will use it here:

- **classes={{ badge: classes.customBadge }}**

```javascript
<Badge
  badgeContent={4}
  classes={{ badge: classes.customBadge }}
  //   className={classes.margin}
>
  <ShoppingCartOutlined />
</Badge>
```

#### before

[<img src="/src/img/slide_prcess_img2_before_animation.jpg"/>]()

#### after

- Dont bother about the image :), just look at the basket icon, its now salmon.

[<img src="/src/img/icon-color-custom.jpg"/>]()

### Maybe at the end of the project it will be nice to add some if statement to change the color depending on the page we are or the slider, as not all the colors match with the images aesthetic.

<br>
<br>
<hr>
<br>
<br>

## IMG OPTION

- The option 2 seems nice (its just that the text is too close)

```javascript
const Image = styled.img`
  width: 80%;
  min-height: auto;
  object-fit: cover;

  /*
//option 2

    width: 100%;
    object-fit: cover;
    aspect-ratio: 1;
    // The aspect-ratio  CSS property sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes and some other layout functions.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
   */
`;
```

[<img src="/src/img/slider_funczionality_changes_img-option.gif"/>]()

<br>
<br>
<br>
<br>
<hr>
<br>

# FILTER AND MAP

#### If you dont want to use the images provided by the tutorial, and instead you want to use your images (situated in your public) you can do as I did.

- i will provide the default version of the tutorial and my version using filter and map

<br>
<br>

## Now we are ready to create our <u>single product page</u>

- You can find more inside the BRANCH: **product-and-ProductList-page**

- Add the first components

<br>

[<img src="/src/img/productPage__1.gif" />]()

```javascript
import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

//
import styled from "styled-components";
//
const Container = styled.div``;

//
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
//
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

//
//

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
```

<br>

## My version

##### [How to filter data in React](https://sebhastian.com/react-filter/)

<br>

### Since I already have some images i found on the web, i don't need the default images he is using, so to reach the image inside the public folder...

<br>

- I can individually require it with **import** or **map. it**, it will create more lines yes, but it s a nice exercise.

#### I will be using filter. and .map

- Add a **title** to the data.js, so to be **able to grab the exact image** i want:

<br>

```javascript
export const popularProducts = [
  {
    id: 1,
    img: "img-store-products/trinh-minh-th-MQOA0n3chA8-unsplash.jpg",
    title: "flower0", //here ********
  },
  {
    id: 2,
    img: "img-store-products/trinh-minh-th-BFJBelj9GDM-unsplash.jpg",
    title: "flower1",
  },
  {
    id: 3,
    img: "img-store-products/trinh-minh-th-Y3ORDf3E90I-unsplash.jpg",
    title: "flower2",
  },
  {
    id: 4,
    img: "img-store-products/trinh-minh-th-ScYGyGhA9HQ-unsplash.jpg",
    title: "flower3",
  },
  {
    id: 5,
    img: "img-store-products/trinh-minh-th-XezTntkSwnA-unsplash.jpg",
    title: "flower4",
  },
  {
    id: 6,
    img: "img-store-products/trinh-minh-th-YakPphiBp4Q-unsplash.jpg",
    title: "flower5",
  },
  {
    id: 7,
    img: "img-store-products/trinh-minh-th-W936fLTXmJA-unsplash.jpg",
    title: "flower6",
  },
  {
    id: 8,
    img: "img-store-products/trinh-minh-th-gjB6CPpbnC8-unsplash.jpg",
    title: "flower7",
  },
];
```

<br>

### Then i will filter it and map the image i want

```javascript
      <Wrapper>
        <ImgContainer>
          {popularProducts
            .filter((item) => item.title === "flower3")
            .map((item) => (
              <Image src={item.img} />
            ))}
        </ImgContainer>
```

### result:

[<img src="/src/img/filter-map-products.gif" />]()

<br>

```javascript
import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
//
import { popularProducts } from "../data";

//
import styled from "styled-components";
//
const Container = styled.div``;

//
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
//
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

//
//

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          {popularProducts
            .filter((item) => item.title === "flower3")
            .map((item) => (
              <Image src={item.img} />
            ))}
        </ImgContainer>
        <InfoContainer>
          <Title>Crocodile Embossed bag</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 128</Price>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
```

<br>
<br>
<br>
<hr>
<br>

# UseLocation 🥥

### How to hide certain information depending on the page i am:

- We can use the **UseLocation** from **react-router-dom**, like so:

<br>

> We want to check if location pathname is equal **to '/'** which is our welcome/Home page, only then you will show the icon image, but if we are already inside the cart page don't show it

```javascript
if (location.pathname === '/')
```

<br>

## Lets implement it:

```javascript
//1 import it
import { Link, useLocation } from "react-router-dom";
//
//
//2 use the hook

const location = useLocation();
//
//
//3 add it
/*

We want to check if location pathname is equal **to '/'** which is our welcome/Home page, only then you will show the icon image, but if we are already inside the cart page don't show it

*/
{
  location.pathname === "/" && (
    <MenuItem>
      <Link to="/cart" id="linkos">
        <Badge badgeContent={4} classes={{ badge: classes.customBadge }}>
          <ShoppingCartOutlined />
        </Badge>
      </Link>
    </MenuItem>
  );
}
```

```javascript
/*



         ****    BEFORE *****


*/
import React from "react";
import { Link } from "react-router-dom";

import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import styled from "styled-components";
import { mobile, mobileM, tablet } from "../responsive";
// hook related to basket icon
import useStyles from "./styles";
//
//

const Container = styled.div`
  height: auto;
  background-color: #edebe4;

  ${mobile({ height: "50px" })}
`;

//mobileM
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
  ${mobileM({ padding: "10px 0px" })}
  ${tablet({ padding: "10px 0px" })}
`;
// ----------------------

const Left = styled.div`
  // if you consider the wrapper 100%
  flex: 1; //with this you dont have to add 33.33% to each box
  display: flex;
  align-items: center;

  //
  // border: 0.5px solid green;
`;
//
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  ${mobileM({ display: "none" })}
  ${tablet({ display: "none" })}
`;
//
const SearchContainer = styled.div`
  border: 0.5px solid #dddddd;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "5px" })}
  ${mobileM({ marginLeft: "5px" })}
`;
const Input = styled.input`
  border: none;

  ${mobile({ width: "40px", fontSize: "0.8em", fontFamily: "Rajdhani-Light" })}
  ${mobileM({ width: "50px", fontSize: "0.8em", fontFamily: "Rajdhani-Light" })}
  ${tablet({ fontSize: "0.8em", fontFamily: "Rajdhani-Light" })}
`;
//
// ----------------------
//
//
//
const Center = styled.div`
  flex: 1;

  text-align: center;
  // border: 1px solid #000;
`;
//
//LOGO
const Logo = styled.h1`
  font-weight: bold;
  font-family: "Syncopate-Bold";
  letter-spacing: 15px;
  ${mobile({ fontSize: "1.3em", letterSpacing: "5px" })}
  ${mobileM({ fontSize: "1.3em", letterSpacing: "5px" })}
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
  align-items: center;
  justify-content: flex-end;
  // border: 1px solid #000;
  ${mobile({ flex: 2, justifyContent: "center" })}
  ${mobileM({ flex: 2, justifyContent: "center" })}
`;
//
//
const MenuItem = styled.div`
  font-size: 1em;
  cursor: pointer;
  margin: 0 20px 0 10px;
  ${mobile({ fontSize: "0.8em", marginLeft: "10px", marginRight: "0" })}
  ${mobileM({ fontSize: "0.8em", marginLeft: "10px", marginRight: "0" })}
`;

//

//

const Navbar = () => {
  const classes = useStyles();

  //
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" id="logoLinko">
            <Logo>LAMA.</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register" id="linkos">
              <span>REGISTER</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login" id="linkos">
              <span>SIGN IN</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart" id="linkos">
              <Badge badgeContent={4} classes={{ badge: classes.customBadge }}>
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

/*



         ****    AFTER *****


*/

import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import styled from "styled-components";
import { mobile, mobileM, tablet } from "../responsive";
// hook related to basket icon
import useStyles from "./styles";
//
//

const Container = styled.div`
  height: auto;
  background-color: #edebe4;

  ${mobile({ height: "50px" })}
`;

//mobileM
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
  ${mobileM({ padding: "10px 0px" })}
  ${tablet({ padding: "10px 0px" })}
`;
// ----------------------

const Left = styled.div`
  // if you consider the wrapper 100%
  flex: 1; //with this you dont have to add 33.33% to each box
  display: flex;
  align-items: center;

  //
  // border: 0.5px solid green;
`;
//
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  ${mobileM({ display: "none" })}
  ${tablet({ display: "none" })}
`;
//
const SearchContainer = styled.div`
  border: 0.5px solid #dddddd;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "5px" })}
  ${mobileM({ marginLeft: "5px" })}
`;
const Input = styled.input`
  border: none;

  ${mobile({ width: "40px", fontSize: "0.8em", fontFamily: "Rajdhani-Light" })}
  ${mobileM({ width: "50px", fontSize: "0.8em", fontFamily: "Rajdhani-Light" })}
  ${tablet({ fontSize: "0.8em", fontFamily: "Rajdhani-Light" })}
`;
//
// ----------------------
//
//
//
const Center = styled.div`
  flex: 1;

  text-align: center;
  // border: 1px solid #000;
`;
//
//LOGO
const Logo = styled.h1`
  font-weight: bold;
  font-family: "Syncopate-Bold";
  letter-spacing: 15px;
  ${mobile({ fontSize: "1.3em", letterSpacing: "5px" })}
  ${mobileM({ fontSize: "1.3em", letterSpacing: "5px" })}
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
  align-items: center;
  justify-content: flex-end;
  // border: 1px solid #000;
  ${mobile({ flex: 2, justifyContent: "center" })}
  ${mobileM({ flex: 2, justifyContent: "center" })}
`;
//
//
const MenuItem = styled.div`
  font-size: 1em;
  cursor: pointer;
  margin: 0 20px 0 10px;
  ${mobile({ fontSize: "0.8em", marginLeft: "10px", marginRight: "0" })}
  ${mobileM({ fontSize: "0.8em", marginLeft: "10px", marginRight: "0" })}
`;

//

//

const Navbar = () => {
  const location = useLocation();
  /*
  
  
  
  
  */
  const classes = useStyles();

  //
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" id="logoLinko">
            <Logo>LAMA.</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register" id="linkos">
              <span>REGISTER</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login" id="linkos">
              <span>SIGN IN</span>
            </Link>
          </MenuItem>

          {location.pathname === "/" && (
            <MenuItem>
              <Link to="/cart" id="linkos">
                <Badge
                  badgeContent={4}
                  classes={{ badge: classes.customBadge }}
                >
                  <ShoppingCartOutlined />
                </Badge>
              </Link>
            </MenuItem>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
```

<br>
<br>

### As you can see, from the moment we click on the 'cart logo' to be redirected to the cart page, we no longer see it once we reach destination.

[<img src="/src/img/useLocation_test_basket.gif" />]()

<br>

### ⚠️ Only ISSUE with this, is that you will not see the cart in other pages, so i will have to figure it out.

<br>
<br>

<br>

# SOLUTION 🌞

- After hours of searching a solution, i found heaven here:

### [React Conditional Rendering | NESTED CONDITIONAL RENDERING IN REACT](https://www.robinwieruch.de/conditional-rendering-react)

```javascript
{
  location.pathname === "/" ? (
    <MenuItem>
      <Link to="/cart" id="linkos">
        <Badge badgeContent={4} classes={{ badge: classes.customBadge }}>
          <ShoppingCartOutlined />
        </Badge>
      </Link>
    </MenuItem>
  ) : location.pathname === "/cart" ? (
    ""
  ) : (
    <MenuItem>
      <Link to="/cart" id="linkos">
        <Badge badgeContent={4} classes={{ badge: classes.customBadge }}>
          <ShoppingCartOutlined />
        </Badge>
      </Link>
    </MenuItem>
  );
}
```

[<img src="/src/img/finally_useLocation__conditionalRendering__solved.gif" />]()

### Above: You can appreciate how the cart icon is visible everywhere _'BUT'_ in the checkout.

<br>
<br>
<br>
<br>
<br>

# BUTTON 🦊

<br>

### ⚠️ Issue with button in smaller devices

- The issue relates to **buttons with long texts**, like **"Add to cart"**, my buttons until now only contained texts like "add", **log in** or **register** but when i started to modify the button inside the **Product.jsx** from **pages**,I encountered a schrinking issue.

> I tried everything i knew and nothing worked, until i came to the conclusion that perhaps i will need to change the text depending on the device, for example: adding **add to cart** for desktop / tablets, and **add** only for small devices, but then I told to myself **this dont solve the issue**, so i continue searching and <u>i found this</u> :

<br>

#### [COOL AND RESPONSIVE BUTTONS WITH A FEW LINES OF CSS](https://fdossena.com/?p=html5cool/buttons/i.frag)

<br>

- **warning** if you see a yellow underline in the code that you eventually will copy from his side: COPY AND PASTE it inside the browser url, then copy it again and past it in visual, that was my fast solution

<br>

> **After seeing his example** one the <u>VERY PRETENTIOUS LONG BUTTON</u> , i started to ask me ..why works perfectly there and not in mine???

<br>

```javascript
// 👍 BASED ON THIS: https://fdossena.com/?p=html5cool/buttons/i.frag

  display: inline-block;
  padding: 1em 2.5em;
  border: 0.1em solid #121212;
  margin: 0 0.3em 0.3em 0;
  border-radius: 12em;
  box-sizing: border-box;
  text-decoration: none;
  text-align: center;
//
//
    display: "block",
    margin: "0.2em 0.8em",
    textAlign: "center",
    padding: "1em 2em",
    fontSize: "0.9em",
```

<br>
 
## Such an idiot :) 🤦

- i dont know why i didn't do this, most of the time i color the blocks in the sections i work, just to see more or less where i am and how much space i have, so i did the same then i understood.

 <br>

[<img src="/src/img/buttin_shrinking_issue_solved.gif" />]()

 <br>

- So i started with the parent of the parent of the button, i checked and made sure it was 100% or wide enough

```javascript
const Wrapper = styled.div`
 width: 100%;
```

#### Then I proceed to handle the parent of the button

- As you can see, the 50% correspond to the Desktop so its fine there, then i changed the <u>mobile to **width: "auto"**</u> to have as much space as possible since it will be shrinking to the maximum

```javascript
//<u></u>
//            **    BUTTONS   ***
//
const AddContainer = styled.div`
  width: 50%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
  ${mobile({
    width: "auto",
  })}
  ${mobileM({
    width: "85%", //this is connected to the button, the smaller the size, the less space you will have for the button, this will cause that the button become a circle(related to the size of the padding and margin )
  })}
   ${tablet({
    width: "95%",
  })}
`;
```

 <br>

- So at the same time i added this to the **mobile** inside button

### read the comments

<br>

```javascript
//
const Button = styled.button`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #121212;
  margin: 0 0.3em 0.3em 0;
  border-radius: 8em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #121212;
  text-align: center;
  transition: all 0.2s;

  /*  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s; */

  //background

  background-color: transparent;

  /* border-radius: 50px; */
  cursor: pointer;
  font-weight: 500;
  transition: all 1s ease-in-out;
  &:hover {
    border: 1px solid #121212;
    color: rgb(248, 248, 248);
    background-color: #121212;
  }
  //
  ${mobile({
    display: "block",
    margin: "0.2em 0.5em 0.2em 0.1em",
    //has to do with the  AddContainer on top of this file, the bigger the container is, the more you can expand the button or add margin right
    padding: "1em 0.8em",
    fontSize: "0.9em",
  })}
`;
//
```

[<img src="/src/img/buttin_shrinking_issue_solved2.gif" />]()

<br>

### The cart

```javascript
import React from "react";
import { Link } from "react-router-dom";
import { mobile, mobileM, tablet } from "../responsive";

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
  ${mobile({
    padding: "10px 10px 70px 10px",
  })}
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
  margin: 3px 0 30px 0;
  /*HELPER border: 1px solid red; */
  //
  ${mobile({
    width: "auto",
    padding: "20px 5px",
  })}
  ${mobileM({
    width: "auto",
    padding: "20px 5px",
  })}
    ${tablet({
    width: "auto",
    padding: "20px 20px",
  })}
`;

const TopButton = styled.button`
  padding: 1.2em 1.6em;

  margin: 0 0.3em 0.3em 0;
  border-radius: 8em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  text-align: center;
  transition: all 0.2s;
  /* width: 18%;
  padding: 10px 25px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  transition: all 1s ease-in-out; */
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
  ${mobile({
    display: "block",
    margin: "0.2em 0.5em 0.2em 0.1em",
    //has to do with the  AddContainer on top of this file, the bigger the container is, the more you can expand the button or add margin right
    padding: "0.7em 0.5em",
    fontSize: "0.9em",
  })} //
    ${mobileM({
    display: "block",
    margin: "0.2em 0.5em 0.2em 0.1em",
    //has to do with the  AddContainer on top of this file, the bigger the container is, the more you can expand the button or add margin right
    padding: "0.7em 0.5em",
    fontSize: "0.9em",
  })} //
      ${tablet({
    width: "35%",
    display: "block",
    margin: "0.2em 0.5em 0.2em 0.1em",
    //has to do with the  AddContainer on top of this file, the bigger the container is, the more you can expand the button or add margin right
    padding: "0.7em 0.5em",
    fontSize: "0.9em",
  })} //
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
  ${mobileM({ display: "none" })}
  ${tablet({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
//
//
//
//
//
//
//
//
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ddd8c74c;
  padding: 50px 0px;
  ${mobile({ flexDirection: "column", width: "100%" })}
  ${mobileM({ flexDirection: "column", width: "100%" })}
`;
//
//
//
const Info = styled.div`
  flex: 2; //the size of the block
  ${mobile({ flexDirection: "column", width: "100%", flex: "1" })}
  ${mobileM({ flexDirection: "column", width: "100%", flex: "1" })}
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
  ${mobile({ flexDirection: "column" })}
  ${mobileM({ flexDirection: "column" })}
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

// the + 2 -
const ProductAmount = styled.div`
  font-size: 1.4em;
  margin: 5px;
  //if you add too much to the top in mobile margin, the + and - wont follow, you will have to style the MUI icons
  ${mobile({ margin: "0.2em 0.5em 0em 0.5em " })}
  ${mobileM({ margin: "0.2em 0.5em 0em 0.5em " })}
`;
// 30$
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ margin: "0em 0.5em 0.8em 0.5em " })}
  ${mobileM({ margin: "0em 0.5em 0.8em 0.5em " })}
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
      {/* <Navbar />
      <Announcement /> */}
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
                      <Link to={item.component}>
                        <Image src={item.img} />
                      </Link>
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
                      <Link to={item.component}>
                        <Image src={item.img} />{" "}
                      </Link>
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
      {/* <Footer /> */}
    </Container>
  );
};

export default Cart;
```

[<img src="/src/img/buttin_shrinking_issue_solved3.gif" />]()

<br>

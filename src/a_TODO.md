# Remove the ugly border from the OPTIONS

- Some clues to give you an idea

##### [Awesome CSS Select Styles You Can Use Right Now](https://www.sliderrevolution.com/resources/css-select-styles/)

<br>

##### [React-Select offers a flexible, light-weight styling framework which is a thin abstraction over simple javascript objects using](https://react-select.com/styles)

<br>

<br>
<br>

# SLIDER

### AT the end of the project

- See if you can add a **image reveal** (wrong akram), to the image inside the slider, check the performance as the slider already has a transition when sliding and the image reveal will make it more.

<br>
<br>

# The announcement

### The announcement discount is under the navbar, test at the end if it s better to put it above the navbar

- dont forget the home.jsx has the navbar above and the other pages like product + productList has it below the navbar

<br>
<br>

## Check the placeholder and change the font and size

[placeholder](https://stackoverflow.com/questions/38922878/set-text-input-placeholder-color-in-reactjs)

<br>
<br>

## Change pixels to em's

- Since the beginning of the project i felt uncomfortable using pixels, so i tried my best to avoid them but you can still find them in the buttons and other stuff.

> In practice, many designers convert pixels to ems, largely because ems afford better zooming. At standard zoom 1em === 16px, multiply pixels by 1em/16px to get ems. For example, 320px === 20em.

<br>
<br>
<br>
<hr>
<br>

# UseLocation 🥥

- Only ISSUE with this, is that you will not see the cart in other pages too, so i will have to figure it out 'how to hide the cart only from the checkout.

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

# 🥳

<br>
<br>
<br>

# check the issue related to this:

[Warning: Use the 'defaultValue' or 'value' props on <select> instead of setting 'selected' on <option>](https://stackoverflow.com/questions/44786669/warning-use-the-defaultvalue-or-value-props-on-select-instead-of-setting)

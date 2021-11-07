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

- This is the continuation of **cart-checkout-page**

<br>

[<img src="/src/img/styles_checkout-default6.gif" />]()

<br>
<br>
<br>

# 🍌

## Let's Begin!

> **⚠️** Sometimes **styled components** can cause issues, as you cannot see if there is an error when you miss a **semicolon**

<br>
<br>
<br>

# RESPONSIVE APP 🍊

<br>

### In this part of the project, we will be handling the responsiveness of the Application.

 <br>

- We will start with the Navbar, **To visualize the changes**, go to the App.js and change the following.

- ADD the nav to the render

```javascript
import React from "react";
// import Cart from "./pages/Cart";
//
//
//
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

//
//

const App = () => {
  return <Navbar />;
};

export default App;
```

<br>
<br>

### Next: we will create the function (Mobile) that we will be passing to each of the pages components

<br>

[official code](https://github.com/safak/youtube/blob/react-shop-ui/src/responsive.js)

<br>

- **INSIDE**: the **src** folder, create the **responsive.js**

<br>

```javascript
import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
```

### The code only makes allusion to the max-with (max-width: 380px)

<br>

#### [How to use media queries with styled components](https://jsramblings.com/how-to-use-media-queries-with-styled-components/)

- But if you want to have more choices , like lets say you want a different style of a button or a box in the tablet, you can add for example:

```javascript
@media (min-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { /* hi-res laptops and desktops */ }

/*


another option

*/
/* Custom, iPhone Retina */
    @media only screen and (min-width : 320px) {

    }

    /* Extra Small Devices, Phones */
    @media only screen and (min-width : 480px) {

    }

    /* Small Devices, Tablets */
    @media only screen and (min-width : 768px) {

    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {

    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {

    }


/*


another option

*/


  // Phone
only screen and (max-width:320px)
// Tablet
only screen and (min-width:321px) and (max-width:768px)

// Desktop
only screen and (min-width:769px)
```

<br>

#### [Media Queries For Mobile, Laptop, Desktop And iPad For Making Responsive Website Design](https://www.c-sharpcorner.com/UploadFile/44b888/media-queries-for-mobile-laptop-desktop-and-i-pad-for-maki/)

<br>

#### [READ MORE | Media Queries: How to target desktop, tablet, and mobile? ](https://stackoverflow.com/questions/6370690/media-queries-how-to-target-desktop-tablet-and-mobile)

##### In practice, many designers convert pixels to ems, largely because ems afford better zooming. At standard zoom 1em === 16px, multiply pixels by 1em/16px to get ems. For example, 320px === 20em.

<br>
<br>

## To Test

```javascript
@media only screen and (min-width: 320px) {

  /* Small screen, non-retina */

}

@media
only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 320px),
only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 320px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 320px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 320px),
only screen and (                min-resolution: 192dpi) and (min-width: 320px),
only screen and (                min-resolution: 2dppx)  and (min-width: 320px) {

  /* Small screen, retina, stuff to override above media query */

}

@media only screen and (min-width: 700px) {

  /* Medium screen, non-retina */

}

@media
only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 700px),
only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 700px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 700px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 700px),
only screen and (                min-resolution: 192dpi) and (min-width: 700px),
only screen and (                min-resolution: 2dppx)  and (min-width: 700px) {

  /* Medium screen, retina, stuff to override above media query */

}

@media only screen and (min-width: 1300px) {

  /* Large screen, non-retina */

}

@media
only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1300px) {

  /* Large screen, retina, stuff to override above media query */

}
```

<br>
<br>
<br>

# 🍯

### Back to the code

#### Right now i will be using the one from the video and later on i will see how the project develops so to adapt it to more devices(like tablet for example)

## Lets continue:

- **INSIDE**: the **src** folder, create the **responsive.js**

<br>

```javascript
import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
```

<br>

### Now pass the <u>mobile</u> function to the NAVBAR ,like so:

<br>

```javascript
// navbar.jsx
import { mobile } from "../responsive";
//
//
//
const Container = styled.div`
  height: auto;
  background-color: #edebe4;

  ${mobile({ height: "50px", backgroundColor: "red" })}
`;
```

[<img src="/src/img/responsive_breakpoint_1.gif" />]()

#### As you can see in the img, as long as we dont reach the 'breakpoint' which is <u>380px</u> the red color will show, but from the moment we go after the 380 it will change to our desktop version color which is #edebe4;

<br>
<br>

## 🔴 After testing the mobile version of the navbar i can only say one thing, its a little 'tight' and the reason for that is because there s no much space for the 'SIGN IN' button.

- I SEE 2 OPTIONS for that

#### 1. dropdown menu or the ones that come from the side

<br>

- or

### 2. Put the register button on the bottom (bad user experience)

<br>
<br>
<br>

### The code for the navbar mobile

```javascript
import React from "react";
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
  -webkit-letter-spacing: 5px;
  -moz-letter-spacing: 5px;
  -ms-letter-spacing: 5px;

  /*  */
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
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} classes={{ badge: classes.customBadge }}>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
```

#### As you can notice, below 370 or something it starts to be a bit too tight, then after 380 its ugly again, of course you can spend time changing each device but the best would be to implement the dropdown or similar.

[<img src="/src/img/responsive_breakpoint_2.gif" />]()

 <br>
 <br>

### Dropdown options:

- They are a little too funcky for this type of project.

<br>

[animated dropdown](https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed)

[Animated Responsive Navbar Tutorial](https://www.youtube.com/watch?v=H4MkGzoACpQ)

[https://www.telerik.com/blogs/quick-guide-dropdown-menus-react](https://www.telerik.com/blogs/quick-guide-dropdown-menus-react)

<br>
<br>
<hr>
<br>

# SLIDER (mobile)

- We are going to remove the slider from the mobile version

```javascript
import { mobile } from "../responsive";
//
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
  //
  position: relative;
  ${mobile({ display: "none" })}
`;
```

<br>

<br>

# SWIMMING SLIDER AND PAGE

🔴 I added this **page div** after i put all the routes together, i dont advice doing the following unless you save a copy of the original project

<br>

#### From the moment i started to handle the responsiveness of the project i knew the slider will be difficult (for me a Beginner), so first i wanted to take care of things i considered not so problematic

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
      <ReactRouterScrollToTop /> // this solve the issue of being ///reedirected to the middle of the page when clicking to a page
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
```

<br>
<br>
<hr>
<br>
<br>

## Categories

```javascript
import { mobile } from "../responsive";

//
//
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
//
//
```

<br>
<br>

## CategoryItems

- Here i didnt use the height: "20vh" because i didnt like the behavior so i avoided it.

<br>

````javascript
import React from "react";
import { mobile } from "../responsive";
//
import styled from "styled-components";

//
//
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1;
  //
  //
  /* ${mobile({ height: "20vh" })} */

  //
`;

<br>
<br>


### The app.js

```javascript
import React from "react";
// import Cart from "./pages/Cart";
//
//
//
// import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

//
//

const App = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;

````

<br>
<br>

## NEWSLETTER

```javascript
import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";
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
  font-size: 4.8em;
  margin-bottom: 20px;
  font-weight: 600;
  font-family: "Raleway-SemiBold", sans-serif;
  ${mobile({ fontSize: "2.7em" })}
`;
const Desc = styled.div`
  font-size: 1.5em;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "1.1em", lineHeight: "1.4em" })}
`;
//
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
```

<br>
<br>
<br>
<br>

### FOOTER

- Removing the center is a question of choice, i decided to let it as it s now, I also didnt add the background color const **Right**

```javascript
import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  MailOutline,
  Phone,
  Room,
} from "@material-ui/icons";

//
import { mobile } from "../responsive";
//

const Container = styled.div`
  display: flex;
  margin-top: 40px;
  ${mobile({ flexDirection: "column" })}
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
  /* background-color: #${(props) => props.color}; */
  /* background-color: white; */
  color: black;
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
  padding: 20px;
  /* ${mobile({ display: "none" })} */
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none; //will remove the dot of the list
  display: flex;
  flex-wrap: wrap; //will position in column
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
//
//
//

const Right = styled.div`
  flex: 1;
  padding: 20px;
  /* ${mobile({ backgroundColor: "#fff8f8" })} */
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

//
```

[<img src="/src/img/responsive_breakpoint_3.gif" />]()

<br>

### And the Announcement

```javascript
import React from "react";
import { mobile, mobileM, tablet } from "../responsive";
import styled from "styled-components";

//
//

const Container = styled.div`
  height: 5vh;
  background-color: #121212;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 500;
  font-family: "Poppins-light";
  color: rgb(248, 248, 248);
  ${mobile({ fontSize: "0.8em" })}
  ${mobileM({ fontSize: "0.9em" })}
  ${tablet({ fontSize: "1.1em" })}
`;

//

const Announcement = () => {
  return <Container>Super Deal! Freee Shipping on Orders Over $50</Container>;
};

export default Announcement;
```

<br>
<br>
<hr>
<br>
<br>
<br>

# THE PAGES

### 1. the Cart

- Again, go to the app and **To visualize the changes**, add the component you will work on, in this case the Cart.jsx.

- ADD the nav to the render

```javascript
import React from "react";
// import Cart from "./pages/Cart";
//
//
//HOME and its components
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
//
//---------------------

//PAGES

import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

//
//

const App = () => {
  return (
    <>
      {/* <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer /> */}
      <Cart />;
    </>
  );
};

export default App;
```

<br>
<br>

### The cart

```javascript
import React from "react";
import { mobile, mobileM, tablet } from "../responsive";

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
      <Navbar />
      <Announcement />

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
                {" "}
                {popularProducts
                  .filter((item) => item.title === "flower6")
                  .map((item) => (
                    <ImgContainer key={item.id}>
                      <Image src={item.img} />
                    </ImgContainer>
                  ))}
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
                {" "}
                {popularProducts
                  .filter((item) => item.title === "flower2")
                  .map((item) => (
                    <ImgContainer key={item.id}>
                      <Image src={item.img} />
                    </ImgContainer>
                  ))}
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

# THE LOGIN

```javascript
import React from "react";

import { mobile, mobileM, tablet } from "../responsive";
import styled from "styled-components";

//
//
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  /*  */
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ), url("../img-store/soroush-golpoor-Z4N2c8ZNUQ0-unsplash.jpg") center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

//
const Wrapper = styled.div`
  width: 30%;
  padding: 30px 40px;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ${mobile({ width: "90%" })}
  ${mobileM({ width: "75%" })}
  ${tablet({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 1.7em;
  font-weight: 300;
  margin: 10px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 7px 0;
  padding: 13px;
  ${mobile({ padding: "12px" })}
  ${mobileM({ padding: "12px" })}
  ${tablet({ padding: "16px" })}
`;

const Button = styled.button`
  margin: 16px 0 15px 0;
  width: 40%;
  padding: 13px 20px;
  //background
  border: 1px solid #121212;
  color: rgb(248, 248, 248);
  background-color: #121212;

  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  transition: all 1s ease-in-out;
  &:hover {
    color: #121212;
    border: 1px solid #121212;
    background-color: transparent;
  }
`;
//
//

const Link = styled.a`
  margin: 3px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
//
//

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>

        {/*  
          
          */}
      </Wrapper>
    </Container>
  );
};

export default Login;
```

<br>
<br>
<br>

## PAGES/PRODUCT.JSX

- Careful with the **key={item.id}** can be item, items or whatever argument you added in the map

<br>

```javascript
import React from "react";
import { mobile, mobileM, tablet } from "../responsive";
//
//
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
//
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
//
// IMage
import { popularProducts } from "../data";

//

//
const Container = styled.div`
  width: 100%;
`;

//
const Wrapper = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  //
  ${mobile({ padding: "10px", flexDirection: "column" })}
  ${mobileM({ padding: "10px", flexDirection: "column" })}
  ${tablet({ padding: "10px", flexDirection: "column" })}
`;
//
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "60vh" })}
  ${mobileM({ height: "60vh" })}
`;

const InfoContainer = styled.div`
  flex: 1; //is will make 50%
  /* 
  
  InfoContainer and the ImgContainer are both flex 1 which means(50%),
 
  
  */
  padding: 0px 50px;
  ${mobile({ padding: "0 10px", width: "95%" })}
  ${mobileM({ padding: "0 10px", width: "95%" })}
`;

const Title = styled.h1`
  font-weight: 200;
  ${mobile({ marginTop: "60px", fontSize: "1.8em", lineHeight: "1.2em" })}
  ${mobileM({ marginTop: "60px", fontSize: "1.9em", lineHeight: "1.1em" })}
  ${tablet({ marginTop: "60px", fontSize: "2.2em", lineHeight: "1.1em" })}
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
//
//
//          **    option color  ***
//
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

//
// the title 'color'
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin: 0px 10px 0 0px;
`;

// the circles with the colors
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  border: none;
  background-color: #ffffff6a;
`;

const FilterSizeOption = styled.option``;

//
//
//            **    BUTTONS   ***
//
const AddContainer = styled.div`
  width: 60%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //to check the width where you are border: 1px solid red;

  //
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

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 0.5px dotted black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  display: inline-block;
  /* desktop   padding: 0.80em 1.5em; */
  /*oroginal padding: 0.35em 1.2em; */
  //
  //
  padding: 1.2em 1.6em;
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
  ${mobileM({
    width: "55%",
    display: "block",
    margin: "0.2em 0.5em",
    //has to do with the  AddContainer on top of this file, the bigger the container is, the more you can expand the button or add margin right
    padding: "1em 0.8em",
    fontSize: "0.9em",
  })}
    ${tablet({
    width: "45%",
    padding: "13px 0",
    margin: "0 0 0 20px",
  })}
`;
//
//
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
              <Image src={item.img} key={item.id} />
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
          {/* 

*/}
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="white" />
              <FilterColor color="#85390e " />
              <FilterColor color="#BEBAB0" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          {/*  */}
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
          {/*  
          
          */}
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

## PAGES / ProductList.jsx

<br>

```javascript
import React from "react";
import styled from "styled-components";
import { mobile, mobileM, tablet } from "../responsive";

//
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

//

const Container = styled.div`
  //

  //
`;

//
//
//

const Title = styled.h1`
  margin: 70px 20px 20px 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
  ${mobileM({ width: "0px 20px", display: "flex", flexDirection: "column" })}
  ${tablet({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

//
const FilterText = styled.span`
  font-size: 1.1em;
  letter-spacing: 0.5px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0" })}
  ${mobileM({ marginRight: "0" })}
  ${tablet({ marginRight: "0" })}
`;

const Select = styled.select`
  padding: 10px;
  margin: 20px 2px;
  border: none;
  background-color: #ffffff6a;
  ${mobile({ margin: "7px 0" })}
  ${mobileM({ margin: "7px 0" })}
  ${tablet({ margin: "7px 0" })}
`;
const Option = styled.option`
  margin: 5px;
  border: none;
`;

//
//
//
//
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Title>Dresses</Title>
      <FilterContainer>
        {/* 
              
              
            Filter Products

      
      */}
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        {/* 
              
              
              Sort Products

      
      */}
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
```

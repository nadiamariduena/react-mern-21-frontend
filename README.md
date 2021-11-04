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
import { mobile } from "../responsive";
// hook related to basket icon
import useStyles from "./styles";
//
//

const Container = styled.div`
  height: auto;
  background-color: #edebe4;

  ${mobile({ height: "50px", backgroundColor: "red" })}
`;

//
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
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
`;
//
const SearchContainer = styled.div`
  border: 0.5px solid #dddddd;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "5px" })}
`;
const Input = styled.input`
  border: none;

  ${mobile({ width: "40px", fontSize: "0.8em", fontFamily: "Rajdhani-Light" })}
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
`;
//
//
const MenuItem = styled.div`
  font-size: 1em;
  cursor: pointer;
  margin: 0 20px 0 10px;
  ${mobile({ fontSize: "0.8em", marginLeft: "10px", marginRight: "0" })}
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

## SLIDER (mobile)

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



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

https://unsplash.com/@raphaellovaski
https://unsplash.com/photos/88IOcZz53eg
https://unsplash.com/photos/Tfbw4CFFPaY

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
 
 
  -->

 <br>

 <br>

- This is the continuation of **categories-and-products**

<br>

[<img src="/src/img/categories_products_done.gif" />]()

<br>
<br>
<br>

# 🍌

## Let's Begin!

> **⚠️** Sometimes **styled components** can cause issues, as you cannot see if there is an error when you miss a **semicolon**

<br>
<br>
<br>

# NEWSLETTER 🍯

<br>

### Start by Creating the Newsletter component

- type **rafce** to automatic create the component default

```javascript
import React from "react";

const Newsletter = () => {
  return (
    <div>
      <h1>newsletter</h1>
    </div>
  );
};

export default Newsletter;
```

 <br>

### Now export the component inside the Home.jsx

```javascript
import React from "react";
//
//
//
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
```

<br>
<br>

### Add some components for the default form

```javascript
import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";

//
//
const Container = styled.div``;
const Title = styled.div``;
const Desc = styled.div``;
//
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

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
```

<br>

### Add some styles

- I am not comfortable with the **newsletter** font so i will have to make some research

```javascript
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
```

[<img src="/src/img/newsletter_default.gif" />]()

<br>
<br>
<br>
<br>

# FOOTER

#### Create the Footer component inside the components folder, then import it inside the Home.jsx

<br>

- While in the Footer.jsx , split the 4 default components between: Left, center, right

```javascript
import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;

const Footer = () => {
  return (
    <Container>
      <h1>hello</h1>
    </Container>
  );
};

export default Footer;
```

<br>
<br>

## Use the colors props function to pass the color through props

- These colors are temporary as they dont match with the color palette i am using for my project (it s your choice to keep them)

<br>

> **background-color: #${(props) => props.color};**

 <br>

```javascript
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
const SocialContainer = styled.div``;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  //
  background-color: #${(props) => props.color};
  /* background-color: white; */
  display: flex;
  justify-content: center;
  align-items: center;
  //
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

//
//
//
<Container>
  <Left>
    <Logo>LAMA.</Logo>
    <Desc>
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don’t look even slightly believable.
    </Desc>
    <SocialContainer>
      <SocialIcon color="385999">
        <Facebook />
      </SocialIcon>
      {/*  */}
      <SocialIcon color="e440sf">
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
</Container>;
```

[<img src="/src/img/social-icons.jpg" />]()

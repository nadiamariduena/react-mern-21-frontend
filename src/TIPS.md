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

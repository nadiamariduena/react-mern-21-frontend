 <!-- 
 styles badge, at the end i decided to cusrom them like in the ecommercejs project
 where i had to create a styles.js file and add the styles there then export it as hook
 https://stackoverflow.com/questions/55766980/custom-color-to-badge-component-not-working
 
  <br>


Photographs for projects


FOOD and objects ----------

https://unsplash.com/@imdauphong

https://unsplash.com/photos/xLS_W6RVx-8

https://unsplash.com/@wendish

https://unsplash.com/@stilclassics

https://unsplash.com/@charlesdeluvio


PLACES ---------

https://unsplash.com/@spoelee4



PEOPLE ---------

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

- This is the continuation of **announcement-slider**

<br>

[<img src="/src/img/slider_funczionality_changes_colorsbutton.gif"/>]()

<br>
<br>
<br>

# 🍌

## Let's Begin!

> **⚠️** Sometimes **styled components** can cause issues, as you cannot see if there is an error when you miss a **semicolon**

<br>
<br>
<br>

# CATEGORIES 🍯

<br>

### Start by adding the categories objects inside the data.js

- Copy and paste the following:

> We will take of the pictures later

```javascript
export const categories = [
  {
    id: 1,
    img:
      "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "SHIRT STYLE!",
  },
  {
    id: 2,
    img:
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "LOUNGEWEAR LOVE",
  },
  {
    id: 3,
    img:
      "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "LIGHT JACKETS",
  },
];
```

<br>
<br>

## Now create the categories component and the CategoryItem.jsx

- import also the styled components

```javascript
import React from "react";
import styled from "styled-components";
//

import { categories } from "../data";

//
//
const Container = styled.div``;

const Categories = () => {
  return <Container></Container>;
};

export default Categories;
//
//
//CategoriesItem.jsx
//
import React from "react";
import styled from "styled-components";
//

//
//
const Container = styled.div``;
//
//

const CategoryItem = () => {
  return <Container></Container>;
};

export default CategoryItem;
```

<br>
<br>
<br>
<br>

## Now map. the item inside the data.js and pass them through <u>PROPS</u> to the CategoryItem.jsx, like so:

> **< CategoryItem item={item} / >**

```javascript
//
// Categories.jsx
//
import React from "react";
import styled from "styled-components";
//

import { categories } from "../data";
import CategoryItem from "./CategoryItem";

//
//
const Container = styled.div``;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
```

<br>
<br>

## Inside the CategoryItem.jsx import the props 'item' like so:

```javascript
const CategoryItem = ({item}) => {
```

<br>
<br>

### Go to the Home.jsx and import the Categories.jsx

```javascript
import React from "react";
//
//
//
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
```

<br>
<br>

### Add some default styles to the Categories.jsx

```javascript
//
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
//
//

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};
```

[<img src="/src/img/category1.jpg"/>]()

<br>
<br>

### Render the image and the rest of the items passed through props to the CategoryItem.jsx

```javascript
import React from "react";

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
  //
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
//
//
const Title = styled.h1`
  font-family: "Poppins-light";
  color: rgb(248, 248, 248);
  margin-bottom: 20px;
  letter-spacing: 1px;
`;
const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: rgb(248, 248, 248);
  border: 0.5px solid rgb(248, 248, 248);
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
```

[<img src="/src/img/categories2.gif"/>]()

<br>
<br>
<br>
<hr>
<br>
<br>

# PRODUCTS 🍯

<br>

<br>

### Start by adding the products objects inside the data.js

- Copy and paste the following:

```javascript
export const popularProducts = [
  {
    id: 1,
    img:
      "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
  },
  {
    id: 2,
    img:
      "https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
  },
  {
    id: 3,
    img:
      "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
  },
  {
    id: 4,
    img:
      "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
  },
  {
    id: 5,
    img:
      "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
  },
  {
    id: 6,
    img:
      "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
  },
  {
    id: 7,
    img:
      "https://www.vintageindustries.nl/download_front/qympzk1762/2217_Arrow_Jacket_Forest.png",
  },
  {
    id: 8,
    img:
      "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
  },
];
```

<br>
<br>

## Now create the Product.jsx and the Products.jsx

- We are going to do more or less the same thing we did with the categories

- import also the styled components

```javascript
//    ****
// Products.jsx
//    ****
import React from "react";
import styled from "styled-components";

//
//
const Container = styled.div``;

//
//

const Products = () => {
  return (
    <Container>
      <h1>hellos</h1>
    </Container>
  );
};

export default Products;
//
//
//
//
//    ****
// Product.jsx
//    ****
import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Product = () => {
  return (
    <Container>
      <h1>hellos</h1>
    </Container>
  );
};

export default Product;
```

<br>
<br>
<br>
<br>

## Lets import the data related to the products so to start mapping it, just like we did with the categories.

```javascript
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
```

<br>
<br>

### To see what you are doing , import the Products.jsx inside the Home.jsx

```javascript
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
```

<br>
<br>

## Now Continue with the Product.jsx

- Here we are going to create a circle(we will have the container background color and in more of that we will have a circle background color) .

<br>

- We will also add the icons, go to the Material Ui and choose the following: **ShoppingCartOutlined**, **SearchOutlined**, **FavoriteBorderOutlined**

```javascript
import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

//
//
const Container = styled.div`
  flex: 1;
  margin: 5px;
`;
const Circle = styled.div``;
const Image = styled.img``;
const Info = styled.div``;
const Icon = styled.div``;

//
//

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />

      <Info>
        {/*  */}
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        {/*  */}
        <Icon>
          <SearchOutlined />
        </Icon>
        {/*  */}
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
```

 <br>

### This is what we have until now

[<img src="/src/img/products_1.gif"/>]()

<br>
<br>

<br>

### Lets continue adding the styles

- Here we will be giving form to the img cards, using flex-box

- Add also the **flex-wrap:wrap** to the **Products.jsx**

```javascript
import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

//
//
const Container = styled.div`
  flex: 1;
  margin: 8px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* add this to see where you are at */
  border: 1px solid #000;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
const Image = styled.img`
  height: 75%;
`;
const Info = styled.div``;
const Icon = styled.div``;

//
//

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />

      <Info>
        {/*  */}
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        {/*  */}
        <Icon>
          <SearchOutlined />
        </Icon>
        {/*  */}
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
```

[<img src="/src/img/products_flexbox1.gif"/>]()

<br>
<br>

#### I noticed one of the pictures has an issue, just replaced it with another image from the same object, after all this is just for testing.

<br>

<br>

```javascript
const Container = styled.div`
  flex: 1;
  margin: 8px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  //you dont really need the color
  background-color: #f3f0ec;
  border: 1px solid #000;
  //
  // related to info
  position: relative;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #e0edf0;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

//
//
// This is going to be a mask on top of the products
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #aaaaaa;
  z-index: 3;
  //to center the icons
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  //
  display: flex;
  justify-content: center;
  align-items: center;
  //
  margin: 7px;
`;

//
//
```

<br>

#### This is going to be a mask on top of the products

- **position: relative**, together with the **position: absolute** is what is going to give us the mask effect, we will use this for the hover that we will be implementing **in te next step**

```javascript

const Container = styled.div`

  //
  // related to info
  position: relative;
//
//
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; //start at position 0, means at the top of the screen
  left: 0;
  background-color: #aaaaaa;
  z-index: 3;
```

[<img src="/src/img/products_pos-relative.gif" />]()

<br>
<br>

# ICONS HOVER

<br>

#### We will make them a bit bigger when hovering, to do that we will use <u>_transform scale_</u>

> The folowing is the **vanilla way** of doing it, another cool way is using **framer motion**.

#### [framer-motion **options**](https://www.framer.com/docs/examples/)

<br>

```javascript
const Icon = styled.div`
  //hover
  &:hover {
    background-color: #ffcda3;
    transform: scale(1.1); //1.1 is small, 2 a bit bigger
  }
`;
```

[<img src="/src/img/icons_hover.gif" />]()

<br>
<br>

# Now take care of the img hover

#### For this one we will do it differently

- Add a darker color to the Info and add to the color a bit of transparency

- Then add a default: **opacity: 0**

```javascript
const Info = styled.div`
  opacity: 0;
  //

  background-color: #0303031a;
`;
```

<br>

- Now go to the container on top and add a hover

```javascript
const Container = styled.div`
  //opacity
  &:hover ${info} {
  }
`;
```

<br>

## 🔴

### Here you will have an error, and it s because the Info{} is under the container

##### ReferenceError: Cannot access 'Info' before initialization

```javascript
ReferenceError: Cannot access 'Info' before initialization
Module.<anonymous>
src/components/Product.jsx:26
  23 |   position: relative;
  24 |   //
  25 |   //opacity
> 26 |   &:hover ${Info}{
  27 |   }
  28 | `;
  29 | const Circle = styled.div`
```

<br>

#### For this to be solved, you should place the Info{} above the Container{}

- like so

```javascript
//
//
// This is going to be a mask on top of the products
const Info = styled.div`
  opacity: 0;
  //
  //
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0303031a;
  z-index: 3;
  //to center the icons
  display: flex;
  justify-content: center;
  align-items: center;
`;
//
const Container = styled.div`
  flex: 1;
  margin: 8px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  //you dont really need the color
  background-color: #f3f0ec;
  border: 1px solid #000;
  //related to info
  position: relative;
  //
  //opacity
  &:hover ${Info} {
    opacity: 1;
  }
`;
```

[<img src="/src/img/categories_products_done.gif" />]()

### the code before continuing with the NEWSLETTER

```javascript
import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

//
// This is going to be a mask on top of the products
const Info = styled.div`
  opacity: 0;
  //
  //
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0303031a;
  z-index: 3;
  //to center the icons
  display: flex;
  justify-content: center;
  align-items: center;
  //
  //related to the hover img
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;
//
const Container = styled.div`
  flex: 1;
  margin: 8px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  //you dont really need the color
  background-color: #f3f0ec;
  /* border: 1px solid #000; */
  //related to info
  position: relative;
  //
  //opacity
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #e0edf0;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

//
//

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  //
  display: flex;
  justify-content: center;
  align-items: center;
  //
  margin: 7px;
  transition: all 0.5s ease-in-out;
  //
  //hover
  &:hover {
    background-color: #f3f3f3;
    transform: scale(1.1);
  }
`;

//
//

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />

      <Info>
        {/*  */}
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        {/*  */}
        <Icon>
          <SearchOutlined />
        </Icon>
        {/*  */}
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
```

### The Products.jsx

```javascript
import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

//
//
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

//
//

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
```

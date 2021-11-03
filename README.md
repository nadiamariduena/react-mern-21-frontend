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

- This is the continuation of **newsletter-footer**

<br>

[<img src="/src/img/newsletter-footer__done.gif" />]()

<br>
<br>
<br>

# 🍌

## Let's Begin!

> **⚠️** Sometimes **styled components** can cause issues, as you cannot see if there is an error when you miss a **semicolon**

<br>
<br>
<br>

# CATEGORIES PAGE (ProductList.jsx) 🍯

<br>

### Start by Creating the ProductList.jsx page component (inside the pages folder)

- type **rafce** to automatic create the component default

```javascript
import React from "react";
import styled from "styled-components";

//
const Container = styled.div`
  //
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //
`;

const ProductList = () => {
  return (
    <Container>
      <h1>hello</h1>
    </Container>
  );
};

export default ProductList;
```

 <br>

### INSTEAD of importing the component to the home.jsx we will go to the App.js and replace the Home.jsx for the ProductList.jsx, i think its just to visialize what we do until a certain point

<br>

- AFTER THAT it going to be blank

```javascript
import React from "react";
import ProductList from "./pages/ProductList";
// import  Home  from "./pages/Home";

const App = () => {
  // return <Home />;
  return <ProductList />;
};

export default App;
```

<br>

### Import all the component we just finished for the home page

```javascript
import React from "react";
import styled from "styled-components";
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

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <h1>hello</h1>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
```

[<img src="/src/img/productlist_page.gif" />]()

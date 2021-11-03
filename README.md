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

# PRODUCT<u>LIST</u> PAGE 🍊

#### (ProductList.jsx)

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

### INSTEAD of importing the component to the home.jsx we will go to the App.js and replace the Home.jsx for the ProductList.jsx, i think its just to visualize what we do until a certain point

<br>

- As depending of the outcome, it would be more easy to import the navbar, newsletter and footer inside the **app.js**, but as i said i still dont know the final outcome :)

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

<br>
<br>

### Now lets add the filter Options for the <u>COLOR</u>

```javascript
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
```

[<img src="/src/img/filter-options_1.gif" />]()

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

//
//
//

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

//
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

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
        </Filter>
        {/*  */}

        <Filter>filter2</Filter>
      </FilterContainer>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
```

<br>
<br>

### Now lets add the filter Options for the <u>SIZE</u>

```javascript
const Filter = styled.div`
  margin: 20px;
`;

//
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 20px 2px;
`;
const Option = styled.option`
  margin: 5px;
`;

//
//
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
</Filter>;
```

<br>
<br>

### Now lets add the filter Options for the <u>Sort Products</u>, this one is not in the same block, it will be in the block at the right

<br>

- I removed the **border** from the **Select** as i didn't like the strong white, instead i added a **white with some transparency (#ffffff6a;)** so that it could blend with the cream color of the background.

<br>

- Select styles options (to read):

##### [Awesome CSS Select Styles You Can Use Right Now](https://www.sliderrevolution.com/resources/css-select-styles/)

<br>

##### [React-Select offers a flexible, light-weight styling framework which is a thin abstraction over simple javascript objects using](https://react-select.com/styles)

<br>

- I will try to remove the ugly border from the dropdown once the project is done

<br>
<br>

```javascript
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 20px 2px;
  border: none;
  background-color: #ffffff6a;
`;
const Option = styled.option`
  margin: 5px;
  border: none;
`;

//
//
//


      <Title>Dresses</Title>
      <FilterContainer>
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
        {/*  */}
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
```

[<img src="/src/img/filter-options_2.gif" />]()

<br>

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
const Container = styled.div``;

//
//
//

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

//
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 20px 2px;
  border: none;
  background-color: #ffffff6a; //transparent
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

<br>
<br>
<br>

# PRODUCT PAGE 🥥

#### (Product.jsx)

<br>

### Start by Creating the Product.jsx page component (inside the pages folder)

- type **rafce** to automatic create the component default, then add the compoenents as shown below:

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
//

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <h1>hello</h1>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
```

 <br>

### INSTEAD of importing the component to the home.jsx we will go to the App.js and replace the Home.jsx for the Product.jsx, i think its just to visualize what we do until a certain point

- As depending of the outcome, it would be more easy to import the navbar, newsletter and footer inside the **app.js**, but as i said i still dont know the final outcome :)

<br>

- AFTER THAT it going to be blank

```javascript
import React from "react";
import Product from "./pages/Product";
// import  Home  from "./pages/Home";

const App = () => {
  // return <Home />;
  return <Product />;
};

export default App;
```

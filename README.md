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
import React from 'react'

const Cart = () => {
    return (
        <div>
            
        </div>
    )
}

export default Cart

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

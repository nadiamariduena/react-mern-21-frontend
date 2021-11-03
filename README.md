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

- This is the continuation of **product-and-ProductList-page**

<br>

[<img src="/src/img/filter-map-products.gif" />]()

<br>
<br>
<br>

# 🍌

## Let's Begin!

> **⚠️** Sometimes **styled components** can cause issues, as you cannot see if there is an error when you miss a **semicolon**

<br>
<br>
<br>

# REGISTER and LOGIN <u>PAGE</u> 🍍

#### (Register.jsx)

<br>

### Start by Creating the Register.jsx and the Login.jsx page component (inside the pages folder)

- type **rafce** to automatic create the component default

```javascript
// Register.jsx
import React from "react";

const Register = () => {
  return <div></div>;
};

export default Register;
//
//
// Login.jsx
import React from "react";

const Login = () => {
  return <div></div>;
};

export default Login;
```

 <br>

### INSTEAD of importing the component to the home.jsx we will go to the App.js and replace the Home.jsx for the Register.jsx, i think its just to visualize what we do until a certain point

<br>

- AFTER THAT: it's going to be blank

```javascript
import React from "react";
import Register from "./pages/Register";
// import  Home  from "./pages/Home";

const App = () => {
  // return <Home />;
  return <Register />;
};

export default App;
```

<br>

### START adding the first components

```javascript
import React from "react";
import styled from "styled-components";
//
//

const Container = styled.div``;

//
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

//
//
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
      </Wrapper>
    </Container>
  );
};

export default Register;
```

<br>

[<img src="/src/img/register-default.jpg" />]()

  <br>
  <br>

## Now create the form

<br>

```javascript
<Form>
  <Input placeholder="name" />
  <Input placeholder="last name" />
  <Input placeholder="username" />
  <Input placeholder="email" />
  <Input placeholder="password" />
  <Input placeholder="confirm password" />
  <Agreement>
    By creating an account, I consent to the processing of my personal data in
    accordance with the <b>PRIVACY POLICY</b>
  </Agreement>
  <Button>CREATE</Button>
</Form>
```

<br>

## Form styles

<br>

#### Tips: [Beautiful CSS box-shadow examples](https://getcssscan.com/css-box-shadow-examples)

[How do I blur the background but not the text that sits on top of it?](https://www.quora.com/How-do-I-blur-the-background-but-not-the-text-that-sits-on-top-of-it)

```javascript
<div style="opacity: 0.5">
  Background is Blurred
  <span style="opacity: 1">The text is "not" Blurred</span>
</div>
```

<br>

### I modified a bit the styles

[Original styles](https://github.com/safak/youtube/blob/react-shop-ui/src/pages/Register.jsx)

<br>

```javascript
import React from "react";
import styled from "styled-components";
//
//

const Container = styled.div``;

//
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

//
//      ** FORM **
//
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  //
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 40px 0px;
`;

const Button = styled.button`
  width: 40%;
  padding: 13px 20px;
  //background
  color: #121212;
  border: px solid #121212;
  background-color: transparent;

  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  transition: all 1s ease-in-out;
  //
  // ** Hover **
  //
  &:hover {
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
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        {/*  
        
        */}

        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          {/*  */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>

        {/*  
        
        */}
      </Wrapper>
    </Container>
  );
};

export default Register;
```

[<img src="/src/img/form_dafault.gif" />]()

<br>

## Now center the form an add abackground image

<br>

```javascript
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  //
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
`;
```

[<img src="/src/img/form_dafault_styled.gif" />]()

 <br>

 <br>

## The form is now ready, we can continue with the Login

 <br>

#### Copy the following from the Register.jsx and paste it inside the Login.jsx

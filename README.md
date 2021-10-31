 <!-- 
 
 
 
  <br>

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

 
 
 
 
  -->

 <br>

# 🐝

# Let's Begin!

> **For beginners:** Dont forget to add any new component to the Home.jsx and of course import it there. (just check the **Home.jsx** in each branch)

<br>

- **⚠️** Sometimes **styled components** can cause issues, as you cannot see if there is an error when you miss a **semicolon**

 <br>
 <br>
  <br>
 <br>

# <u> Announcement</u>

> Go to the components folder and create the **Announcement.jsx**

- In this component I will add some **special offers/discount etc**

```javascript
import React from "react";
import styled from "styled-components";

//
//

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 500;
  font-family: "Poppins-light";
`;

//

const Announcement = () => {
  return <Container>Super Deal! Freee Shipping on Orders Over $50</Container>;
};

export default Announcement;
```

<br>

##### Result

[<img src="/src/img/annoncement-default.jpg"/>]()

<br>
<br>
<br>

# <u> The Slider </u>

<br>

> Go to the components folder and create the **Slider.jsx**

```javascript
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

//
//

const Container = styled.div`
width:100%
  height: 100vh;
  display: flex;
  background-color:coral;
//   
`;
//
// Arrows
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  //
`;

//
//
//

const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
```

<br>

[<img src="/src/img/slider-default1.jpg"/>]()

<br>
<br>

#### Now lets position the arrows in the center of the page and 'each' to its respective side.

 <br>
 <br>

### We will use position absolute and position relative for that

- **Remember** that if you use position **absolute** in a **\*child**, the **parent** div etc should have a position **relative**

```javascript
const Container = styled.div`
width:100%
  height: 100vh;
  display: flex;
  background-color:coral;
//  
// arrow position
position:relative; 
`;
//
// Arrows
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  //
  // arrow position
  position: absolute;
  //
`;
```

<br>

[<img src="/src/img/slider-default_arrow-pos1.jpg"/>]()

### At this point they are 'one on top of another', thats why you cannot see the other arrow, now lets center them in the middle of the page:

```javascript
import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import styled from "styled-components";

//
//

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  //
  //
  position: relative;
`;
//
// Arrows
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  //
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  //
`;

//
//
//

const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
```

[<img src="/src/img/slider-default_arrow-pos2_center.jpg"/>]()

<br>

## :honey_pot:

## To position the arrows to each side, you will have to use <u>PROPS</u>

- Apparently what we will do next **(to position then: left and right side)** is one of the best features of the styled components

<br>

#### Start by adding a direction to the arrows

```javascript
<Container>
  <Arrow direction="left">
    {" "}
    //here------->
    <ArrowLeftOutlined />
  </Arrow>
  <Arrow direction="right">
    {" "}
    //here------->
    <ArrowRightOutlined />
  </Arrow>
</Container>
```

<br>

### Now lets use this props: ArrowRightOutlined, direction="left , here below:

```javascript
  // props direction=
//   Here we are telling:
// 1 we will tell it 'take this props': left: ${(props)
// 2 if the direction is  === "left", if its true, then its going to be 10px to one side
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
```

## [logical 'AND' operator (&&)](https://docs.microsoft.com/en-us/cpp/cpp/logical-and-operator-amp-amp?view=msvc-160)

> The **logical 'AND' operator (&&)** <u>returns true if both operands are true and returns false otherwise.</u> The operands are implicitly converted to type bool before evaluation, and the result is of type bool. Logical AND has left-to-right associativity.

- The operands to the logical AND operator **don't need to have the same type, but they must have boolean, integral, or pointer type.** The operands are commonly relational or equality expressions.

[<img src="/src/img/slider_props_arrows_ANDoperator.gif"/>]()

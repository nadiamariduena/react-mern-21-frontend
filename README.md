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

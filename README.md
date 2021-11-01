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

 
 
 
 
  -->

 <br>

 <br>

- This is the continuation of **default-home-and-navbar**

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

<br>
<br>

#### Give the arrows a bit of opacity, then delete the background-color: coral; , as we are going to add the 'slides

```javascript
// props direction=
// Arrows
const Arrow = styled.div`
  //  MORE DATA ...

  //
  // p
  right: ${(props) => props.direction === "right" && "10px"};
  //
  margin: auto;
  opacity: 0.5; //****** here
  cursor: pointer;
  //
`;
```

<br>
<br>

# 🐒

## Start by adding the wrapper that will include the images

1. **import** the img:

```javascript
import img1 from "../img-store/oladimeji-odunsi-3.jpg";
```

<br>

2. The **wrapper** will be situated between the arrows

3. add the content **inside the ---slide ---**

<br>

```javascript
// ----------------------- slide --------------
const Wrapper = styled.div`
  height: 100%; //important
`;
//
//

const Slide = styled.div`
  display: flex;
  align-items: center;
`;
//blocl img 1   ---------------
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img``;

//
// block text 2  ---------------
const InfoContainer = styled.div`
  flex: 1;
`;
//
// ----------------------- slide --------------
/*










*/
const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      // ----------------------- slide --------------
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src={img1} />
          </ImgContainer>
          <InfoContainer></InfoContainer>
        </Slide>
      </Wrapper>
      // ----------------------- slide --------------
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
```

<br>
<br>

## At this point the image is too large, lets style it, add the following:

- To contain the image you will add some width and height values:

```javascript
// ----------------------- slide --------------
const Wrapper = styled.div`
  height: 100%;
`;
//
//

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  /*  */
  display: flex;
  align-items: center;
`;
//blocl img 1   ---------------
const ImgContainer = styled.div`
  height: 100%;
  /*  */
  flex: 1;
  background-color: #f0f;
`;
const Image = styled.img`
  height: 100%; //80% default
`;

//
```

<br>

#### Result

<br>

[<img src="/src/img/slide_prcess_img1.jpg"/>]()

<br>
<br>

## Now lets handle the text (it will also slide with the image)

```javascript
//
//
// block text 2  ---------------
const InfoContainer = styled.div`
  background-color: #ff0;
  flex: 1;
  padding: 50px;
`;
//
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 1.2em;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 1.3em;
  background-color: transparent;
`;
//
//
// ----------------------- slide --------------

//
//
//
<Wrapper>
  <Slide>
    <ImgContainer>
      <Image src={img1} />
    </ImgContainer>
    {/* 
          
          
          */}
    <InfoContainer>
      {/* 
          
          
          */}
      <InfoContainer>
        <Title>SUMMER SALE</Title>
        <Desc>
          DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
        </Desc>
        <Button>SHOW NOW</Button>
      </InfoContainer>
    </InfoContainer>
  </Slide>
</Wrapper>;
```

<br>
<br>

## I did some changes to the original styles, so this is what we have until now:

[<img src="/src/img/slide_prcess_img2_before_animation.jpg"/>]()

```javascript
import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import styled from "styled-components";

//
import img1 from "../img-store/oladimeji-odunsi-1.jpg";
//

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

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
  //
  // props direction=
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  //
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  //
`;

//
// ----------------------- slide --------------
const Wrapper = styled.div`
  height: 100%;
`;
//
//

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  /*  */
  display: flex;
  align-items: center;
`;
//blocl img 1   ---------------
const ImgContainer = styled.div`
  height: 100%;
  /*  */
  flex: 1;

  /* background-color: #fde9d7; */
`;
const Image = styled.img`
  /* height:80%;  */
  width: 84%;
  min-height: auto;
  object-fit: cover;
`;

//
// block text 2  ---------------
const InfoContainer = styled.div`
  /* background-color: #ff0; */
  flex: 1;
  padding: 50px 50px 50px 20px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
//
const Title = styled.h1`
  font-size: 70px;
  font-family: "Poppins-medium";
  color: #121212;
`;
const Desc = styled.p`
  margin: 50px 10px 50px 0px;
  font-size: 1.3em;
  font-weight: 500;
  font-family: "Poppins-light";
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 1.3em;
  background-color: transparent;
  border: 1px solid #000;
`;
//
//
//
// ----------------------- slide --------------

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src={img1} />
          </ImgContainer>
          {/* 
          
          
          */}
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>

      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
```

<br>
<br>

# 🍯

## Now duplicate the SLIDER to have something to slide on

<br>

[<img src="/src/img/slider_duplica-1.gif"/>]()

<br>

### Now lets change the direction

- Go to the wrapper and add a **display:flex**, the sliders are now positioned side by side, but we cant see them, also add an **overflow:hidden**, so that it dont shake from side to side.

```javascript
const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
```

<br>
<br>

🌈

## COLOR PROPS

### Lets add some background color to see in which slider we are,

- Pass them as **PROPS**

<br>

- Add the following line inside the Slider

```javascript
bg='fcf1ed'

// like so:

 <Slide bg='f5fafd'>
          <ImgContainer>
            <Image src={img1} />
          </ImgContainer>

          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
```

<br>
<br>

### Then create the function to make the BG available:

> **#${props=>props.bg};**

<br>

```javascript
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  // BG function color
  //color PROPS
  background-color: #${(props) => props.bg};
  /* background-image: url("../img-store/oladimeji-odunsi-2.jpg");
  background-size: cover; */
  //
  //
`;
```

<br>
<br>
<br>

# 🚧

# SLIDER FUNCTIONALITY

#### Lets create a click event to handle the left and right side, and after that we are going to handle that click.

- add the following to the arrows:

```javascript
onClick={() => handleClick("left")}>
onClick={() => handleClick("right")}>
```

<br>

- to avoid the error **create the function** linked to the **handleClick**

```javascript
const Slider = () => {
  //
  //

  const handleClick = (direction) => {};

  //
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
```

<br>

## Check the following, so that you see that the pictures are side by side:

<br>

- Add this: **transform: translateX(-100px);** , the translate will move it to the X direction, **minus** the pixels you add as values, in this case **100px**

<BR>

```javascript
// ----------------------- slide --------------
const Wrapper = styled.div`
  height: 100%;
  /*  */
  display: flex;
  //
  transform: translateX(-100px);
  //
`;
```

<br>

[<img src="/src/img/slider_funczionality1.gif"/>]()

<br>

### NOW TRY adding: <u>transform: translateX(-100vw);</u>

[<img src="/src/img/slider_funczionality2.gif"/>]()

<br>

## 🌞

#### [Why Moving Elements With Translate() Is Better Than Position:absolute Top/left ](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/)

<br>
<br>

### So for now its going to stay at 0

```javascript
// ----------------------- slide --------------
const Wrapper = styled.div`
  transform: translateX(0vw);
  //
`;
```

<br>

## now add a z-index to the arrows, so that they come in front of the layers

```javascript
// Arrows
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  /* background-color: #fff7f7; */
  //
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  //
  // props direction=
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  //
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  //
  z-index: 2;
`;
```

<br>
<br>

### Now we can start with the serious stuff. Create the hook to handle the state change

- at the beginning we are setting it at 0: **useState(0);**

```javascript
import React, { useState } from "react";
//
//
const Slider = () => {
  //
  const [slideIndex, setSlideIndex] = useState(0);
  //
```

<br>

### Now create a file where you will store all the data from the sliders

- create it inside the **src** folder

- copy the following data from [the official repo](https://github.com/safak/youtube/blob/react-shop-ui/src/data.js)

```javascript
export const sliderItems = [
  {
    id: 1,
    img: "img-store/oladimeji-odunsi-1.jpg",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1e",
  },
  {
    id: 2,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "9DCBDF",
  },
  {
    id: 3,
    img: "../img-store/oladimeji-odunsi-2.jpg",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "FFD647",
  },
];
```

### Once you added the 3 OBJECTS with the slider data, you can now delete 2 of them in the Slider.jsx

- import the data.js hook , like so:

```javascript
//
import { sliderItems } from "../data";
```

<br>

### Now map the 2 other sliders here:

```javascript
<Wrapper>
  {sliderItems.map((items) => (
    <Slide bg="fcf1ed">
      <ImgContainer>
        <Image src={img1} />
      </ImgContainer>

      <InfoContainer>
        <Title>SUMMER SALE</Title>
        <Desc>
          DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
        </Desc>
        <Button>SHOW NOW</Button>
      </InfoContainer>
    </Slide>
  ))}

  {/*  */}
</Wrapper>
```

<br>

### After you start mapping the data from the the data.js, replace a couple of things

- As you can see, you dont need to have the text or the images here (as you used to have), as all is coming from the the data.js

```javascript
<Wrapper>
  {sliderItems.map((items) => (
    <Slide bg={items.bg}>
      <ImgContainer>
        <Image src={items.img} />
      </ImgContainer>

      <InfoContainer>
        <Title>{items.title}</Title>
        <Desc>{items.desc}</Desc>
        <Button>SHOW NOW</Button>
      </InfoContainer>
    </Slide>
  ))}

  {/*  */}
</Wrapper>
```

### The SET STATE

```javascript
const Slider = () => {
  //
  const [slideIndex, setSlideIndex] = useState(0);
  //

  const handleClick = (direction) => {
    //1 Remember you default state is (0)
    // 2 So IF (direction) is left, we are going to do something
    if (direction === "left") {
      // if its not the first item make it
      // minus 1, which will make it to slide to the previous img to the left
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      //  slideIndex-1(push it to the left)
      // 4 if it s not ':' (which means if it s our first slide) then you can go until the last item which is 2
      // NOW THE RIGHT SIDE HERE BELOW:
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      // 5 if slider index is smaller than 2, it means we can go to the
      // right side, so we can increase our slide index + 1, if it s not, then we can return to our first slide which is cero : 0
      //
      // so what it s doing is that if we reach the end(in this case2) it will send us to the 0 which is the beginning
    }
  };
```

<br>

### Now lets use this values, pass it first as props inside the wrapper, like so:

- Go to the styles

```javascript
  <Wrapper slideIndex={slideIndex}>

```

<br>

#### Now Go to the styles and link it to the wrapper props

```javascript
// Before slideIndex
  transform: translateX(0vw);
  //100 will move it to the right
  //-100 will move the slider to the left
//
//
//
// after
//
// So here we are telling it to take the (props) and then multiply the props * for 100vw, which will make the whole 100vw of the screen to move
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  //100 will move it to the right
  //-100 will move the slider to the left
```

<br>
<br>

### Lets summarize the important points

```javascript
// 1 the arrows linked to the function that will contain the logic of the slider
<Arrow direction="left" onClick={() => handleClick("left")}>
  <ArrowLeftOutlined />
</Arrow>;

//
//
// 2 the data inside the wrapper
{
  sliderItems.map((items) => (
    <Slide bg={items.bg}>
      <ImgContainer>
        <Image src={items.img} />
      </ImgContainer>

      <InfoContainer>
        <Title>{items.title}</Title>
        <Desc>{items.desc}</Desc>
        <Button>SHOW NOW</Button>
      </InfoContainer>
    </Slide>
  ));
}
//
//
//
//
// 3 initializing the set, that will be used to change the state of the arrows
const [slideIndex, setSlideIndex] = useState(0);
//
//
//
//
//
// 4 the if statement (the logic of the slider)
const handleClick = (direction) => {
  if (direction === "left") {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  } else {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  }
};
//
//
//
//
// 5 use the state inside the wrapper
 <Wrapper slideIndex={slideIndex}>
```

```javascript
// 6 link the state to the style
// ----------------------- slide --------------
const Wrapper = styled.div`
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
```

[<img src="/src/img/slider_funczionality3_ready.gif"/>]()

<br>
<br>
<br>

### Add the Animation

- **warning**: the slower the animation is, the more your performance will suffer, so lets say that you add 6s (super smooth) can be bad for big stuff 100vw like this, so lets just add 1.2s

```javascript
 transition: all 1.2s ease;
```

<br>

### This is what we have until now

```javascript
import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import styled from "styled-components";
//
import { sliderItems } from "../data";
//
import img1 from "../img-store/oladimeji-odunsi-2.jpg";
//

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: #ff0; */
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
  //
  // props direction=
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  //
  margin: auto;
  opacity: 0.4;
  cursor: pointer;
  //
  z-index: 2;
`;

//
// ----------------------- slide --------------
const Wrapper = styled.div`
  height: 100%;
  /*  */
  display: flex;
  //
  transition: all 1.2s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  //100 will move it to the right
  //-100 will move the slider to the left
`;
//
//

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  /*  */
  display: flex;
  align-items: center;
  /*  */
  /* background-image: url("../img-store/oladimeji-odunsi-2.jpg");
  background-size: cover; */
  //
  //
  //color PROPS
  background-color: #${(props) => props.bg};
`;
//blocl img 1   ---------------
const ImgContainer = styled.div`
  height: 100%;
  /*  */
  flex: 1;

  /* background-color: #fde9d7; */
`;
const Image = styled.img`
  /* height:80%;  */
  width: 84%;
  min-height: auto;
  object-fit: cover;
`;

//
// block text 2  ---------------
const InfoContainer = styled.div`
  /* background-color: #ff0; */
  flex: 1;
  padding: 50px 50px 50px 20px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
//
const Title = styled.h1`
  font-size: 70px;
  line-height: 68px;
  font-family: "Poppins-medium";
  color: #121212;
`;
const Desc = styled.p`
  margin: 50px 10px 50px 0px;
  font-size: 1.3em;
  font-weight: 500;
  font-family: "Poppins-light";
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 1.3em;
  background-color: transparent;
  border: 1px solid #000;
`;
//
//
//
// ----------------------- slide --------------

const Slider = () => {
  //
  const [slideIndex, setSlideIndex] = useState(0);
  //

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  //
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide bg={items.bg}>
            <ImgContainer>
              <Image src={items.img} />
            </ImgContainer>

            <InfoContainer>
              <Title>{items.title}</Title>
              <Desc>{items.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}

        {/*  */}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
```

<br>
<br>
<br>

# A bit curious 🍰

> After i saw the teacher manipulating the background color through PROPS (from data that came from the data.js), **i felt excited about the possibilities of changing not only** the font but every color in the slider depending of the slide we are.

<br>

So i proceeded to include the button inside the data.js so that i could also modify the color depending of the slide

```javascript
// data.js
    fColor: "ffffff",
    button: "shop now",
```

<br>

## the way it looks inside the Slider.js

- I added the **fColor** like so: **fColor={items.fColor}**

```javascript
<Wrapper slideIndex={slideIndex}>
  {sliderItems.map((items) => (
    <Slide bg={items.bg} fColor={items.fColor}>
      <ImgContainer>
        <Image src={items.img} />
      </ImgContainer>

      <InfoContainer>
        <Title>{items.title}</Title>
        <Desc>{items.desc}</Desc>
        <Button fColor={items.fColor}>{items.button}</Button>
      </InfoContainer>
    </Slide>
  ))}

  {/*  */}
</Wrapper>
```

### and in the styled components...

```javascript
const Button = styled.button`
  padding: 10px;
  font-size: 1.3em;
  background-color: transparent;
  text-transform: uppercase;
  //
  // colors props from data.js
  border: 1px solid #${(props) => props.fColor};
  color: #${(props) => props.fColor};
`;
```

[<img src="/src/img/slider_funczionality_changes_colorsbutton.gif"/>]()

<br>
<br>
<hr>

# MORE CHANGES

### (related to calc)

##### [A Complete Guide to calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/)

- This one is not sure i will keep as, we have a long way until the project is ready

#### I decided to add a calc to the container of the slider because i was feeling a bit uncomfortable seeing the box getting out of sight, so i decided to test the <u>calc </u> to try to reduce the size of the slider box (100vh), depending of the size of the navbar and the announcement component.

<br>

- I still dont know if i did it correctly but i got what i wanted, the box reduced its size (the yellow is just to see if it worked)

**the calculation**, it s just the size of the navbar and announcement in(43px) + the slider height 100vh, I wanted to see how it would look like if i was testing it from the Home.jsx as if it has to be done, it should be done there, but i did it in the Slider to have just a preview. why i didn't do it inside the Home.jsx? because we still have more compoenents to add and its useless.

> I ended up adding this calc below, and this is how it looks in my **1680x1050** screen

```javascript
  height: calc(100vh - 12.5vh);
```

<br>

[<img src="/src/img/slider_funczionality_changes_calc.gif"/>]()

<br>
<br>
<br>
<br>

## THE SLIDER CODE after changes

```javascript
import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import styled from "styled-components";
//
import { sliderItems } from "../data";
//
// import img1 from "../img-store/oladimeji-odunsi-2.jpg";
//

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* height: calc(100vh - 43px); */

  display: flex;
  background: #f09819; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #edde5d,
    #f09819
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #edde5d,
    #f09819
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
  //
  // props direction=
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  //
  margin: auto;
  opacity: 0.4;
  cursor: pointer;
  //
  z-index: 2;
`;

//
// ----------------------- slide --------------
const Wrapper = styled.div`
  height: 100%;

  /*  */
  display: flex;
  //
  transition: all 1.2s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  //100 will move it to the right
  //-100 will move the slider to the left
`;
//
//

const Slide = styled.div`
  width: 100vw;
  /* height:100vh; */
  height: calc(100vh - 12.5vh);

  /*  */
  display: flex;
  align-items: center;
  /*  */
  /* background-image: url("../img-store/oladimeji-odunsi-2.jpg");
  background-size: cover; */
  //
  //creme color fcf1e
  //color PROPS
  background-color: #${(props) => props.bg};
  color: #${(props) => props.fColor};
`;
//blocl img 1   ---------------
const ImgContainer = styled.div`
  height: 100%;
  /*  */
  flex: 1;
  overflow: hidden;
  /* background-color: #fde9d7; */
`;
const Image = styled.img`
  /* height:80%;  */
  width: 80%;

  min-height: auto;
  object-fit: cover;
`;

//
// block text 2  ---------------
const InfoContainer = styled.div`
  /* background-color: #ff0; */
  flex: 1;
  padding: 50px 50px 50px 20px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
//
const Title = styled.h1`
  font-size: 70px;
  line-height: 68px;
  font-family: "Poppins-medium";
  /* color: #121212; */
`;
const Desc = styled.p`
  margin: 50px 10px 50px 0px;
  font-size: 1.3em;
  font-weight: 500;
  font-family: "Poppins-light";
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 1.3em;
  background-color: transparent;
  text-transform: uppercase;
  border: 1px solid #${(props) => props.fColor};
  color: #${(props) => props.fColor};
`;
//
//
//
// ----------------------- slide --------------

const Slider = () => {
  //
  const [slideIndex, setSlideIndex] = useState(0);
  //

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  //
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide bg={items.bg} fColor={items.fColor}>
            <ImgContainer>
              <Image src={items.img} />
            </ImgContainer>

            <InfoContainer>
              <Title>{items.title}</Title>
              <Desc>{items.desc}</Desc>
              <Button fColor={items.fColor}>{items.button}</Button>
            </InfoContainer>
          </Slide>
        ))}

        {/*  */}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
```

## THE data.js CODE after changes

```javascript
//
// before
//
export const sliderItems = [
  {
    id: 1,
    img: "https://i.ibb.co/XsdmR2c/1.png",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
];

//
//
// after
export const sliderItems = [
  {
    id: 1,
    img: "img-store/oladimeji-odunsi-3.jpg",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "B4BCDC",
    fColor: "ffffff",
    button: "shop now",
  },
  {
    id: 2,
    img: "../img-store/oladimeji-odunsi-2.jpg",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "F9DA8F",
    fColor: "121212",
    button: "shop now",
  },
  {
    id: 3,
    img: "img-store/oladimeji-odunsi-1.jpg",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "9DCBDF",
    fColor: "121212",
    button: "shop now",
  },
];
```

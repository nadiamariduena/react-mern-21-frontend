 <br>

# 🐻 🍯

# Let's Begin!

## 1. Install the dependencies

```javascript
// copy and paste the following
npm install @material-ui/core @material-ui/icons   react-router-dom node-sass@4.14.1 styled-components

// npm i styled-components
```

 <br>

##### DOCUMENTATION 1: [The React UI library](https://mui.com/)

##### DOCUMENTATION 2: [Material-UI](https://www.npmjs.com/package/@material-ui/core)

##### DOCUMENTATION / icons: [Material-UI](https://mui.com/components/material-icons/)

<br>

### 2. Install the shortcuts extension [EMMET](https://code.visualstudio.com/docs/editor/emmet)

- Go to your extensions icon (at the left side of your screen 'in vs code'), and install the following:

<br>

### ES7 React/Redux/GraphQl/React-Native :thumbsup:

> You will be using the extension every time you create a new component (practically from everything)

 <br>
 <hr>
 <br>

# 🐒

<br>

# DEFAULT > Home, Navbar

<br>

### Lets start by creating the pages folder

- create the pages folder
- inside of it, create the Home.jsx

<br>

> Here you can see how the [**emmet extension**](https://code.visualstudio.com/docs/editor/emmet) auto complete and automatically create the import on top of the file

[<img src="/src/img/compo_after_install_emet.gif"/>]()

<br>

### Once the Home.jsx has been created, type the following:

- rfc or rafce to create a **functional component**, rfc creates a function and the rafce creates an arrow function.

<br>
<br>

# 🍯

## Create the Components folder

### The navbar

- Inside of it create the **navbar**

<br>

<!-- gif

[<img src="/src/img/creating__products_commercejs2.gif"/>]()
-->

### In this project we will be using style components instead of css

<br>

- install styled-components (in case you forgot), otherwise it will show an error

```javascript
npm i styled-components
```

<br>

- **style components** are like css styles but have **more advantages**, this styles are included in the component you work (as you can see in the code below), **instead of having them in separated files** for each component.

<br>

```javascript
import React from "react";
import styled from "styled-components";
//
//

const Container = styled.div`
  height: 60px;
  background-color: orange;
`;

//
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
`;
//

const Left = styled.div``;
//
const Center = styled.div``;
//
const Right = styled.div``;
//
//
//
//
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>Left</Left>
        <Center>center</Center>
        <Right>right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
```

#### at this point it s not horizontal, so we will use Flex box

- Lets add the display:flex to put them side by side

<br>

```javascript
     <Left>Left</Left>
        <Center>center</Center>
        <Right>right</Right>
```

<br>

##### Now they are side by side. Lets give them an spacing, so that they are no so close to each other

```javascript
  justify-content: space-between;
```

<br>

### But what happens if we write something really long, like this for example:

```javascript
<Wrapper>
  <Left>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
    reprehenderit culpa eum dolore laboriosam at tempore ullam corporis
    obcaecati suscipit?
  </Left>
  <Center>center</Center>
  <Right>right</Right>
</Wrapper>
```

[<img src="/src/img/flex.jpg"/>]()

#### Its not bad but this is not what we want for our project, what we want is to devide the 3 columns to exact parts, for that we can do the following:

<br>

- divide them into 33.33% to each

<br>

```javascript
const Left = styled.div`
  // if you consider the wrapper 100%
  width: 33.3%;
`;
//
const Center = styled.div`
  width: 33.3%;
`;
//
const Right = styled.div`
  width: 33.3%;
`;
//
//
```

<br>

[<img src="/src/img/flex1.jpg"/>]()

<br>

# Flexbox

#### or use a **trick from flex box**

```javascript
const Left = styled.div`
  // if you consider the wrapper 100%
  flex: 1;
  border: 1px solid #000;
`;
//
const Center = styled.div`
  flex: 2;
  border: 1px solid #000;
`;
//
const Right = styled.div`
  flex: 1;
  border: 1px solid #000;
`;
//
```

[<img src="/src/img/flex2.jpg"/>]()

<br>

#### But what if we add 2 units to the middle column?

```javascript
const Left = styled.div`
  // if you consider the wrapper 100%
  flex: 1;
  border: 1px solid #000;
`;
//
const Center = styled.div`
  flex: 2;
  border: 1px solid #000;
`;
//
const Right = styled.div`
  flex: 1;
  border: 1px solid #000;
`;
//
```

[<img src="/src/img/flex3.jpg"/>]()

<br>
<br>

### Now lets create some components for the 'left side'

0:17:28

#### You will have to download material UI to use the search icon, its important because otherwise you will have to create the box search by yourself and if your do:

- The box will not have the same level of the center and right column, since the box of the language is on top

<br>

- **a solution** in case your dont want to use the icon from material Ui, use flex-direction: row inside the left column, to position the 2 boxes side by side. Another option, create 4 columns but (i dont know how it will work later in the project)

```javascript
const Left = styled.div`
  // if you consider the wrapper 100%
  flex: 1;
  //
  display: flex;
  align-items: center;
  flex-direction: row;
  //
  border: 0.5px solid green;
`;
//
//
const Input = styled.input`
  border: none; //this will  remove the grey border
`;
//
//
//
<Left>
  <Language>EN</Language>
  <SearchContainer>
    <Input placeholder="search" />
  </SearchContainer>
</Left>;
```

##### result

[<img src="/src/img/flex4_searchbar.jpg"/>]()

<br>

### But lets do it like in the tutorial

```javascript
import { Search } from "@material-ui/icons";
//
//

const Left = styled.div`
  // if you consider the wrapper 100%
  flex: 1;
  //
  display: flex;
  align-items: center;
  flex-direction: row;
  //
  border: 0.5px solid green;
`;
//
//
//
//
<Left>
  <Language>EN</Language>
  <SearchContainer>
    <Input />
    <Search />
  </SearchContainer>
</Left>;
```

<br>

[<img src="/src/img/input_search_MUI.gif"/>]()

<br>

<br>
<br>
<br>

### Now lets create the MenuItem

Go to **[Material Ui page](https://mui.com/components/badges/)** and copy the following then paste it inside the **Right** block **(replace the default for ShoppingCartOutlined )**, also **dont forget to import** the Material ui badge.

```javascript
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

//
//
//
<Right>
  <MenuItem>REGISTER</MenuItem>
  <MenuItem>SIGN IN</MenuItem>
  <MenuItem>
    <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlined />
    </Badge>
  </MenuItem>
</Right>;
```

<br>
<br>

### Lets give some STYLE to the Search icon

```javascript
<Left>
  <Language>EN</Language>
  <SearchContainer>
    <Input />
    <Search style={{ color: "gray", fontSize: 16 }} />
  </SearchContainer>
</Left>
```

[<img src="/src/img/search-icon-styling.gif"/>]()

<br>
<br>
<br>

### We ARE done for now with the NAVBAR, lets see what we have:

```javascript
import React from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import styled from "styled-components";

//
//

const Container = styled.div`
  padding: 10px 0;
  min-height: 1vh;
  background-color: #ffffff;
`;

//
const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  //   will divide them in 3 parts
  justify-content: space-between;
`;
// ----------------------

const Left = styled.div`
  // if you consider the wrapper 100%
  flex: 1; //with this you dont have to add 33.33% to each box
  display: flex;
  align-items: center;
  flex-direction: row;
  //
  // border: 0.5px solid green;
`;
//
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
//
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
//
// ----------------------
//
//
//
const Center = styled.div`
  flex: 2;

  text-align: center;
  // border: 1px solid #000;
`;
//
//LOGO
const Logo = styled.h1`
  font-weight: bold;
  font-family: "Syncopate-Bold";
  letter-spacing: 15px;
`;
//
//
//
//
//
// ----------------------
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  // border: 1px solid #000;
`;
//
//
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 0 15px 0 10px;
`;

//
//

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
```

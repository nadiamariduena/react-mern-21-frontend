### START adding the first components

- I will copy and paste the code from the original because most of it is just repetitive stuff, the only thing i will care to test is the statements, as i wanted to have more options for the buttons

<br>

- Here below i added a prop color inside the 2 **TopButton**, the goal was to have different hover colors for each button but even if the 2 versions worked i dont feel like it s all, i feel there s a way to make it shorter, so i will make a research at the end of the project.

<br>

> border: 2px solid ${(props) => props.type === "filled" && props.color};

<br>

## no.1 version

```javascript
const TopButton = styled.button`
  width: 18%;
  padding: 10px 25px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  transition: all 1s ease-in-out;
  //if props is equal to 'filled' then border none, in this case
  /* i want color in the border (props.color) just to test */
  border: 2px solid ${(props) => props.type === "filled" && props.color};
  //
  //
  //if props is equal to filled ? if its, then it will be black,
  /* if it s not filled it will be  transparent*/
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  //
  color: ${(props) => props.type === "filled" && "white"};
  //
  //
  //
  //

  &:hover {
    //if props is equal to 'filled' on HOVER ,props.color(check the props on filled button)
    border: 2px solid ${(props) => props.type === "filled" && props.color};

    color: #121212;
    /* border: 1px solid #121212; */
    background-color: ${(props) =>
      props.type === "transparento" ? props.bg : "transparent"};
  }

  //
`;

//
//
//
<Wrapper>
  <Title>YOUR BAG</Title>
  <Top>
    <TopButton type="transparento" bg="#ffffff">
      CONTINUE SHOPPING
    </TopButton>
    <TopTexts>
      <TopText>Shopping Bag(2)</TopText>
      <TopText>Your Wishlist (0)</TopText>
    </TopTexts>
    <TopButton type="filled" color="#121212">
      CHECKOUT NOW
    </TopButton>
  </Top>
</Wrapper>;
```

<br>
<br>

## no.2 version

> border: ${((props) => props.type === "filled" && "0.5px", "solid")};

<br>

```javascript
const TopButton = styled.button`
  padding: 10px 25px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  transition: all 1s ease-in-out;
  //if props is equal to 'filled' then border none
  border: ${((props) => props.type === "filled" && "0.5px", "solid")};
  //
  //
  //if props is equal to filled ? its then ,it will be black,
  /* if it s not filled it will be  transparent*/
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  //
  color: ${(props) => props.type === "filled" && "white"};
  //
  //
  //

  //
  //
  &:hover {
    padding: 10px 25px;
    //if props is equal to 'filled' on HOVER ,props.color(check the props on filled button)
    border: ${((props) => props.type === "filled" && props.color,
    "10px",
    "solid")};
    color: #121212;
    /*   */
    background-color: ${(props) =>
      props.type === "transparento" ? props.bg : "transparent"};
  }

  //
`;
```

[<img src="/src/img/if_statements_buttons_options.gif" />]()

<br>

### Original

```javascript
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
//
//
//
<Top>
  <TopButton>CONTINUE SHOPPING</TopButton>
  <TopTexts>
    <TopText>Shopping Bag(2)</TopText>
    <TopText>Your Wishlist (0)</TopText>
  </TopTexts>
  <TopButton type="filled">CHECKOUT NOW</TopButton>
</Top>;
```

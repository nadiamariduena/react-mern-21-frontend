# ERROR NO.1 🔴

## This error isn't a huge thing, but can bother you at the end.

<br>

- Add the **key** to anything that is using a **.map**

<br>

- **key={items.id}** , the rest of the keys (other files) will be related to the argument (name) you use in each **.map**

```javascript
// Slider.jsx
{
  sliderItems.map((items) => (
    <Slide bg={items.bg} fColor={items.fColor} key={items.id}></Slide>
  ));
}
//
//
//  Categories.jsx
{
  categories.map((item) => <CategoryItem item={item} key={item.id} />);
}
//
//
// Products.jsx
{
  popularProducts.map((item) => <Product item={item} key={item.id} />);
}
```

<br>

## now check the console in the browser and see if you still have errors related to it.

<br>
<br>
<br>
<hr>

<br>

# ERROR NO.2 🔴

### PRODUCTS

#### Here you will have an error, and it s because the Info{} is under the container

###### ReferenceError: Cannot access 'Info' before initialization

<br>

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

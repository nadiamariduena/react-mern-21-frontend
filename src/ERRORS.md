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
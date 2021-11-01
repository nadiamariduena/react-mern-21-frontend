https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0

https://www.deadcoderising.com/2017-03-28-es6-destructuring-an-elegant-way-of-extracting-data-from-arrays-and-objects-in-javascript/

---

https://blog.opendigerati.com/how-to-extract-nested-data-from-arrays-and-objects-with-one-line-of-code-using-destructuring-77f7fc25230c?gi=561dc70b0971

https://sebhastian.com/react-filter/

https://www.codegrepper.com/code-examples/typescript/filter+and+map+react

https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples

# Json

#### [Iterating through nested object in Reactjs?](https://stackoverflow.com/questions/60652929/iterating-through-nested-object-in-reactjs)

> All Objects in JavaScript, can very well be treated as arrays. In your case, when you use **Object.keys()** or **Object.values()**, it will only return keys or values.. not both..

So use Object.entries()

```javascript
const data = {
  A: {
    name: "AA",
    type: "AB",
    values: [
      ["AC", "AD", "AE"],
      ["AF", "AG", "AH"],
    ],
  },
  B: {
    name: "BA",
    type: "BB",
    values: [
      ["BC", "BD", "BE"],
      ["BF", "BG", "BH"],
    ],
  },
  C: {
    name: "CA",
    type: "CB",
    values: [
      ["CC", "CD", "CE"],
      ["CF", "CG", "CH"],
    ],
  },
};

export default function App() {
  return Object.entries(data).map((item) => (
    <div>
      {item[0]} - {item[1].name}{" "}
    </div>
  ));
}
```

<br>
<br>

#### [JavaScript Recursive Search On An Array Of Objects](https://stackoverflow.com/questions/53938203/javascript-recursive-search-on-an-array-of-objects)

<br>
<br>

#### [Loop through multiple objects inside the first array from JSON data displaying two arrays with objects in React using FUNCTION COMPONENT](https://stackoverflow.com/questions/61634572/loop-through-multiple-objects-inside-the-first-array-from-json-data-displaying-t)

<br>

- You can **merge both Array** and then use it.

Something like this :

```javascript
// First Array
const stations = [
  { first_name: "Jane", id: "6", last_name: "Doe", city: "Budapest" },
  { first_name: "David", id: "10", last_name: "Smith", city: "Paris" },
];

// Second Array
const stations2 = [
  { first_name: "Jane", id: "6", last_name: "Doe", city: "Budapest" },
  { first_name: "David", id: "10", last_name: "Smith", city: "Paris" },
];

const allStations = [...stations, ...stations2]; // <----- HERE

const newData = allStations.map((item) => {
  return (
    <div className="something" key={item.id}>
      {item.first_name}
    </div>
  );
});
```

<br> 
<br>

#### [Two children with the same key in React [duplicate]](https://stackoverflow.com/questions/52219852/two-children-with-the-same-key-in-react)

- You can pass another parameter within your map function like so:

```javascript
this.state.elements.map((element, index) => {
  return (
    <span style={element.myStyle} key={index}>
      {element}
    </span>
  );
});
```

- The second parameter of the Array.prototype.map function actually contains the current index of the particular element in that array.

##### This way, you'll be sure that your key is not duplicated.

<br>

<hr>

### [How to Add a GDPR Agreement to Your Forms (Easy Method)](https://wpforms.com/how-to-add-a-gdpr-agreement-field-to-your-sites-forms/)

<br>

<hr>

[How do I blur the background but not the text that sits on top of it?](https://www.quora.com/How-do-I-blur-the-background-but-not-the-text-that-sits-on-top-of-it)

### [Website Speed Test and Website Analysis](https://www.dareboost.com/en)

<br>

## Website Reputation Checker

- This service helps you detect potentially malicious websites.

#### [Check the online reputation/safety of a website.](https://www.urlvoid.com/)

<BR>

## MODALS / Slider

##### [AnimatePresence | FRAMER](https://www.framer.com/docs/animate-presence/)

##### [How I built an animated reusable React modal.](https://dev.to/anisbouzahar/how-i-built-an-animated-reusable-react-modal-i02)

[more choices](https://codesandbox.io/u/InventingWithMonster)

### trnsitions routes

#### [Route transitions with Pose and React Router](https://codesandbox.io/s/wq324qk687)

<br>
<br>

### nice

- by wrong akram

[https://cuberto-cursor.netlify.app/](https://cuberto-cursor.netlify.app/)

[curtains](https://www.curtainsjs.com/examples/ping-pong-shading-flowmap/index.html)

- how to use that effect

[martin-laxenaire](https://www.martin-laxenaire.fr/)

### etc

https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin

https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width

https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient()

http://thenewcode.com/613/Create-a-Halftone-Effect-with-SVG
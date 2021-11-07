https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0

https://www.deadcoderising.com/2017-03-28-es6-destructuring-an-elegant-way-of-extracting-data-from-arrays-and-objects-in-javascript/

---

https://blog.opendigerati.com/how-to-extract-nested-data-from-arrays-and-objects-with-one-line-of-code-using-destructuring-77f7fc25230c?gi=561dc70b0971

https://sebhastian.com/react-filter/

https://www.codegrepper.com/code-examples/typescript/filter+and+map+react

https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples

<br>
<br>
<br>
<hr>
<br>

### [React Conditional Rendering | NESTED CONDITIONAL RENDERING IN REACT](https://www.robinwieruch.de/conditional-rendering-react)

<br>
<br>
<br>
<hr>
<br>

#### [Why use curly braces over parentheses?](https://stackoverflow.com/questions/24553578/why-use-curly-braces-over-parentheses)

- In a lot of Scala examples I see people use curly braces in places I find outright strange, when the same statement could easily be written using parentheses.

```javascript
lst foreach (x => println(s"the value returned is: $x")) // parens
lst foreach {x => println(s"you get the idea, $x")} // braces
```

- I understand that you can use braces as an alternative to parentheses, simply because it allows you to write a statement on multiple lines:

```javascript
val res = for {
  x <- coll1
  y <- coll2
} yield (x, y)
```

- If the function you're passing is a single expression, you can use either and the result will be the same. However, if the function includes multiple expressions you have to use braces. For this reason I always prefer using braces, aside from the fact that I find it makes your intent clearer. (Note that we're talking single expression, not single line. For example:

```javascript
lst map (x => findInDatabase(x)
               .getOrElse(ERROR_VALUE))
```

- would be fine (since findInDatabase(x).getOrElse(ERROR_VALUE) is a single expression even though it's split into multiple lines.

<br>

#### [Why does having [].map with curly brackets change the way it works?](https://stackoverflow.com/questions/41742934/why-does-having-map-with-curly-brackets-change-the-way-it-works)

<br>
<br>
<br>
<hr>
<br>

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
<br>

# CALC

[A Complete Guide to calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/)

```javascript
.main-content {
  /* Subtract 80px from 100vh */
  height: calc(100vh - 80px);
}
```

### Clamp()

[CSS Clamp(): The Responsive Combination We’ve All Been Waiting For](https://blog.bitsrc.io/css-clamp-the-responsive-combination-weve-all-been-waiting-for-f1ce1981ea6e)

> If you haven’t experienced this yet, not to worry, you will. But what you won’t have to do is come up with some complex event listeners using the Web API ResizeObserver or CSS calc() functions or even CSS media queries that would swap out complete elements or components depending on the viewport size. 😓

> No, nothing requiring so much effort as that anymore, for we live in an age where CSS is awesome, and it just keeps getting better by the day (and with wider and wider spread browser support too). Today, I want to share with you the CSS clamp() function — a single function, purpose-built to allow almost any element to adjust its size within certain bounds to fit the viewport.

```javascript
div {
  // other CSS...
  font-size: clamp(1.1rem, 0.7153rem + 1.6368vw, 1.5rem);
}
```

<br>

> Now before you think I figured this preferred value out on my own, I didn’t. This excellent article from Pedro Rodriguez on CSS Tricks has an awesome little calculator he made where you can plug in the MIN and MAX font-sizes and it will compute the preferred font-size value to plug in between them so they scale while staying readable throughout.

- I highly recommend trying it out yourself for any responsive font-sizing you may need as well.
  To break down this code though, the font-size will be set at 1.1rem, until the computed value of 0.7153rem + 1.6368vw becomes greater than that of 1.1rem. At this point, the font-size value will be calculated by the formula of 0.7153rem + 1.6368vw, until this preferred value's computed value becomes greater than that of 1.5rem. At this point, the font-size will be set at 1.5rem.

<br>
<hr>
<br>

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

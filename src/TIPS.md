# 🍌 🐒

# Inside the <u>navbar default </u>

#### I decided to apply styles to the basket store, more exactly, to the little number that indicates how many items we have in the basket.

> **SINCE** the icon comes from **MATERIAL UI**, i had to create a hook that i used inside the navbar.

<br>

# steps:

### 1. I created another file inside the **components folder** and i called it **styles.js**

<br>

### 2. Inside the styles.js i added the following:

```javascript
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  //   margin: {
  //     margin: theme.spacing.unit * 2,
  //   },
  customBadge: {
    backgroundColor: "#335DFF",
    color: "white",
  },
}));
```

<br>

#### Then inside the navbar.jsx

<br>

### 3. I proceed to import it and then pass the hook to a variable, like so:

- **Important**: the import has to be on top, not under the styled components styles!

```javascript
import useStyles from "./styles";

//
const Navbar = () => {
  const classes = useStyles();
```

#### and you will use it here:

- **classes={{ badge: classes.customBadge }}**

```javascript
<Badge
  badgeContent={4}
  classes={{ badge: classes.customBadge }}
  //   className={classes.margin}
>
  <ShoppingCartOutlined />
</Badge>
```

#### before

[<img src="/src/img/slide_prcess_img2_before_animation.jpg"/>]()

#### after

- Dont bother about the image :), just look at the basket icon, its now salmon.

[<img src="/src/img/icon-color-custom.jpg"/>]()

### Maybe at the end of the project it will be nice to add some if statement to change the color depending on the page we are or the slider, as not all the colors match with the images aesthetic.

<br>
<br>
<hr>
<br>
<br>

## IMG OPTION

- The option 2 seems nice (its just that the text is too close)

```javascript
const Image = styled.img`
  width: 80%;
  min-height: auto;
  object-fit: cover;

  /*
//option 2

    width: 100%;
    object-fit: cover;
    aspect-ratio: 1;
    // The aspect-ratio  CSS property sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes and some other layout functions.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
   */
`;
```

[<img src="/src/img/slider_funczionality_changes_img-option.gif"/>]()

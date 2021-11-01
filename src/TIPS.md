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

-   **classes={{ badge: classes.customBadge }}**

```javascript
<Badge
  badgeContent={4}
  classes={{ badge: classes.customBadge }}
//   className={classes.margin}
>
  <ShoppingCartOutlined />
</Badge>
```

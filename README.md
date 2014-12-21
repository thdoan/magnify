# Magnify JS

Magnify JS is a simple, lightweight jQuery plugin that adds a magnifying glass style zoom functionality to images. It is a useful feature to have for product images on ecommerce websites, or if you just want people to be able to zoom into an image without spawning additional overlays or popup windows that may cover your content.

## Options

Options can be set using data attributes or passed in an `options` JavaScript object when calling `.magnify()`. For data attributes, append the option name to `data-magnify-` (e.g., `data-magnify-src="..."`).

Name    | Type   | Default | Description
--------| ------ | ------- | -----------
`speed` | number | 100     | The fade-in/out animation speed in ms when the lens moves on/off the image.
`src`   | string | ''      | The URI of the large image that will be shown in the magnifying lens.

## Installation

### Step 1: Link the required files

```html
<link rel="stylesheet" href="css/magnify.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="js/jquery.magnify.js"></script>
```

You have complete control over the style and size of the lens by modifying `magnify.css`. It is recommended to load the two JavaScript files at the bottom just before the closing `</body>` tag if possible.

### Step 2: Add the HTML

Assign the `magnify-image` class to the small image. The URI to the large image can be placed in the `data-magnify-src` attribute (as shown below) or passed as the `src` option when calling the `.magnify()` function.

```html
<div class="magnify">
  <img src="/images/product.jpg" class="magnify-image" data-magnify-src="/images/product-large.jpg">
</div>
```

### Step 3: Call the .magnify() function

```html
<script>
$(document).ready(function() {
  $('.magnify').magnify();
});
</script>
```

Calling the `.magnify()` function with options:

```html
<script>
$(document).ready(function() {
  $('.magnify').magnify({
    speed: 200,
    src: '/images/product-large.jpg'
  });
});
</script>
```

### [__See a demo &raquo;__](http://thdoan.github.io/magnify/demo.html)
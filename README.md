# Magnify JS

Magnify JS is a simple, lightweight jQuery plugin that adds a magnifying glass style zoom functionality to images. It is a useful feature to have for product images on ecommerce websites, or if you just want people to be able to zoom into an image without spawning additional overlays or popup windows that may cover your content. Magnify JS is based on [this tutorial](http://thecodeplayer.com/walkthrough/magnifying-glass-for-images-using-jquery-and-css3).

If you don't use jQuery, then you can use [TrySound's vanilla JS version](https://github.com/TrySound/magnify/tree/fix-vanillajs).

### [See a demo &raquo;](http://thdoan.github.io/magnify/demo.html)

## Getting Started

### Step 1: Link the required files

```html
<link rel="stylesheet" href="/css/magnify.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="/js/jquery.magnify.js"></script>
```

You have complete control over the style and size of the lens by modifying `magnify.css`. It is recommended to load the two JavaScript files at the bottom just before the closing `</body>` tag if possible.

### Step 2: Specify the large image

The URI to the large image can be placed in the `data-magnify-src` attribute (as shown below) or passed as the `src` option when calling the `.magnify()` function.

```html
<img src="/images/product.jpg" data-magnify-src="/images/product-large.jpg">
```

If the `data-magnify-src` attribute or `src` option is not used, then Magnify JS will try to grab the large image from the parent `<a>` tag, e.g.:

```html
<a href="/images/product-large.jpg">
  <img src="/images/product.jpg">
</a>
```

### Step 3: Call the .magnify() function

Make sure this comes after the two required JavaScript files from Step 1 are loaded.

```html
<script>
$(document).ready(function() {
  $('img').magnify();
});
</script>
```

Calling the `.magnify()` function with options:

```html
<script>
$(document).ready(function() {
  $('img').magnify({
    speed: 200,
    src: '/images/product-large.jpg'
  });
});
</script>
```

## Options

Options can be set using data attributes or passed in an `options` JavaScript object when calling `.magnify()`. For data attributes, append the option name to "data-magnify-" (e.g., `data-magnify-src="..."`).

Name     | Type     | Default | Description
-------- | -------- | ------- | -----------
`debug`  | boolean  | false   | Toggle activity logging in the console.
`speed`  | number   | 100     | The fade-in/out animation speed in ms when the lens moves on/off the image.
`src`    | string   | ''      | The URI of the large image that will be shown in the magnifying lens.
`onload` | function |         | Callback function to execute after magnification is loaded.

## Installation

Choose from one of the following methods:

- `git clone https://github.com/thdoan/magnify.git`
- `bower install magnify`
- `npm install magnify`
- [Download ZIP](https://github.com/thdoan/magnify/archive/master.zip)
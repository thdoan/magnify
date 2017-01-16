# jQuery Magnify

Magnify is a simple, lightweight jQuery plugin that adds a magnifying glass style zoom functionality to images. It is a useful feature to have for product images on ecommerce websites, or if you just want people to be able to zoom into an image without spawning additional overlays or popup windows that may cover your content. Magnify is based on [this tutorial](http://thecodeplayer.com/walkthrough/magnifying-glass-for-images-using-jquery-and-css3).

If you don't use jQuery, then you can use [TrySound's vanilla JS version](https://github.com/TrySound/magnify/tree/fix-vanillajs).

**[See a demo &raquo;](https://thdoan.github.io/magnify/demo.html)**

**[See a demo with mobile plugin &raquo;](https://thdoan.github.io/magnify/demo-mobile.html)**

**[See a demo with an image map &raquo;](https://thdoan.github.io/magnify/demo-map.html)**

**[See a demo inside an accordion &raquo;](https://thdoan.github.io/magnify/demo-accordion.html)**

## Getting Started

### Step 1: Link the required files

```
<link rel="stylesheet" href="//cdn.rawgit.com/thdoan/magnify/master/dist/css/magnify.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="//cdn.rawgit.com/thdoan/magnify/master/dist/js/jquery.magnify.js"></script>
<!-- Optional mobile plugin (uncomment the line below to enable): -->
<!-- <script src="//cdn.rawgit.com/thdoan/magnify/master/dist/js/jquery.magnify-mobile.js"></script> -->
```

You have complete control over the style and size of the lens by modifying `magnify.css`. Magnify has support for touch devices, but for a better zoom experience you can load the optional mobile plugin by uncommenting the last line above. It is recommended to load the JavaScript files at the bottom just before the closing `</body>` tag if possible.

### Step 2: Specify the large image

The URI to the large image can be placed in the `data-magnify-src` attribute (as shown below) or passed as the `src` option when calling the `.magnify()` function.

```
<img src="/images/product.jpg" class="zoom" data-magnify-src="/images/product-large.jpg">
```

If the `data-magnify-src` attribute or `src` option is not used, then Magnify will try to grab the large image from the parent `<a>` tag, e.g.:

```
<a href="/images/product-large.jpg">
  <img src="/images/product.jpg" class="zoom">
</a>
```

### Step 3: Call the .magnify() function

Make sure this comes after the two required JavaScript files from Step 1 are loaded.

```
<script>
$(document).ready(function() {
  $('.zoom').magnify();
});
</script>
```

Calling the `.magnify()` function with options:

```
<script>
$(document).ready(function() {
  $('.zoom').magnify({
    speed: 200,
    src: '/images/product-large.jpg'
  });
});
</script>
```

## Options

Options can be set using data attributes or passed in an `options` JavaScript object when calling `.magnify()`. For data attributes, append the option name to "data-magnify-" (e.g., `data-magnify-src="..."`).

Name        | Type     | Default | Description
----------- | -------- | ------- | -----------
`speed`     | number   | 100     | The fade-in/out animation speed in ms when the lens moves on/off the image.
`src`       | string   | ''      | The URI of the large image that will be shown in the magnifying lens.
`timeout`   | number   | -1      | The wait period in ms before hiding the magnifying lens on touch devices. Set to `-1` to disable.
`afterLoad` | function |         | Callback function to execute after magnification is loaded.

## Methods

To use a public method, you need to assign the element that you called `.magnify()` on to a variable. Sample usage:

```
<script>
$(document).ready(function() {
  // Enable zoom
  var $zoom = $('.zoom').magnify();
  // Disable zoom
  $zoom.destroy();
});
</script>
```

Name        | Description
----------- | -----------
`destroy()` | Disable zoom and reset to the original state.

## Events

Magnify triggers two custom events on the `html` element: `magnifystart` when you enter zoom mode and `magnifyend` when you exit zoom mode. Sample usage:

```
$('html').on({
  magnifystart: function() {
    console.log('magnifystart event fired');
  },
  magnifyend: function() {
    console.log('magnifyend event fired');
  }
});
```

When in zoom mode, the `magnifying` class is also added to the `html` element, so you can change the style when zooming.

## Installation

Choose from one of the following methods:

- `git clone git@github.com:thdoan/magnify.git`
- `git clone https://github.com/thdoan/magnify.git`
- `bower install magnify`
- `npm install magnify`
- [Download ZIP](https://github.com/thdoan/magnify/archive/master.zip)

/*!
 * Mobile plugin for jQuery Magnify (http://thdoan.github.io/magnify/)
 *
 * jQuery Magnify by Tom Doan is licensed under the MIT License.
 * Read a copy of the license in the LICENSE file or at
 * http://choosealicense.com/licenses/mit
 */

(function($) {
  // Ensure this is loaded after jquery.magnify.js
  if (!$.fn.magnify) return;
  // Add required CSS
  $('<style>' +
    '.lens-mobile {' +
      'position:fixed;' +
      'top:0;' +
      'left:0;' +
      'width:100%;' +
      'height:100%;' +
      'background:#ccc;' +
      'display:none;' +
      'overflow:scroll;' +
      '-webkit-overflow-scrolling:touch;' +
    '}' +
    '.magnify-mobile>.close {' +
      'position:fixed;' +
      'top:10px;' +
      'right:10px;' +
      'width:32px;' +
      'height:32px;' +
      'background:#333;' +
      'border-radius:16px;' +
      'color:#fff;' +
      'display:inline-block;' +
      'font:normal bold 20px sans-serif;' +
      'line-height:32px;' +
      'opacity:0.8;' +
      'text-align:center;' +
    '}' +
    '@media only screen and (min-device-width:320px) and (max-device-width:773px) {' +
      '/* Assume QHD (1440 x 2560) is highest mobile resolution */' +
      '.lens-mobile { display:block; }' +
    '}' +
    '</style>').appendTo('head');
  // Ensure .magnify is rendered
  $(window).load(function() {
    $('body').append('<div class="magnify-mobile"><div class="lens-mobile loading"></div></div>');
    var $lensMobile = $('.lens-mobile');
    // Only enable mobile zoom on smartphones
    if ($lensMobile.is(':visible') && !!('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch) || navigator.msMaxTouchPoints)) {
      var $magnify = $('.magnify'),
        $magnifyMobile = $('.magnify-mobile'),
        $magnifyImage = $magnify.children('img'),
        /* NOTE: In iOS background is url(...), not url("...") */
        sZoomImage = $('.magnify-lens').css('background-image').replace(/url\(["']?|["']?\)/g, ''),
        nImageWidth = $magnifyImage.width(),
        nImageHeight = $magnifyImage.height(),
        nZoomWidth,
        nZoomHeight,
        nScrollOffsetX,
        nScrollOffsetY;
      // Disable desktop magnifying lens
      $magnify.off();
      // Initiate mobile zoom
      // NOTE: Fixed elements inside a scrolling div have issues in iOS, so we
      // need to insert the close icon at the same level as the lens
      $magnifyMobile.hide().append('<i class="close">&times;</i>');
      $lensMobile.append('<img src="' + sZoomImage + '" alt="">');
      // Hook up event handlers
      $lensMobile.children('img').load(function() {
        nZoomWidth = this.width;
        nZoomHeight = this.height;
      });
      $magnifyMobile.children('.close').on('touchstart', function() {
        $magnifyMobile.toggle();
      });
      $magnifyImage.on({
        touchend: function() {
          // Only execute on tap
          if ($(this).data('drag')) return;
          $magnifyMobile.toggle();
          // Zoom into touch point
          $lensMobile.scrollLeft(nScrollOffsetX);
          $lensMobile.scrollTop(nScrollOffsetY);
        },
        touchmove: function() {
          // Set drag state
          $(this).data('drag', true);
        },
        touchstart: function(e) {
          // Determine zoom position
          var nX = e.originalEvent.touches[0].pageX - $magnifyImage.offset().left,
            nXPct = nX / nImageWidth,
            nY = e.originalEvent.touches[0].pageY - $magnifyImage.offset().top,
            nYPct = nY / nImageHeight;
          nScrollOffsetX = (nZoomWidth*nXPct)-(window.innerWidth/2);
          nScrollOffsetY = (nZoomHeight*nYPct)-(window.innerHeight/2);
          // Reset drag state
          $(this).data('drag', false);
        }
      });
    }
  });
}(jQuery));
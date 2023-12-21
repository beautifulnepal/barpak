/*Custom JavaScript*/

$(function () {
  ("use strict"); // Start of use strict

  // Activate wow.js
  // new WOW().init();

  var lightbox = $("#gallery a").simpleLightbox();

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("scrolled");
    } else {
      $("#mainNav").removeClass("scrolled");
    }
  };

  $(document).scroll(function () {
    var $nav = $(".navbar.fixed-top");
    if ($(this).scrollTop() > $nav.height() + 300) {
      $('#toTop').css('display', 'block');
    } else {
      $('#toTop').css('display', '');
    }
  });

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // rendering youtube video in the Modal
  var $videoSrc;
  $(".youtube-video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  // when the modal is opened autoplay it
  $("#youtubeVideoModal").on("shown.bs.modal", function (e) {
    $("#youtubeVideo").attr("src", $videoSrc);
  });

  // stop playing the youtube video when I close the modal
  $("#youtubeVideoModal").on("hide.bs.modal", function (e) {
    $("#youtubeVideo").replaceWith(
      '<iframe class="embed-responsive-item" src="" id="youtubeVideo" allowscriptaccess="always" allow="autoplay"></iframe>'
    );
  });
});

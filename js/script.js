$(document).ready(function(e) {
  $('#myCarousel').carousel({
    interval: 10000,
    pause: 'false'
  });
  $('#fullpage').fullpage({
    sectionsColor: ['transparent', '#181818', 'transparent'],
    css3: true,
    scrollBar: false,
  });
});

import $ from 'jQuery';
import classie from 'desandro-classie';
import './vendor/player.js';
import matchHeight from 'jquery-match-height';

require('jquery-ui');
require('modernizr');
require('wow');

$(document).ready(() => {
  new WOW().init();
  const wow = new WOW({});
});

function sizeOnScroll() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 300,
      header = document.querySelector("#logo");
    if (distanceY > shrinkOn) {
      classie.add(header,"is-smaller");
    } else {
      if (classie.has(header,"is-smaller")) {
        classie.remove(header,"is-smaller");
      }
    }
  });
}

window.onload = sizeOnScroll();


$(document).ready(() => {
  if ($('.audio').length > 0) {
    $('.audio__heading').matchHeight();
  }
});

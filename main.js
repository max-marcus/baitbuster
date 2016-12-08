'use strict';

const clickbait = ["http://drudgereport.com.co/", "http://abcnews.com.co/", "http://politicops.com/", "http://worldnewsdailyreport.com/"];
const satire = ["http://www.theonion.com/"]

function clipUrl(url) {
  let count = 0, index = null;

  while (count < 3 && index !== -1) {
    index = url.indexOf('/', index + 1);
    count += 1;
  }
  return url.slice(0, index + 1);
}

$(document).on({
  mouseenter: function() {
    let url = $(this).attr('href');
    url = clipUrl(url);
    if (clickbait.indexOf(url) !== -1) {
      console.log('moused over target link: ', $(this));
      $(this).after('<div class="bb">This is where the box goes</div>');
    }
  },
  mouseleave: function() {
    $(this).next('.bb').remove();
  }
}, 'a');


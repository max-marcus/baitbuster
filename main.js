const clickbait = ["http://drudgereport.com.co/", "http://abcnews.com.co/", "http://politicops.com/", "http://worldnewsdailyreport.com/"];
const satire = ["http://www.theonion.com/"]

function clipUrl(url) {
  let count = 0, index = null;

  while (count < 3 && index !== -1) {
    index = url.indexOf('/', index+1);
    count++;
  }
  return 
}

$('a').mouseover(() => {
  const url = $(this).attr('href');
  if (clickbait.indexOf(url) !== -1) {
    $(this).toggleClass('classname')
  }
})
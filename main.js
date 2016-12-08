$(document).on({
  mouseenter: function() {
    let url = $(this).attr('href');
    url = clipUrl(url);
    if (clickbait[url]) {
      $(this).after(clickbaitDiv);
      $('.bb').css(clickbaitCSS);
    } else if (satire[url]) {
      $(this).after(satireDiv);
      $('.bb').css(satireCSS);
    }
  },
  mouseleave: function() {
    $(this).next('.bb').remove();
  }
}, 'a');

function clipUrl(url) {
  let count = 0, index = null;

  while (count < 3 && index !== -1) {
    index = url.indexOf('/', index + 1);
    count += 1;
  }
  return url.slice(0, index + 1);
}

// function getSatireSites() {
//   $.ajax({
//     url: 'https://en.wikipedia.org/wiki/List_of_satirical_news_websites',
//     dataType: 'text',
//     success: function(data) {
//       const elements = $('<div>').html(data)[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr');
//       $(elements).each(function(elem) {
//         console.log(elem);
//         // var theText = elem.firstChild.;
//         // console.log(theText);
//         // satire.push(theText);
//       })
//       console.log(satire);
//       }
//         // .each(function(link) {
//         //   satire.push($(this).attr(href))
//         // });
//   })
// }


// chrome.browserAction.onClicked.addListener(function () {
//   chrome.windows.create({ 'url': 'redirect.html', 'type': 'popup' }, function (window) {});
//   $('#yesbtn').on('click', function() {
//     chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
//       const thisUrl = tabs[0].url;
//       console.log(thisUrl);
//       clickbait.push(thisUrl);
//     });
//   });
// });

const clickbait = {"http://drudgereport.com.co/": 1, "http://abcnews.com.co/": 1, "http://politicops.com/": 1, "http://worldnewsdailyreport.com/": 1, "https://70news.wordpress.com/": 1, "http://thefreethoughtproject.com/": 1, "http://www.activistpost.com/": 1, "http://addictinginfo.org/": 1, "http://www.anonews.co/": 1, "http://www.infowars.com/": 1, "http://www.breitbart.com/": 1, "http://civictribune.com/": 1, "http://www.coasttocoastam.com/": 1, "http://www.collective-evolution.com/": 1, "http://consciouslifenews.com/": 1, "http://naturalnews.com/": 1, "http://twitchy.com/": 1, "http://www.newsbiscuit.com/": 1, "http://thedcgazette.com/": 1, "http://occupydemocrats.com/": 1, "http://100percentfedup.com/": 1, "http://www.enduringvision.com/": 1, "http://21stcenturywire.com/": 1}
const satire = {"http://awazetribune.com/": 1, "http://www.borowitzreport.com/": 1, "http://www.clickhole.com/": 1, "http://www.christwire.org/": 1, "http://speld.nl/": 1, "http://der-postillon.com/": 1, "http://www.duffelblog.com/": 1, "http://www.elkoshary.com/": 1, "http://www.elmundotoday.com/": 1, "http://www.fakingnews.com/": 1, "http://www.fognews.ru/": 1, "http://www.freewoodpost.com/": 1, "http://islamicanews.com/": 1, "http://www.landoverbaptist.org/": 1, "http://www.legorafi.fr/": 1, "http://www.lushforlife.com/": 1, "http://www.nationalreport.net/": 1, "http://www.newsbiscuit.com/": 1, "http://www.private-eye.co.uk/": 1, "http://www.satirewire.com/": 1, "http://scrappleface.com/": 1, "http://stneotscitizen.com/": 1, "http://www.thebeaverton.com/": 1, "http://www.betootaadvocate.com/": 1, "http://www.thecivilian.co.nz/": 1, "http://www.chaser.com.au/": 1, "http://www.dailycurrant.com/": 1, "http://www.thedailymash.co.uk/": 1, "http://www.dailysquib.co.uk/": 1, "http://thedailywtf.com/": 1, "http://www.theonion.com/": 1, "http://www.theoxymoron.co.uk/": 1, "http://www.thepoke.co.uk/": 1, "http://www.theunrealtimes.com/": 1, "http://thevalleyreport.com/": 1, "http://topekasnews.com/": 1, "http://waterfordwhispersnews.com/": 1, "http://weeklyworldnews.com/": 1, "http://www.zaytung.com/": 1};
const userSites = [];

const clickbaitDiv = '<div class="bb"> Caution: This site is known to publish clickbait </div>';
const clickbaitCSS = {
  "font-weight": "bold",
  "font-size": "18px",
  "color": "black",
  "text-align": "center",
  "background-color": "red"
}

const satireDiv = '<div class="bb"> Note: This is a satirical website </div>';
const satireCSS = {
  "font-weight": "bold",
  "font-size": "18px",
  "color": "black",
  "text-align": "center",
  "background-color": "orange"
}
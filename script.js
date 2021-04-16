var myArray = [
  "https://youtube.com/embed/mLwrXrx7nos",
  "https://youtube.com/embed/cMlSRjcyQlQ",
  "https://youtube.com/embed/8TKw-cAKlRY",
   "https://youtube.com/embed/X8acnIYKJ9g",
  "https://youtube.com/embed/fXMGQgO_KiQ"
];

$(document).ready(function() {
  $('.random-button').on('click', function(ev) {
    ev.preventDefault();
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    $.featherlight({iframe: randomItem, iframeMaxWidth: '100%', iframeWidth: 560,
	iframeHeight: 315});
  });
 });
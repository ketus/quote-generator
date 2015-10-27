$(document).ready(function() {

  /* $.ajaxSetup({
    async: false
  }); */ 
  //get quotes from json file
  var url = 'http://codepen.io/ketus/pen/WQJQoX.js';
  var quotes = [];
  var rand;
  $.getJSON(url,
      function(data) {
        quotes = data;
      }
  );      
  
  $('#btnQuote').click(function(){
    $('#tweet').empty();
    rand = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    $('#author').html(quotes[rand].author);
    $('#quote').html(quotes[rand].content);  
      twttr.widgets.createShareButton(
        'http://freecodecamp.com/ketus/',
        document.getElementById('tweet'),
        {
          text: '\"' + quotes[rand].content + '\" - ' + quotes[rand].author,
          size: 'large'
        }
     );           
  });  
});
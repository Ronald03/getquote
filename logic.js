
var quotes = [
  //Start of Array
  ["Look deep into nature, and then you will understand everything better.", "-Albert Einstaen"],
  
  ["Weakness of attitude becomes weakness of character.", "-Albert Einstaen"],
  
  ["The difference between stupidity and genius is that genius has its limits.", "-Albert Einstaen"],
  
  ["A person who never made a mistake never tried anything new.", "-Albert Einstaen"],
  
  ["Peace cannot be kept by force; it can only be achieved by understanding.", "-Albert Einstaen"],
  
  ["Life is really simple, but we insist on making it complicated.", "-Confucius"],
  
  ["Silence is a true friend who never betrays.", "-Confucius"],
  
  ["The superior man understands what is right; the inferior man understands what will sell.", "-Confucius"],
  
  ["Everything has beauty, but not everyone sees it.", "-Confucius"],
  
  ["I hear and I forget. I see and I remember. I do and I understand.", "-Confucius"]
  //End of Array
];

$(document).ready(function() {
  var select2 ='';
     
    $("#getQuote").on("click", function(){
      // Only change code below this line.
      var select = Math.floor(Math.random() * 10);
      select2 = select;
      $("#theQuote").html(quotes[select][0]);
      $(".author").html(quotes[select][1]);
      $('#twiiter').setAttribute("data-text","This is me");
      // Only change code above this line.
    });
  $("#twiiter").on("click", function(){
    var quote = quotes[select2][0];
    var author = quotes[select2][1];
     var tweetLink = 'https://twitter.com/intent/tweet?text=' + quote +' ' + author;
    window.open(tweetLink,'_black');
    return false;
  });
  });
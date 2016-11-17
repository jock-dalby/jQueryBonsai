var main = function() {
  $(document).keyup(function(){
   	var topText = $('#top-text').val();
    $('.top-caption').text(topText);
  });
  $(document).keyup(function(){
    var bottomText = $('#bottom-text').val();
    $('.bottom-caption').text(bottomText);
  });
  $(document).keyup(function(){
    var imageURL = $('#image-url').val();
    console.log(imageURL);
    $('img').attr('src', imageURL);
  });
};

$(document).ready(main);

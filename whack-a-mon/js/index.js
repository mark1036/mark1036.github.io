$(document).ready(function() {

  $("#left-home-right").hide();

  //click reset to go back to Home screen
  $('.resetbutton').click(function() {
    $('body').css('background-image', 'url(http://orig05.deviantart.net/e25b/f/2014/308/3/c/pokemon_x_and_y_battle_background_16_by_phoenixoflight92-d8594wx.png)');
    $("#homeButton").show();
    $("#top-button-left").show();
    $('#right-button-main').show();

  });

  //what happens when right arrow in the main room is clicked
  $('#right-button-main').click(function() {
    $('body').css('background-image', 'url(http://cdn.bulbagarden.net/upload/f/f2/Amie_Grass_Wallpaper.png)');
    $("#homeButton").hide();
    $("#top-button-left").hide();
    $("#left-home-right").show();
    $("#homegrid").hide();
  });

  //what happens when you click the left arrow in the room on the right
  $('#left-home-right').click(function() {
    $('body').css('background-image', 'url(http://orig05.deviantart.net/e25b/f/2014/308/3/c/pokemon_x_and_y_battle_background_16_by_phoenixoflight92-d8594wx.png)');
    $(this).hide();
    $("#homeButton").show();
    $("#top-button-left").show();
    $('#right-button-main').show();
    $("#homegrid").show();
  });

  $('#right-arrow-leftroom').click(function() {
    $('body').css('background-image', 'url(http://orig12.deviantart.net/b598/f/2014/310/a/6/pokemon_x_and_y_forest_battle_background_by_phoenixoflight92-d85ijvr.png)');
    $(this).show();
  });

  $('#top-button-left').click(function() {
    $('body').css('background-image', 'url(http://orig12.deviantart.net/b598/f/2014/310/a/6/pokemon_x_and_y_forest_battle_background_by_phoenixoflight92-d85ijvr.png)');
    $('#left-arrow-leftroom').show();
    $("#homegrid").hide();
    $("#left-button-main").hide;
    $("#left-button-main").hide;
  });

  $('#homeButton').click(function() {
    $('body').css('background-image', 'url(http://orig05.deviantart.net/e25b/f/2014/308/3/c/pokemon_x_and_y_battle_background_16_by_phoenixoflight92-d8594wx.png)');
    $('#right-arrow-rightroom').show();
    $("#homeButton").show();
    $("#top-button-left").show();
    $('#right-button-main').show();
    $("#homegrid").show();
  });

  //What happens when you click an enemy
  $('.circle').click(function() {
    score = score + 1

    document.GetElementById('points').innerHTML = score;

    setTimeout(function() {
      $('.circle').show();
    }, 3000);

});

//score JS code-----------------------------------------------------------------------------\\

var score = 0;

$('#eevee').click(function() {
  score = score + 1000;
  document.getElementById('points').innerHTML = score;
});

$('#arceus').click(function() {
  score = score + 1000000;
  document.getElementById('points').innerHTML = score;
});

$('#mewtwo').click(function() {
  score = score + 10000000;
  document.getElementById('points').innerHTML = score;
});

$('#rayquaza').click(function() {
  score = score - 200000;
  document.getElementById('points').innerHTML = score;
});

$('#kyoger').click(function() {
  score = score + 1011111;
  document.getElementById('points').innerHTML = score;
});

$('#diglett').click(function() {
  score = score + 10;
  document.getElementById('points').innerHTML = score;
});

$('#magikarp').click(function() {
  score = score + 1;
  document.getElementById('points').innerHTML = score;
});

$('#ash').click(function() {
  score = score - 100;
  document.getElementById('points').innerHTML = score;
});

$('#dinovaldo').click(function() {
  score = score - 1000000;
  document.getElementById('points').innerHTML = score;
});
  
  $('#lapras').click(function() {
  score = score + 84;
  document.getElementById('points').innerHTML = score;
});

  $('#mew').click(function() {
  score = score + 63;
  document.getElementById('points').innerHTML = score;
});
  
  $('#ditto').click(function() {
  score = score - 12345;
  document.getElementById('points').innerHTML = score;
});

  
$('.resetbutton').click(function() {
  score = 0;
  document.getElementById('points').innerHTML = score;
});

}); //closing bracket for document.ready
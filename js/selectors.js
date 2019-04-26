// declare your functions here...
function paragraphSelector(){
    var paragraphs = $('p');
    return paragraphs
};

function lastImageSelector(){
  var lastImage = $('img:last');
  return lastImage
};

function ninjaBabySelector(){
  var image = $('#baby-ninja');
  return image
};

function divSelector(){
  var divs = $('div.pics');
  return divs
};

function firstListItem(){
  var items = $('ul #pic-list');
  return items[0]
};

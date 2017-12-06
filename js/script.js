// Initialize XMLHttpRequest
var request = new XMLHttpRequest();
// Select the DOM Node with the class .artist
var DOMNode = document.querySelector('.artist');
var data;

request.open('GET', 'data/data.json');
// Callback on request.onreadystatechange
request.onreadystatechange = function(){
  // Check if the request is successful
  if(request.status === 200 && request.readyState === 4){
    // Parse the responseText to JSON
    data = JSON.parse(request.responseText);
    // Loop through the JSON data
    for(var item in data.Jazz){
      if(data.Jazz.hasOwnProperty(item)){
        // Create DOM Node and append HTML and element data
        var element = data.Jazz[item];
        var listItem = document.createElement('div');
        listItem.className = 'artist';
        listItem.innerHTML = '<h2>' + element.Artist_Name + ' : ' + element.Album_Title + '</h2>'
        +'<p class="label">' + ' Label : '+ element.Label + '<p>'
        + '<img src= " '+ element.Cover + ' ">';
        DOMNode.appendChild(listItem);
        var transition = document.createElement('HR');
        DOMNode.append(transition);
      }
    }
  }
}
request.send();

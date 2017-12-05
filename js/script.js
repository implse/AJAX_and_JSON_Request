var data;
var request = new XMLHttpRequest();
var DOMNode = document.querySelector('.artist');

request.open('GET', 'data/data.json');
request.onreadystatechange = function(){
  if(request.status === 200 && request.readyState === 4){
    data = JSON.parse(request.responseText);
    for(var item in data.Jazz){
      if(data.Jazz.hasOwnProperty(item)){
        var element = data.Jazz[item];
        var listItem = document.createElement('div');
        listItem.className = 'artist';
        listItem.innerHTML = '<h2>' + element.Artist_Name + ' : ' + element.Album_Title + '</h2>'
        +'<h3>' + ' Label : '+ element.Label + '</h3>';
        DOMNode.appendChild(listItem);
        var listImg = document.createElement('img');
        listImg.src = element.Cover;
        DOMNode.appendChild(listImg);
        var transition = document.createElement('HR');
        DOMNode.append(transition);

      }
    }
  }
}
request.send();

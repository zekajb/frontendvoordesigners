var url = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var main = document.querySelector("main");
var request = new XMLHttpRequest();
request.open('get', url);
request.responseType = 'json';
request.send();



request.addEventListener("load", function(){
  console.log("request is geladen: ", request.response);
  

var data = request.response;
for(var i = 0; i < data.length; i++) {
    var film = data[i];

    // var section = document.createElement("section");

    var div = document.createElement("div");
    var filmcover = document.createElement('img');
    var titel = document.createElement("h2");
    var simplePlot = document.createElement("p");


    filmcover.src = film.cover;
    titel.textContent = film.title;
    simplePlot.textContent = film.simple_plot;


    div.appendChild(filmcover);
    div.appendChild(titel);
    div.appendChild(simplePlot);

    main.appendChild(div);




}

});

// var button = document.createElement("button");
// button.textContent = "Press space or click for 3 more movies";
// main.appendChild(button);




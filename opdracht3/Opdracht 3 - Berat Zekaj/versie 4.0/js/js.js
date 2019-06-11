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
    var filmCover = document.createElement('img');
    var titel = document.createElement("h2");
    var simplePlot = document.createElement("p");


    filmCover.src = film.cover;
    titel.textContent = film.title;
    simplePlot.textContent = film.simple_plot;


    div.appendChild(filmCover);
    div.appendChild(titel);
    div.appendChild(simplePlot);

    main.appendChild(div);

    // if (i < 3)
    // {element.classList.add("eerste3");} else
    // {element.classList.add("laatste3");}
    

}

});

var drie = document.getElementById("3films");
var zes = document.getElementById("6films");
console.log('3Films', drie);
console.log('6Films', zes);


function showMore () {
    zes.classList.toggle("show");
}
console.log("classlist", showMore);

zes.addEventListener('click', showMore);

// for (i=0; i<zes.length; i++) {
//     zes[i].addEventListener('click', showMore);
//     }




var url = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var main = document.querySelector("main");
var request = new XMLHttpRequest();
request.open('get', url);
request.responseType = 'json';
request.send();



request.addEventListener("load", function(){
  

var data = request.response;
for(var i = 0; i < data.length; i++) {
    var film = data[i];

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
}

});

var showThree = document.getElementById("3films");
var showSix = document.getElementById("6films");


function showMore(e) {
  let allDivs = document.querySelectorAll("div");
  for (let i = 0; i < allDivs.length; i++) {
    if (e.keyCode === 32 || e.target.id === "6films") {
      e.preventDefault();
      allDivs[i].style.display = "block";
    }
  }
}

function showLess() {
  let allDivs = document.querySelectorAll("div");
  for (let i = 3; i < allDivs.length; i++) {
    allDivs[i].style.display = "none";
  }
}

showSix.addEventListener('click', showMore);
showThree.addEventListener('click', showLess);
document.addEventListener('keypress', showMore)




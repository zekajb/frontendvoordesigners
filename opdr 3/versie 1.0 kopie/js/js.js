var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURI = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var request = new XMLHttpRequest();
console.log(XMLHttpRequest);

request.open('GET', requestURI);
request.responseType = 'json';
request.send();

// request.onload = function() {
//     var theMovies = request.response;
//     populateHeader(theMovies);
//     theMovies(theMovies);
//   };

// function populateHeader(jsonObj) {
//     var myH1 = document.createElement('h1');
//     myH1.textContent = jsonObj['squadName'];
//     header.appendChild(myH1);
  
//     var myPara = document.createElement('p');
//     myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
//     header.appendChild(myPara);
//   }
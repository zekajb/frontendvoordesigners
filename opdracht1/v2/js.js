
var nav = document.querySelector('.heartnav');
var div = document.querySelectorAll('.heartdiv');
console.log('div', div);

var counter = 0;
// var liked = document.querySelector('#verborgen');
var liked = document.querySelector('span');



function groeiNavDiv() {
    nav.classList.toggle('groeinav');
    this.classList.toggle('active');
    if (this.classList.contains('active')){
        // console.log(this.classList.contains('active'));
        counter++; 
    } else { 
        counter--;
    }
    liked.textContent = counter;
    console.log('counter', counter);
}

// div.addEventListener('click', function(){
//         groeiNavDiv(this)
//     });

    
for (i=0; i<div.length; i++) {
    div[i].addEventListener('click', groeiNavDiv);
    }




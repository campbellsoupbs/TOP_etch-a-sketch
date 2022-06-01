//variables 
let height = 50;
let width = 50;

//selectors
let container = document.querySelector('.container');


//listeners


//functions

function createGrid() {
    for (let i=0; i<(height*width); i++) {
        let newdiv = document.createElement('div');
        
        newdiv.classList.add('newdiv');
        newdiv.classList.add(`${i}`);
        newdiv.setAttribute('style', `height:${600/height}px;`);
        newdiv.setAttribute('style', `width:${600/width}px;`);
       
        newdiv.addEventListener('mouseenter', colorBox);
        
        container.appendChild(newdiv);
    }
}

function colorBox(e) {
    e.target.classList.add('newerclass');
    console.log(e.target.classList[1]);
}

createGrid();
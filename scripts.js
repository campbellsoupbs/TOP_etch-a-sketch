//variables 
let height = 10;
let width = 10;

//selectors
let container = document.querySelector('.container');

//listeners


//functions

function createGrid() {
    for (let i=0; i<(height*width); i++) {
        let newdiv = document.createElement('div');
        newdiv.classList.add('newdiv');
        newdiv.setAttribute('style', `height:${600/height}px;`);
        newdiv.setAttribute('style', `width:${600/width}px;`);

        container.appendChild(newdiv);
    }
}

createGrid();
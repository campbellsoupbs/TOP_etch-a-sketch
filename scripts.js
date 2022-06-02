//selectors
let container = document.querySelector('.container');
let form = document.querySelector('.form');


//listeners
form.addEventListener('submit', dimensions);


//functions

function createGrid(height, width) {
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

function dimensions(e) {
    removeBoxes();
    
    e.preventDefault();
    let height = document.querySelector('.text-height').value;
    let width = document.querySelector('.text-width').value;

    console.log(height);
    console.log(width);

    createGrid(height, width);
}

function removeBoxes() {
    container.innerHTML = '';
}
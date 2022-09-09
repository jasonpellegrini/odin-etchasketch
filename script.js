const grid = document.querySelector('#grid');
let gridSize;
let trueGridSize;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function getGridSize(){
    do {
    gridSize = prompt("What size would you like each side of your grid to be?")
    } while (gridSize>=100);
    
   
    trueGridSize = gridSize * gridSize;

    removeAllChildNodes(grid);

    for (let x=0; x<trueGridSize; x++){

        const squares = document.createElement('div');

        squares.classList.add('squares'); 
        squares.style.width = 400/gridSize + 'px';
        squares.style.height = 400/gridSize + 'px';

        grid.appendChild(squares);

        squares.addEventListener('mouseover', function(){
            squares.style.backgroundColor = 'black';
        });
    }
}

function initGrid(){

    for (let x=0; x<256; x++){

        const grid = document.getElementById('grid');

        const squares = document.createElement('div');

        squares.classList.add('squares'); 

        squares.style.width = 400/16 + 'px';
        squares.style.height = 400/16 + 'px';

        grid.appendChild(squares);

        squares.addEventListener('mouseover', function(){
            squares.style.backgroundColor = 'black';
        });
    }
}

function rainbowSquares(){
    do {
    gridSize = prompt("What size would you like each side of your grid to be?")
    } while (gridSize>=100);
    
   
    trueGridSize = gridSize * gridSize;

    removeAllChildNodes(grid);

    for (let x=0; x<trueGridSize; x++){

        const squares = document.createElement('div');

        squares.classList.add('squares'); 
        squares.style.width = 400/gridSize + 'px';
        squares.style.height = 400/gridSize + 'px';

        grid.appendChild(squares);

        let rainbowArr = ['red', 'orange', 'green', 'yellow', 'blue', 'purple']

        squares.addEventListener('mouseover', function(){
            squares.style.backgroundColor = rainbowArr[Math.floor(Math.random()*6)];
        });
    }
}

/*function newGrid(gridSizeButton) {
    console.log(gridSizeButton);
}*/

initGrid();

const gridSizeButton = document.getElementById('gridSizeButton').addEventListener('click', getGridSize);
const rainbowButton = document.getElementById('rainbowButton').addEventListener('click', rainbowSquares);



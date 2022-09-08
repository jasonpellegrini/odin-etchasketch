const grid = document.querySelector('#grid');

function makeGrid(){

    for (let x=0; x<256; x++){

        const squares = document.createElement('div');

        squares.classList.add('squares'); 

        grid.appendChild(squares);

        squares.addEventListener('mouseover', function(){
            squares.style.backgroundColor = 'black';
        });
    }

    
}


makeGrid();

/*const squares = document.getElementById('#squares');

squares.addEventListener('mouseover', function(){
    squares.style.backgroundColor = 'black';
});*/

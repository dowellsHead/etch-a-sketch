function createGrid(n){
    let divCount = n*n;
    let divSize = 500/n;
    const main = document.querySelector('#container');
    main.innerHTML = "";
    for (let i = 0; i<n; i++){
        for (let j = 0; j<n; j++){
            const newDiv = document.createElement('div');
            newDiv.classList.add('content');
            newDiv.style.border = "1px solid black";
            newDiv.setAttribute('class', 'cell');
            newDiv.style.width = divSize+'px';
            newDiv.style.height = divSize+'px';
            main.appendChild(newDiv);
            newDiv.addEventListener("mouseover", function (e) {
                
                e.target.style.background = "blue";
            });
        }
    }
    
function randomColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

}

}

const btn = document.querySelector('#sizeSelector');
btn.addEventListener("click", function (e) {
    let size = prompt("Please input the grid size n \n(the grid size is n by n, the max n is 100)");
    if (size<=100 && size>0) {
        createGrid(size);
    }
    else
        alert('Invalid size. Please, try again');
}); 



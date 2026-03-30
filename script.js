function createGrid(n){
    console.log('beanz');
    const main = document.querySelector('#container');
    for (let i = 0; i<n; i++){
        for (let j = 0; j<n; j++){
            const newDiv = document.createElement('div');
            newDiv.classList.add('content');
            newDiv.textContent = 'yay!';
            newDiv.setAttribute('class', 'cell');
            main.appendChild(newDiv);
        }
    }

}

createGrid(16);
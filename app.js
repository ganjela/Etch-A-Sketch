const canvas = document.querySelector('.canvas');
const button = document.querySelector('button');
let size;

createCanvas(16);
button.addEventListener('click',()=>{
    while(isNaN(size) || size > 100){
        size = Number(prompt('ENTER VALID CANVAS SIZE:'));
    };

    createCanvas(size);
    size = NaN;
});


function createCanvas(s){
    const allSquares = canvas.querySelectorAll('.square');
    allSquares.forEach(square=>square.parentNode.removeChild(square));
    const width = 960/s;
    for(i=0;i<s*s;i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${width}px`
        square.style.height = `${width}px`
        canvas.appendChild(square);

        square.addEventListener('mouseover', () => {
            square.classList.add('black');
        });
    }

}
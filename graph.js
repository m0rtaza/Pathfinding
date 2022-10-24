console.log('graph.js...');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Properties
var squareLength = 50;

// canvas.width = columns * squareLength;
// canvas.height = rows * squareLength;


function drawSquares(rows, columns) {
    console.log('drawing squares');

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            console.log(i, j);
            ctx.rect(i * squareLength, j * squareLength, squareLength, squareLength);
            ctx.stroke();
        }
    }
}

const colorSquare = (position, color) => {
    ctx.fillStyle = color;
    ctx.stroke = color;
    ctx.fillRect(position[0] * squareLength, position[1] * squareLength, squareLength, squareLength);
}


export { drawSquares, colorSquare };
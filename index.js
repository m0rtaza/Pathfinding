
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Properties
const CANVAS_HEIGHT = 1000;
const CANVAS_WIDTH = 1000;
const SQUARE_LENGTH = 50;

const ROWS = CANVAS_WIDTH / SQUARE_LENGTH;
const COLUMNS = CANVAS_HEIGHT / SQUARE_LENGTH;
const SQUARES = ROWS * COLUMNS;

// Input
const start = [2, 2];
const target = [4, 15];
const rows = 4;
const columns = 4;

canvas.width = columns * SQUARE_LENGTH;
canvas.height = rows * SQUARE_LENGTH;

graph = {
    a: ['a', 'c'],
    b: [],

}


function drawSquares() {

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLUMNS; j++) {
            console.log(i, j);
            ctx.rect(i * SQUARE_LENGTH, j * SQUARE_LENGTH, SQUARE_LENGTH, SQUARE_LENGTH);
            ctx.stroke();
        }
    }
}

function typeOfSquareColor(type) {
    switch(type) {
        case 'start':
            ctx.fillStyle = 'green';
            ctx.stroke = 'green';
            break;
        case 'target':
            ctx.fillStyle = 'red';
            ctx.stroke = 'red';
            break;
        default:
            break;
    }
}

colorSquare = (row, column, type) => {

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLUMNS; j++) {
            if (i == column && j == row) {
                typeOfSquareColor(type);
                ctx.fillRect(i * SQUARE_LENGTH, j * SQUARE_LENGTH, SQUARE_LENGTH, SQUARE_LENGTH);
            }
        }
    }
}



drawSquares();
colorSquare(start[0], start[1], 'start');
colorSquare(target[0], target[1], 'target');



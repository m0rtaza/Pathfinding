
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Properties
const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 1000;
const SQUARE_LENGTH = 50;

const ROWS = CANVAS_WIDTH / SQUARE_LENGTH;
const COLUMNS = CANVAS_HEIGHT / SQUARE_LENGTH;
const SQUARES = ROWS * COLUMNS;

// Config
const start = [2, 2];


canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

graph = {
    a: ['a', 'c'],
    b: [],

}


function drawNodes() {

    for (let i = 0; i < ROWS; i++) {

        for (let j = 0; j < COLUMNS; j++) {
            console.log(i, j);
            ctx.rect(i * SQUARE_LENGTH, j * SQUARE_LENGTH, SQUARE_LENGTH, SQUARE_LENGTH);
            ctx.stroke();
        }
    }
}

function colorTypeOfSquare(type) {
    switch(type) {
        case 'start':
            ctx.fillStyle = 'green';
            ctx.stroke = 'green';
            break;
        case 'end':
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
                colorTypeOfSquare(type);
                ctx.fillRect(i * SQUARE_LENGTH, j * SQUARE_LENGTH, SQUARE_LENGTH, SQUARE_LENGTH);
            }
        }
    }
}



drawNodes();
colorSquare(start[0], start[1], 'end');



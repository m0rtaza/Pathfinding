import { drawSquares, colorSquare } from './modules/graph.js';

// Input
const source = [2, 2];
const target = [2, 5];
const rows = 6;
const columns = 6;

drawSquares(rows, columns);
colorSquare(source, 'green');
colorSquare(target, 'red');



// start importing all your test files here
// NOTE: this file is linked to the index.html file

// 1. install handy via : npm i @handy.js/handy
// 2. or link the package locally by going to the package directory and running : npm link
// then run : npm link @handy.js/handy

import "@handy.js/handy";
import { Matrix } from "@handy.js/handy";

// Example usage
const matrix1 = new Matrix([
  [1, 2, 3],
  [4, 5, 6],
]);
const matrix2 = new Matrix([
  [7, 8, 9],
  [10, 11, 12],
]);
const matrix3 = new Matrix([
  [1, 2],
  [3, 4],
  [5, 6],
]);

console.log("Matrix 1:");
matrix1.log();

console.log("Matrix 2:");
matrix2.log();

console.log("Matrix 3:");
matrix3.log();

console.log("Matrix 1 size:", matrix1.size());
console.log("Matrix 2 shape:", matrix2.shape());

const matrix4 = Matrix.add(matrix1, matrix2);
console.log("Matrix 1 + Matrix 2:");
matrix4.log();

const matrix5 = Matrix.subtract(matrix1, matrix2);
console.log("Matrix 1 - Matrix 2:");
matrix5.log();

const matrix6 = Matrix.multiply(matrix1, matrix3);
console.log("Matrix 1 * Matrix 3:");
matrix6.log();

const matrix1Transposed = Matrix.transpose(matrix1);
console.log("Matrix 1 Transposed:");
matrix1Transposed.log();

const zeros = Matrix.zeros(3, 2);
console.log("Zeros:");
zeros.log();

const ones = Matrix.ones(2, 3);
console.log("Ones:");
ones.log();

const eye = Matrix.eye(4);
console.log("Identity Matrix:");
eye.log();

const rand = Matrix.random(2, 2, 10);
console.log("Random Matrix");
rand.log();
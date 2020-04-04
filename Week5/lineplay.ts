'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const lineCount: number = 15;
const border: number = 20;
const LineDistanceX = (canvas.width-border)/lineCount;
const LineDistanceY: number = (canvas.height-border)/lineCount;

for ( let i: number = 1; i < lineCount -1; i++) {
  ctx.beginPath();
  ctx.strokeStyle = 'yellow';
  ctx.moveTo((0+border+LineDistanceX)+ i * LineDistanceX, 0+border);
  ctx.lineTo(600-border,(0+border) + i * LineDistanceY);
  ctx.stroke();
  ctx.closePath();
}

for (let j: number = 1; j < lineCount -1; j++) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo((0+border),(0+border) + j * LineDistanceY);
  ctx.lineTo((0 + border) + j * LineDistanceX,400-border);
  ctx.stroke();
}
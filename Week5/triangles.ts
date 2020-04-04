'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const baseTriangleCount: number = 2;
const triangleWidth: number = 400/baseTriangleCount;
const triangleHeightSquare: number = (triangleWidth*triangleWidth) - ((triangleWidth/2)*(triangleWidth/2));
const triangleHeight: number =canvas.height/ Math.sqrt(triangleHeightSquare)
const halfWidth: number = triangleWidth/2

ctx.beginPath();
ctx.strokeStyle = 'blue';

//horizontális

for (let i: number = 0; i < baseTriangleCount; i++) {
  ctx.moveTo(100 + i * halfWidth,400 - i * (canvas.height/baseTriangleCount));
  ctx.lineTo(500 - i * halfWidth,400 - i *(canvas.height/ baseTriangleCount));
  ctx.stroke();
}

// '\'

for (let i: number = 0; i < baseTriangleCount; i++) {
  ctx.moveTo(300 - i * halfWidth, 0 + i * (canvas.height/baseTriangleCount));
  ctx.lineTo(500 - i * triangleWidth, 400 );
  ctx.stroke();

}

// '/'

for (let i: number = 0; i < baseTriangleCount; i++) {
  ctx.moveTo(100+ i * triangleWidth, 400);
  ctx.lineTo(300 + i * halfWidth , 0 + i *(canvas.height/baseTriangleCount) );
  ctx.stroke();
}
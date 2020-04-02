'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const quarterLineCount: number = 14;
const lineDistanceX: number = 300/quarterLineCount;
const lineDistanceY: number = 200/quarterLineCount;


// jobb felső quadráns

ctx.strokeStyle = 'red';
ctx.beginPath();
for ( let i: number = 0; i <= quarterLineCount; i++) {
    ctx.moveTo(300,0 + i * lineDistanceY);
    ctx.lineTo(300 + i * lineDistanceX, 200);
    ctx.stroke();
}

// jobb alsó quadráns

for (let j: number = 0; j <= quarterLineCount; j++) {
  ctx.moveTo(600 - j * lineDistanceX, 200);
  ctx.lineTo(300, 200 + j * lineDistanceY);
  ctx.stroke();
}

// bal alsó quadráns

for (let k: number = 0; k <= quarterLineCount; k++) {
  ctx.moveTo(300,400 - k * lineDistanceY);
  ctx.lineTo(300 - k * lineDistanceX, 200);
  ctx.stroke();
}

// bal felső quadráns

for (let l: number = 0; l <= quarterLineCount; l++) {
  ctx.moveTo(0 + l * lineDistanceX ,200);
  ctx.lineTo(300, 200 - l * lineDistanceY);
  ctx.stroke();
}
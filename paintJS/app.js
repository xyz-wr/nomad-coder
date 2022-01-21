const $canvas = document.getElementById('jsCanvas');
const ctx = $canvas.getContext('2d');
const $colors = document.getElementsByClassName('jsColor');
const $range = document.getElementById('jsRange');
const $mode = document.getElementById('jsMode');
const $saveBtn = document.getElementById('jsSave');
const INITIAL_COLOR = '#2c2c2c';
const CANVAS_SIZE = '700';

//pixel manupulating size 
//canvas를 pixel을 다룰 수 있는 element로 만드는 것
// width, height 지정
$canvas.width = CANVAS_SIZE;
$canvas.height = CANVAS_SIZE;

ctx.strokeStyle = 'INITIAL_COLOR';
ctx.fillStyle = 'white';
ctx.lineWidth = 2.5;
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); 

let painting = false;
let filling = false;

//canvas Events
function onMouseMove(event){
  const x = event.offsetX;
  const y = event.offsetY;
  console.log(!painting);
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function stopPainting(){
  painting = false;
}

function startPainting() {
  painting = true;
}

//changing color
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color; //fill색상 변경
}

//brush size
function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

//fill
function handleModeClick() {
  if(filling === true){
    filling = false;
    $mode.innerText ='Fill';
  } else {
    filling = true;
    $mode.innerText = 'Paint';
    ctx.fillStyle = ctx.strokeStyle;
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); 
  }
}

//saving
function handleSaveClick(){
  const image = $canvas.toDataURL(); 
  const link = document.createElement('a');
  link.href = image;
  link.download = 'paintJS';
  link.click();
}

function handleCM(event) {
  event.preventDefault(); //우클릭 저장 방지
}

//canvas events
if ($canvas) {
  $canvas.addEventListener('mousemove', onMouseMove);
  $canvas.addEventListener('mousedown', startPainting);
  $canvas.addEventListener('mouseup', stopPainting)
  $canvas.addEventListener('mouseleave', stopPainting);
  $canvas.addEventListener('click', handleCanvasClick);
  $canvas.addEventListener('contextmenu', handleCM);
}

//changing color
Array.from($colors).forEach(color =>
  color.addEventListener('click', handleColorClick)
);


//brush size
if ($range) {
  $range.addEventListener('click', handleRangeChange);
}

//fill
if ($mode) {
  $mode.addEventListener('click', handleModeClick);
}

//saving
if ($saveBtn) {
  $saveBtn.addEventListener('click', handleSaveClick);
}
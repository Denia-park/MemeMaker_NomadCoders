const color = document.getElementById("color");
const lineWidth = document.getElementById('line-width');
const canvas = document.querySelector('canvas');

//context 를 ctx 로 짧게 명명
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;

function onMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
    isPainting = true;
}
function cancelPainting() {
    isPainting = false;
    ctx.beginPath();
}
function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);

/*캔버스 밖으로 마우스가 나갔을때 발생하는 마우스를 떼도 그림이 그려지는 버그 수정*/

//1번
// document.addEventListener("mouseup", onMouseUp);
//2번
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);


lineWidth.addEventListener("change", onLineWidthChange);

color.addEventListener("change", onColorChange);


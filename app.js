const canvas = document.querySelector('canvas');

//context 를 ctx 로 짧게 명명
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(50, 50, 100, 200);

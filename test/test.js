let svg = new ctxsvg.SVGContext('svg');
let canvas = document.querySelector('canvas').getContext('2d');
function draw(ctx) {
    ctx.fillStyle = 'rgba(255,0,0, 0.25)';
    ctx.fillRect(200, 200, 150, 150);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.lineTo(300, 200);
    ctx.lineTo(400, 400);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 5;
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(150, 400);
    ctx.lineTo(300, 200);
    ctx.closePath();
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fill();
    ctx.stroke();

    ctx.fillRect(300, 300, -50, 50);
}
draw(canvas);
draw(svg);

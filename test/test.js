/**
 * We get the context for the both the svg and the canvas.
 */
let svg = new ctxsvg.SVGContext('svg');
let canvas = document.querySelector('canvas').getContext('2d');
/**
 * This function draws an image.
 * @param {*} ctx
 */
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
    ctx.lineTo(100, 800);
    ctx.lineTo(300, 200);
    ctx.closePath();
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.rect(10, 10, 100, 180);
    ctx.moveTo(100, 100);
    ctx.lineTo(10, 20);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,200,150, 0.30)';
    ctx.fill();

    ctx.fillStyle = 'rgba(255,0,0, 0.25)';

    ctx.fillRect(300, 300, 50, 50);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.strokeStyle = 'rgba(0,0,0,0.80)';
    ctx.bezierCurveTo(0, 400, 400, 400, 400, 800);
    ctx.lineTo(0, 0);
    ctx.stroke();
}
/**
 * Asks the two context to draw the same image. If the images are the same, then the library passes the test
 */
draw(canvas);
draw(svg);

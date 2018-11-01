import context from './ctxsvg';
let c = new context('svg');
let path = c.beginPath();
c.moveTo(0, 0);
c.bezierCurveTo(0, 400, 400, 0, 400, 400);
c.lineWidth = 1;
c.strokeStyle = 'rgba(255,0,0,0.50)';
c.stroke();
path.animateTo('M0 0 C200,400 400,300 600,600', 1500);

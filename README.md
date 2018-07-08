# ctxsvg

## Installation and usage

Download the zip from the github releases and create a html document then use the library as you would with the normal canvas API.

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ctxsvg test app</title>
</head>

<body>
    <svg height="400" width="400"></svg>
    <script src="ctxsvg.min.js"></script>
    <script>
        let ctx = new ctxsvg.SVGContext('svg');
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 100);
        ctx.lineTo(300, 200);
        ctx.lineTo(400, 400);
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 5;
        ctx.closePath();
        ctx.stroke();
    </script>
</body>

</html>
```

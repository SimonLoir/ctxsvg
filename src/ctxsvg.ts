import { Path } from './path';
export interface SVGDrawOptions {
    stroke?: string;
    strokeWidth?: string;
    fill?: string;
}

export default class context {
    private svg: SVGAElement;
    private path: Path;
    private options: SVGDrawOptions = {};
    constructor(selector: string) {
        this.svg = document.querySelector(selector);
    }

    public beginPath() {
        let p: SVGPathElement = this.svg.appendChild(
            document.createElementNS('http://www.w3.org/2000/svg', 'path')
        );
        this.path = new Path(p);
        return this.path;
    }

    public moveTo(x: number, y: number) {
        this.path.path += `M${x} ${y} `;
    }

    public lineTo(x: number, y: number) {
        this.path.path += `L${x} ${y} `;
    }

    public stroke() {
        this.path.stroke(this.options);
    }

    public fill() {
        this.path.fill(this.options);
    }

    public closePath() {
        this.path.path += 'Z';
    }

    public fillRect(x: number, y: number, width: number, height: number) {
        let rect = this.xrect(x, y, width, height);
        rect.setAttribute('fill', this.options.fill || 'black');
    }

    private xrect(x: number, y: number, width: number, height: number) {
        let rect: SVGRectElement = this.svg.appendChild(
            document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        );
        rect.setAttribute('x', x.toString());
        rect.setAttribute('y', y.toString());
        rect.setAttribute('width', width.toString());
        rect.setAttribute('height', height.toString());
        //rect.setAttribute('stroke', this.options.stroke || 'none'); //not needed
        return rect;
    }

    public rect(x: number, y: number, width: number, height: number) {
        this.moveTo(x, y);
        this.lineTo(x + width, y);
        this.lineTo(x + width, y + height);
        this.lineTo(x, y + height);
        this.closePath();
    }

    public bezierCurveTo(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x: number,
        y: number
    ) {
        this.bezierCurve(x1, y1, x2, y2, x, y, false);
    }

    public relativeBezierCurveTo(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x: number,
        y: number
    ) {
        this.bezierCurve(x1, y1, x2, y2, x, y, true);
    }
    private bezierCurve(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x: number,
        y: number,
        relative: boolean
    ) {
        this.path.path += `${
            relative == true ? 'c' : 'C'
        }${x1},${y1} ${x2},${y2} ${x},${y}`;
    }

    public set strokeStyle(style: string) {
        this.options.stroke = style;
    }

    public set lineWidth(style: number) {
        this.options.strokeWidth = style.toString();
    }

    public set fillStyle(style: number) {
        this.options.fill = style.toString();
    }
}

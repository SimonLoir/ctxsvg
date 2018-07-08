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
        //this.options = {};
        let p: SVGPathElement = this.svg.appendChild(
            document.createElementNS('http://www.w3.org/2000/svg', 'path')
        );
        this.path = new Path(p);
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
        this.beginPath();
        this.moveTo(x, y);
        this.lineTo(x + width, y);
        this.lineTo(x + width, y + height);
        this.lineTo(x, y + height);
        this.closePath();
        this.fill();
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

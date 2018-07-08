import { SVGDrawOptions } from './ctxsvg';

export class Path {
    private node: SVGPathElement;
    public path: string = '';
    constructor(path: SVGPathElement) {
        this.node = path;
    }

    private createPath() {
        this.node.setAttribute('d', this.path);
    }

    public stroke(opts: SVGDrawOptions) {
        this.createPath();
        this.node.setAttribute('stroke', opts.stroke || 'black');
        this.node.setAttribute('stroke-width', opts.strokeWidth || '1');
        if (!this.node.getAttribute('fill'))
            this.node.setAttribute('fill', 'none');
    }

    public fill(opts: SVGDrawOptions) {
        this.createPath();
        this.node.setAttribute('fill', opts.fill || 'black');
    }
}

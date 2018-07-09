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

    public animateTo(path: string, time = 2500) {
        let diff_error = 'Error, pathes are too different';
        let xpath = '';
        let old = this.cutPath(this.node.getAttribute('d'));
        let p = this.cutPath(path);
        let diffs: Array<number> = [];
        let vals: Array<number> = [];
        let count = 0;
        if (p.length != old.length) throw diff_error;

        for (let i = 0; i < p.length; i++) {
            const n = p[i];
            const o = old[i];
            if (n == o) {
                xpath += n;
            } else {
                let n_spl = n.split(' ');
                let o_spl = o.split(' ');
                if (n_spl.length != o_spl.length) throw diff_error;
                for (let i2 = 0; i2 < n_spl.length; i2++) {
                    const nn = n_spl[i2];
                    const oo = o_spl[i2];
                    if (nn == oo) {
                        xpath += nn;
                    } else {
                        let nn_spl = n.split(',');
                        let oo_spl = o.split(',');
                        if (nn_spl.length != oo_spl.length) throw diff_error;
                        for (let i3 = 0; i3 < nn_spl.length; i3++) {
                            const nnn = nn_spl[i3];
                            const ooo = oo_spl[i3];
                            if (nnn == ooo) {
                                xpath += nnn;
                            } else {
                                diffs.push(parseFloat(nnn) - parseFloat(ooo));
                                vals.push(parseFloat(ooo));
                                xpath += `{$${diffs.length - 1}}`;
                            }
                            if (i3 != nn_spl.length - 1) xpath += ',';
                        }
                    }
                    if (i2 != n_spl.length - 1) xpath += ' ';
                }
            }
        }

        let per_milli_second = diffs.map((e: number) => e / time);
        let last: number = null;
        let start: number = null;
        const update = (timestamp: number) => {
            if (last == null) last = timestamp + 0;
            if (start == null) start = timestamp + 0;
            let x = timestamp - last;
            //console.log(timestamp - last);
            let xxpath = xpath;
            for (let i = 0; i < vals.length; i++) {
                vals[i] += per_milli_second[i] * (x == 0 ? 17 : x);
                xxpath = xxpath.replace(`{$${i}}`, vals[i].toString());
            }
            console.log(vals);
            if (timestamp - start < time) requestAnimationFrame(update);
            this.node.setAttribute('d', xxpath);
            last = timestamp;
        };

        console.log(diffs);
        console.log(old);
        console.log(p);
        console.log(per_milli_second);
        console.log(xpath);

        requestAnimationFrame(update);
    }

    get get() {
        return this.node;
    }

    private cutPath(path: string) {
        let parts: Array<string> = [];
        let break_points = 'mlhvcsqtaz';
        let buffer = '';
        for (let i = 0; i < path.length; i++) {
            const char = path[i];
            if (break_points.indexOf(char.toLowerCase()) >= 0) {
                if (buffer != '') parts.push(buffer);
                parts.push(char);
                buffer = '';
            } else {
                buffer += char;
            }
        }
        if (buffer != '') parts.push(buffer);
        return parts;
    }
}

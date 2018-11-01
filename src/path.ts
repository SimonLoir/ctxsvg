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

    public animateTo(path: string, duration = 2500, then?: () => void) {
        let diff_error = 'Error, pathes are too different';
        let xpath = '';
        let old = this.cutPath(this.node.getAttribute('d'));
        let p = this.cutPath(path);
        let diffs: Array<number> = [];
        let vals: Array<number> = [];
        let end_vals: Array<number> = [];
        let count = 0;
        if (p.length != old.length) throw diff_error;

        for (let i = 0; i < old.length; i++) {
            const xold = old[i];
            const xnew = p[i];
            //console.log(xold, xnew);
            if (xold == xnew) {
                xpath += xold;
            } else {
                // We first split into small pieces (using spaces)
                const new_space_spl = xnew.split(' ');
                const old_space_spl = xold.split(' ');
                //console.table({ new_space_spl, old_space_spl });

                if (new_space_spl.length != old_space_spl.length)
                    throw diff_error;
                for (
                    let i_spaces = 0;
                    i_spaces < new_space_spl.length;
                    i_spaces++
                ) {
                    // Then we split into commas
                    const new_comma_spl = new_space_spl[i_spaces].split(',');
                    const old_comma_spl = old_space_spl[i_spaces].split(',');
                    if (new_comma_spl.length != old_comma_spl.length)
                        throw diff_error;
                    for (
                        let i_commas = 0;
                        i_commas < new_comma_spl.length;
                        i_commas++
                    ) {
                        let ncomma: any = new_comma_spl[i_commas];
                        let ocomma: any = old_comma_spl[i_commas];
                        //console.table({ ncomma, ocomma });
                        if (ncomma == ocomma) {
                            xpath += ncomma;
                        } else {
                            ncomma = parseFloat(ncomma);
                            ocomma = parseFloat(ocomma);
                            diffs.push(ncomma - ocomma);
                            vals.push(ocomma);
                            end_vals.push(ncomma);
                            xpath += `{${diffs.length - 1}}`;
                        }
                        if (i_commas != new_comma_spl.length - 1) xpath += ',';
                    }
                    if (i_spaces != new_space_spl.length - 1) xpath += ' ';
                }
            }
        }

        console.table({
            base: this.node.getAttribute('d'),
            path,
            xpath,
            old,
            p,
            diffs,
            vals,
            end_vals,
            count
        });
        console.log(xpath);

        let startTime: number = null;

        const animate = (time: number) => {
            if (startTime === null) startTime = time;
            let p = xpath;
            let elapsed = time - startTime;
            for (let i = 0; i < diffs.length; i++) {
                const diff = diffs[i];
                const startPos = vals[i];
                let ease = easeInOut(elapsed, startPos, diff, duration);
                p = p.replace(`{${i}}`, ease.toString());
            }
            this.node.setAttribute('d', p);

            if (elapsed < duration) requestAnimationFrame(animate);
            else {
                this.node.setAttribute('d', path);
                console.timeEnd('e');
            }
        };
        console.time('e');
        animate(startTime);
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

/**
 * function easeInOut(t: number, b: number, c: number, d: number): number {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
}
let duration = 750;
        let pos = target.offsetTop;
        let startPos = target.offsetParent.scrollTop;
        let d = pos - startPos;
        let startTime: number = null;

        const animate = (time: number) => {
            if (startTime === null) startTime = time;
            let elapsed = time - startTime;
            let ease = easeInOut(elapsed, startPos, d, duration);
            target.offsetParent.scrollTop = ease;
            if (elapsed < duration) requestAnimationFrame(animate);
            else {
                window.location.hash = this.getAttribute('href');
            }
        };

        animate(startTime);
 */
function easeInOut(t: number, b: number, c: number, d: number): number {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
}

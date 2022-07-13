import { Shape } from './Shape';
import {Point} from "./Point";

export class Triangle extends Shape {
    private readonly v1: Point;
    private readonly v2: Point;
    private readonly v3: Point;
    protected filled: boolean;
    protected color: string;

    constructor(v1: Point, v2: Point, v3: Point);
    constructor(v1: Point, v2: Point, v3: Point, color?: string, filled?: boolean) {
        super([v1, v2, v3], color, filled);
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;

        if (color !== undefined && filled !== undefined) {
            this.color = color;
            this.filled = filled;
        }
    }

    getType(): string {
        const ab = this.v1.distance(this.v2).toFixed(2);
        const bc = this.v2.distance(this.v3).toFixed(2);
        const ac = this.v3.distance(this.v1).toFixed(2);
        if (ab === bc && bc === ac) {
            return 'equilateral triangle'
        }

        if (ab !== bc && ab !== ac && ac !== bc) {
            return 'scalene triangle';
        }

        return 'isosceles triangle';
    }

    toString(): string {
        return `Triangle[v1=${this.v1.toString()},v2=${this.v2.toString()},v3=${this.v3.toString()}]`
    }

}

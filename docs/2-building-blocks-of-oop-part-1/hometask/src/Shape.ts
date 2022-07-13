import {Point} from "./Point";

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    private points: Point[]
    abstract getType(): string;

    constructor(points: Point[]);
    constructor(points: Point[], color: string, filled: boolean);
    constructor(points: Point[], color?: string, filled?: boolean) {
        if (points.length < 3) {
            throw Error('Not enough points')
        }

        if (color === undefined && filled === undefined) {
            this.points = points;
            this.color = 'green';
            this.filled = true;
            return;
        }

        this.points = points;
        this.color = color;
        this.filled = filled;
    }

    toString(): string {
        const points = this.points.join(', ').toString();

        return `A Shape with color of ${this.color} and ${this.filled ? '' : 'not'} filled. Points: ${points}.`;
    }

    getPerimeter(): number {
        return this.points.reduce((prev, curr) => prev + curr.distance(), 0)
    }
}

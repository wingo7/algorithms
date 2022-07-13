export class Point {
    private readonly x: number;
    private readonly y: number;

    constructor();
    constructor(x: number);
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {
        if (x === undefined) {
            this.x = 0;
            this.y = 0;
            return;
        }
        if (y === undefined) {
            this.x = x;
            this.y = x;
            return;
        }

        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    distance(): number;

    distance(x: Point): number;

    distance(x: number, y: number): number;

    distance(x?: number | Point, y?: number): number {
        if (x === undefined) {
            return Math.sqrt(this.x ** 2 + this.y ** 2);
        }

        if (x instanceof Point) {
            return Math.sqrt((x.x - this.x) ** 2 + (x.y - this.y) ** 2);
        }

        return Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
    }

}


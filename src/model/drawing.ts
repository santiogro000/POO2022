import { 
    Figure, 
} from './figure';

import { 
    Line 
} from './line';

export class Drawing {
    private figures: Figure[] = [
    ];

    private modified = false;
    private name: string | null = null;

    constructor() {
    }

    paint(
        ctx: CanvasRenderingContext2D ): void {

        this.figures.forEach( 
            (f: Figure) => f.paint( ctx ) 
        );
    }

    addTestFigures(): void {               // NEW
        const redLine: Line = new Line(
            { x: 10, y: 10 },
            { w: 300, h: 100 },
            { r: 255, g: 0, b: 0, a: 255 }
        );
        this.figures
            .push(
                redLine
            );

        const greenLine: Line = new Line(
            { x: 10, y: 10 },
            { w: 300, h: 200 },
            { r: 0, g: 255, b: 0, a: 255 }
        );
        this.figures
            .push(
                greenLine
            );

        const blueLine: Line = new Line(
            { x: 10, y: 10 },
            { w: 300, h: 300 },
            { r: 0, g: 0, b: 255, a: 255 }
        );
        this.figures
            .push(
                blueLine
            );
    }
}

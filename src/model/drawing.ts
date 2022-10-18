import { 
    BoundBox, 
} from './bound-box';

import { 
    Figure, 
} from './figure';

import { 
    Line 
} from './line';
import { Rectangle } from './rectangle';

export class Drawing {
    private figures: Figure[] = [
    ];

    private modified = false;
    private name: string | null = null;

    constructor() {
    }

    // polymorphism in action
    paint(
        ctx: CanvasRenderingContext2D ): void {

        this.figures.forEach( 
            (f: Figure) => f.paint( ctx ) 
        );
    }

    // TODO: delete this
    addTestFigures(): void {               
        const redRectangle: Rectangle = new Rectangle(
            new BoundBox( { x: 100, y: 100 }, { w: 400, h: 100 } ),   // NEW
            { r: 255, g: 0, b: 0, a: 255 }
        );
        this.figures
            .push(
                redRectangle
            );

        const greenRectangle: Rectangle = new Rectangle(
            new BoundBox( { x: 100, y: 100 }, { w: 400, h: 200 } ),   // NEW
            { r: 0, g: 255, b: 0, a: 255 }
        );
        this.figures
            .push(
                greenRectangle
            );

        const blackRectangle: Rectangle = new Rectangle(
            new BoundBox( { x: 100, y: 100 }, { w: 400, h: 300 } ),   // NEW
            { r: 0, g: 0, b: 0, a: 255 }
        );
        this.figures
            .push(
                blackRectangle
            );
    }

    // NEW
    selectAll(): void {
        this.figures.forEach( 
            (f: Figure) => f.selected = true 
        );
    }
}

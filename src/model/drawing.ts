import { 
    BoundBox, 
} from './bound-box';

import { 
    Figure, 
} from './figure';

import { 
    Line 
} from './line';
import { 
    Rectangle 
} from './rectangle';
import { 
    Elipse 
} from './elipse';

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
        const redElipse: Elipse = new Elipse(
            new BoundBox( { x: 100, y: 100 }, { w: 400, h: 100 } ),   // NEW
            { r: 255, g: 0, b: 0, a: 255 }
        );
        this.figures
            .push(
                redElipse
            );

        const greenElipse: Elipse = new Elipse(
            new BoundBox( { x: 100, y: 100 }, { w: 400, h: 200 } ),   // NEW
            { r: 0, g: 255, b: 0, a: 255 }
        );
        this.figures
            .push(
                greenElipse
            );

        const blackElipse: Elipse = new Elipse(
            new BoundBox( { x: 100, y: 100 }, { w: 400, h: 300 } ),   // NEW
            { r: 0, g: 0, b: 0, a: 255 }
        );
        this.figures
            .push(
                blackElipse
            );
    }

    // NEW
    selectAll(): void {
        this.figures.forEach( 
            (f: Figure) => f.selected = true 
        );
    }
}

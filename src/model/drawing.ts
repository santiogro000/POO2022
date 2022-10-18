import { 
    Figure, 
} from './figure';

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
}

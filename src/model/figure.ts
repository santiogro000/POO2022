import { BoundBox } from './bound-box';
import { Color } from '../util/color-helper';
import { GraphicsObject } from './graphics-object';

export abstract class Figure 
    implements GraphicsObject {

    // public interface -------------------------------
    
    protected abstract doPaint( 
        ctx: CanvasRenderingContext2D ): void;

    constructor(
        protected bbox: BoundBox,       // NEW
        protected color: Color ) {
    }

    get selected(): boolean {
        return this._selected;
    }

    set selected( s: boolean ) {
        this._selected = s;
    }

    // Template Method
    paint( 
        ctx: CanvasRenderingContext2D ): void {

        // 1. paint figure
        this.doPaint(
            ctx
        );

        // 2. paint bounding box
        if ( this.selected ) {
            this.bbox
                .paint(
                    ctx
                );
        }
    }

    // non-public members -----------------------------

    protected _selected: boolean = false;
}

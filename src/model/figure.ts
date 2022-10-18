import { BoundBox } from './bound-box';
import { Color } from '../util/color-helper';
import { GraphicsObject } from './graphics-object';

export abstract class Figure 
    implements GraphicsObject {

    // public interface -------------------------------
    
    abstract paint( 
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

    // non-public members -----------------------------

    protected _selected: boolean = false;
}

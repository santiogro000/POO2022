import { BoundBox } from './bound-box';
import { Color,ColorHelper } from '../util/color-helper';
import { GraphicsObject } from './graphics-object';

export abstract class Figure 
    implements GraphicsObject {

    // public interface -------------------------------
    
    protected abstract doPaint( 
        ctx: CanvasRenderingContext2D ): void;

    constructor(
        protected bbox: BoundBox,       // NEW
        protected color: Color ) {
    };
    protected _selected: boolean = false;

    get selected(): boolean {
        return this._selected;
    };

    set selected( s: boolean ) {
        this._selected = s;

    };
    
    
    // Template Method
    paint( 
        ctx: CanvasRenderingContext2D ): void {
        
        // 1. Saves current state of ctx
        ctx.save();

        // 2. Sets Color
        ctx.strokeStyle = ColorHelper.colorAsString(  
            this.color
        ); 
        // 3. Paints figure
        this.doPaint(
            ctx
        );
        
        // 4. Restores state of ctx
        ctx.restore();

        // 5. Paint bounding box (if aplicable)
        if ( this.selected ) {
            this.bbox
                .paint(
                    ctx
                );
        }
        
    }

    // NEW
    select( 
        evDown: MouseEvent,
        evUp?: MouseEvent ): void {
        
        this.selected = this.bbox
            .select( 
                evDown, 
                evUp 
            );
    // non-public members -----------------------------
    }
}

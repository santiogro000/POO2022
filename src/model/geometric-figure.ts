import { Figure } from './figure';
import { Color,ColorHelper } from '../util/color-helper';
import { GraphicsObject } from './graphics-object';

export abstract class GeometricFigure 
    extends Figure {
        protected abstract doPaint( 
            ctx: CanvasRenderingContext2D ): void;

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
}

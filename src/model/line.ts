import { 
    BoundBox, 
} from './bound-box';

import { 
    Color,
    ColorHelper, 
} from '../util/color-helper';

import { 
    Figure,
} from './figure';

export class Line 
    extends Figure {

    constructor(
        bbox: BoundBox,
        color: Color ) {

        super(
            bbox,
            color
        );
    }
        
    paint(
        ctx: CanvasRenderingContext2D ): void {

        ctx.strokeStyle = ColorHelper.colorAsString(
            this.color
        );

        ctx.beginPath();
        ctx.moveTo(
            this.bbox.x, 
            this.bbox.y
        );
        ctx.lineTo(
            this.bbox.x + this.bbox.w, 
            this.bbox.y + this.bbox.h
        );
        ctx.stroke();

        // NEW
        if ( this.selected ) {
            this.bbox
                .paint(
                    ctx
                );
        }
    }
}
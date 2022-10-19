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


export class Text
    extends Figure {

    protected doPaint(
        ctx: CanvasRenderingContext2D): void {
        const lenghtText = ctx.measureText('Hello World');
        const text = "";
        ctx.textBaseline = "hanging";
        ctx.font = '48px serif';
        lenghtText.actualBoundingBoxAscent;
        ctx.fillStyle = ColorHelper.colorAsString(
            this.color
        );
        ctx.fillText('Hello world sweet world in this October 18th', (this.bbox.x), (this.bbox.h));
        
        }
}


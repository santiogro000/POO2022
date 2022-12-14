import {
    Figure,
} from './figure';


export class Text
    extends Figure {

    protected doPaint(
        ctx: CanvasRenderingContext2D): void {
        const text = "Hello world sweet world in this October 18th";
        
        ctx.fillStyle = ctx.strokeStyle;
        const lenghtText = ctx.measureText(text);
        ctx.textBaseline = "hanging";
        ctx.font = '48px serif';
        lenghtText.actualBoundingBoxAscent;
        ctx.fillText(text, (this.bbox.x), (this.bbox.h));
        
        }
}


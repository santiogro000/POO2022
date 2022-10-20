import { 
    Color,
    ColorHelper, 
} from '../util/color-helper';

import { 
    GeometricFigure,
} from './geometric-figure';

export class Rectangle
    extends GeometricFigure {
        
    protected doPaint(
        ctx: CanvasRenderingContext2D ): void {

        ctx.strokeStyle = ColorHelper.colorAsString(
            this.color
        );
        //Top line
        ctx.beginPath();
        ctx.moveTo(
            this.bbox.x, 
            this.bbox.y
        );
        ctx.lineTo(
            this.bbox.x + this.bbox.w, 
            this.bbox.y
        );
        ctx.stroke();
        //Right line
        ctx.beginPath();
        ctx.moveTo(
            this.bbox.x + this.bbox.w, 
            this.bbox.y
        );
        ctx.lineTo(
            this.bbox.x + this.bbox.w, 
            this.bbox.y + this.bbox.h
        );
        ctx.stroke();
        //Bottom line
        ctx.beginPath();
        ctx.moveTo(
            this.bbox.x + this.bbox.w, 
            this.bbox.y + this.bbox.h
        );
        ctx.lineTo(
            this.bbox.x, 
            this.bbox.y + this.bbox.h
        );
        ctx.stroke();
        //Left line
        ctx.beginPath();
        ctx.moveTo(
            this.bbox.x, 
            this.bbox.y + this.bbox.h
        );
        ctx.lineTo(
            this.bbox.x,
            this.bbox.y 
        );
        ctx.stroke();
    }
}
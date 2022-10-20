import { 
    GeometricFigure,
} from './geometric-figure';

export class Line 
    extends GeometricFigure {

        
    protected doPaint(
        ctx: CanvasRenderingContext2D ): void {

        ctx.strokeStyle = this.stringColor;

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
    }
}
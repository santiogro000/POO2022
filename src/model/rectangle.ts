import { GeometricClosedFigure } from "./geometric-closed-figure";

export class Rectangle
    extends GeometricClosedFigure {
        
    protected doPaint(
        ctx: CanvasRenderingContext2D ): void {

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
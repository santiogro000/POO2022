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
        
        //Right line
        ctx.moveTo(
            this.bbox.x + this.bbox.w, 
            this.bbox.y
        );
        ctx.lineTo(
            this.bbox.x + this.bbox.w, 
            this.bbox.y + this.bbox.h
        );
        
        //Bottom line
        ctx.moveTo(
            this.bbox.x + this.bbox.w, 
            this.bbox.y + this.bbox.h
        );
        ctx.lineTo(
            this.bbox.x, 
            this.bbox.y + this.bbox.h
        );
        
        //Left line
        ctx.moveTo(
            this.bbox.x, 
            this.bbox.y + this.bbox.h
        );
        ctx.lineTo(
            this.bbox.x,
            this.bbox.y 
        );
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
    }
    
}
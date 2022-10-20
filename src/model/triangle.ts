import { GeometricClosedFigure } from "./geometric-closed-figure";

export class Triangle
    extends GeometricClosedFigure {
        
    protected doPaint(
        ctx: CanvasRenderingContext2D ): void {

        
        ctx.beginPath();
        //Bottom Right Corner
        ctx.moveTo(
            this.bbox.x, 
            this.bbox.y+this.bbox.h
        );
        //Middle Top
        ctx.lineTo(
            this.bbox.x + (this.bbox.w)/2, 
            this.bbox.y
        );
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(
            this.bbox.x + (this.bbox.w)/2, 
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
            this.bbox.y+this.bbox.h
        );
        ctx.stroke();
        
    }
    
}
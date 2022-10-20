import { GeometricClosedFigure } from "./geometric-closed-figure";

export class Ellipse
    extends GeometricClosedFigure {

    protected doPaint(
        ctx: CanvasRenderingContext2D): void {
        
        let ellipse = new Path2D();
        ctx.beginPath();
        let angle = 0
        let raidiusX = this.bbox.w/2;
        let raidiusY = this.bbox.h/2;
        let centerX = this.bbox.x + raidiusX;
        let centerY = this.bbox.y + raidiusY;
        for (let i = 0 * Math.PI; i < 2 * Math.PI; i += 0.01) {
            let xPos = centerX - (raidiusY * Math.sin(i)) * Math.sin(angle * Math.PI) + (raidiusX * Math.cos(i)) * Math.cos(angle * Math.PI);
            let yPos = centerY + (raidiusX * Math.cos(i)) * Math.sin(angle * Math.PI) + (raidiusY * Math.sin(i)) * Math.cos(angle * Math.PI);

            if (i == 0) {
                ctx.moveTo(xPos, yPos);
            } else {
                ctx.lineTo(xPos, yPos);
            }
        }
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
    }
}
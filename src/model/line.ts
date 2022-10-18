import { 
    Color, 
    Dimension, 
    Figure,
    Position
} from './figure';

export class Line 
    extends Figure {

    constructor(
        position: Position,
        size: Dimension,
        color: Color ) {

        super(
            position,
            size,
            color
        );
    }
        
    paint( 
        ctx: CanvasRenderingContext2D ): void {

        ctx.strokeStyle = Figure.colorAsString(
            this.color
        );

        ctx.beginPath();
        ctx.moveTo(
            this.position.x, 
            this.position.y
        );
        ctx.lineTo(
            this.position.x + this.size.w, 
            this.position.y + this.size.h
        );
        ctx.stroke();
    }
}
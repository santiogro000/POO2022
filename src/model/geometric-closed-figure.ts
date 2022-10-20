import { Figure } from './figure';
import { GeometricFigure } from './geometric-figure';

export abstract class GeometricClosedFigure 
    extends GeometricFigure {
        protected abstract doPaint( 
            ctx: CanvasRenderingContext2D ): void;
        protected doFill( 
            ctx: CanvasRenderingContext2D ): void{
                ctx.fillStyle = ctx.strokeStyle;
                ctx.fill();
            };
            

    }

    

    
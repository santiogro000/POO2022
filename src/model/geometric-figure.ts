import { Figure } from './figure';

export abstract class GeometricFigure 
    extends Figure {
        protected abstract doPaint( 
            ctx: CanvasRenderingContext2D ): void;

        protected doLineStyle(
            ctx: CanvasRenderingContext2D ): void{
                ctx.lineWidth = this.linewidth;
                ctx.setLineDash([this.dashStroke,this.dashSpace]);
            }
        
        protected _linewidth: number=49;
        protected _dashStroke: number;
        protected _dashSpace: number;

        get linewidth(){
            return this._linewidth
        }

        set linewidth(n: number){
            this._linewidth=n
        }
            
        get dashStroke(){
            return this._dashStroke
        }

        set dashStroke(n: number){
            this._dashStroke=n
        }

        get dashSpace(){
            return this._dashSpace
        }

        set dash(n: number){
            this._dashSpace=n
        }  

    }

    

    
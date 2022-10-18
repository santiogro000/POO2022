import { App } from "../controller/app";
// import app from "../index";

export class GoodWindow {

    private w: number = 320;
    private h: number = 240;
    
    constructor(
        private x: number,
        private y: number ) {
    } 
    
    paint( 
        ctx: CanvasRenderingContext2D ): void {

        ctx.strokeStyle = 'darkgreen';
        ctx.beginPath();
        ctx.rect( this.x, this.y, this.w, this.h );
        ctx.stroke();
    }

    setPosition( 
        x: number, 
        y: number ): void {

        this.x = x;
        this.y = y;

        this.repaint();
    }

    // private methods --------------------------------

    private repaint(): void {
        const ctx: CanvasRenderingContext2D = App.getInstance()
            .getContext();

        this.paint(
            ctx
        );
    }
}
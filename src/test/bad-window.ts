export class BadWindow {

    w: number = 320;
    h: number = 240;
    
    constructor(
        public x: number,
        public y: number ) {
    } 

    paint( 
        ctx: CanvasRenderingContext2D ): void {

        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.rect( this.x, this.y, this.w, this.h );
        ctx.stroke();
    }
}
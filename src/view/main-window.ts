import { BadWindow } from '../test/bad-window';
import { GoodWindow } from '../test/good-window';

export class MainWindow {
    // private menu: MenuHelper;
    private canvas: Canvas;

    constructor() {
        this.canvas = new Canvas();
    }

    getContext(): CanvasRenderingContext2D {
        return this.canvas
            .getContext();
    }

    windowTest(): void {
        this.canvas
            .windowTest();
    }
}

// module private -----------------------------------------------------------

class Canvas {

    private htmlElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null;

    static readonly PAGE_WIDTH: number = 2000;
    static readonly PAGE_HEIGHT: number = 2000;

    static readonly GRID_SIZE: number = 100;
    static readonly GRID_COLOR: string = '#DDD0DD';

    constructor() {
        this.htmlElement = document.createElement(
            'canvas'
        );
        document.body
            .appendChild( 
                this.htmlElement 
            );

        this.htmlElement.width = Canvas.PAGE_WIDTH;
        this.htmlElement.height = Canvas.PAGE_HEIGHT;
        this.htmlElement.style.backgroundColor = '#FAFAFA';

        this.ctx = this.htmlElement
            .getContext(
                '2d'
            );
    }

    windowTest(): void {

        this.drawGrid(
            this.ctx
        );

        const bw: BadWindow = new BadWindow( 10, 10 );
        // initial paint
        bw.paint( 
            this.ctx 
        );

        const gw: GoodWindow = new GoodWindow( 10, 260 );
        // initial paint
        gw.paint( 
            this.ctx 
        );
        // gw.x = 200;
        // gw.y = 100;

        // 5 seconds later...
        setTimeout( () => {
            this.drawGrid(
                this.ctx
            );

            bw.paint( 
                this.ctx 
            );
            bw.x = 350;		// acceso directo
            bw.y = 10;		// acceso directo    
            console.log(
                'BAD => ' + JSON.stringify(
                    bw
                )
            );

            gw.setPosition( // acceso a través de la IP
                350,
                10
            );
            console.log(
                'GOOD => ' + JSON.stringify(
                    gw
                )
            );
        },
        5000 );
    }

    getContext(): CanvasRenderingContext2D {
        return this.ctx;
    }
    
    get width(): number {
        return this.htmlElement.width;
    }
    
    get height(): number {
        return this.htmlElement.height;
    }

    // private methods ------------------------------------------------------

    private clear(
        ctx: CanvasRenderingContext2D ): void {
        
        ctx.fillStyle = '#FAFAFA';
        ctx.fillRect( 0, 0, this.width, this.height );
    }

    private drawGrid(
        ctx: CanvasRenderingContext2D | null ): void {
            
        if ( ctx ) {
            this.clear(
                ctx
            );

            ctx.lineWidth = 1;
            ctx.strokeStyle = Canvas.GRID_COLOR;

            // TODO: use document size
            const numVerticals: number = this.width / Canvas.GRID_SIZE;
            const numHorizontals: number = this.height / Canvas.GRID_SIZE;

            // verticals
            for ( let v: number = 1; v < numVerticals; v++ ) {
                ctx.beginPath();
                ctx.moveTo( 
                    v * Canvas.GRID_SIZE, 
                    0 
                );
                ctx.lineTo(
                    v * Canvas.GRID_SIZE, 
                    Canvas.PAGE_HEIGHT 
                );
                ctx.stroke();
            }

            // horizontals
            for ( let h: number = 1; h < numHorizontals; h++ ) {
                ctx.beginPath();
                ctx.moveTo( 
                    0, 
                    h * Canvas.GRID_SIZE 
                );
                ctx.lineTo(
                    Canvas.PAGE_WIDTH, 
                    h * Canvas.GRID_SIZE 
                );
                ctx.stroke();
            }
        }
    }
}

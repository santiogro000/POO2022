import { GraphicsObject } from './graphics-object';
import { BoundBox } from './bound-box';

export enum Cardinal {
    NORTH,
    NORTH_EAST,
    EAST,
    SOUTH_EAST,
    SOUTH,
    SOUTH_WEST,
    WEST,
    NORTH_WEST
}

export class ControlPoint 
    implements GraphicsObject {

    static readonly HSIZE: number = 4;

    constructor(
        private owner: BoundBox,
        private cardinal: Cardinal ) {
    }

    paint( 
        ctx: CanvasRenderingContext2D ): void {

        ctx.fillStyle = BoundBox.color;

        let x = 0;
        let y = 0;

        // TODO: complete switch -- COMPLETED

        switch ( this.cardinal ) {
            case Cardinal.NORTH:
                x = this.owner.x + this.owner.w / 2;
                y = this.owner.y;
                break;
            case Cardinal.NORTH_EAST:
                x = this.owner.x + this.owner.w;
                y = this.owner.y;
                break;
            case Cardinal.EAST:
                x = this.owner.x + this.owner.w;
                y = this.owner.y + this.owner.h/2;
                break;
            case Cardinal.SOUTH_EAST:
                x = this.owner.x + this.owner.w;
                y = this.owner.y + this.owner.h;
                break;
            case Cardinal.SOUTH:
                x = this.owner.x + this.owner.w / 2;
                y = this.owner.y + this.owner.h;
                break;
            case Cardinal.SOUTH_WEST:
                x = this.owner.x;
                y = this.owner.y + this.owner.h;
                break;
            case Cardinal.WEST:
                x = this.owner.x;
                y = this.owner.y + this.owner.h/2;
                break;
            case Cardinal.NORTH_WEST:
                x = this.owner.x;
                y = this.owner.y;
                break;
        }

        ctx.fillRect( 
            x - ControlPoint.HSIZE, y - ControlPoint.HSIZE, 
            2 * ControlPoint.HSIZE, 2 * ControlPoint.HSIZE 
        );
    }
}

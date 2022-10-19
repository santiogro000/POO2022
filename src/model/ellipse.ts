import {
    BoundBox,
} from './bound-box';

import {
    Color,
    ColorHelper,
} from '../util/color-helper';

import {
    Figure,
} from './figure';

export class Ellipse
    extends Figure {

    constructor(
        bbox: BoundBox,
        color: Color) {

        super(
            bbox,
            color
        );
    }

    protected doPaint(
        ctx: CanvasRenderingContext2D): void {

        ctx.strokeStyle = ColorHelper.colorAsString(
            this.color
        );

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
    }
}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { GeometricClosedFigure } from "./geometric-closed-figure";
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.doPaint = function (ctx) {
        //Top line
        ctx.beginPath();
        ctx.moveTo(this.bbox.x, this.bbox.y);
        ctx.lineTo(this.bbox.x + this.bbox.w, this.bbox.y);
        //Right line
        ctx.moveTo(this.bbox.x + this.bbox.w, this.bbox.y);
        ctx.lineTo(this.bbox.x + this.bbox.w, this.bbox.y + this.bbox.h);
        //Bottom line
        ctx.moveTo(this.bbox.x + this.bbox.w, this.bbox.y + this.bbox.h);
        ctx.lineTo(this.bbox.x, this.bbox.y + this.bbox.h);
        //Left line
        ctx.moveTo(this.bbox.x, this.bbox.y + this.bbox.h);
        ctx.lineTo(this.bbox.x, this.bbox.y);
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
    };
    return Rectangle;
}(GeometricClosedFigure));
export { Rectangle };
//# sourceMappingURL=rectangle.js.map
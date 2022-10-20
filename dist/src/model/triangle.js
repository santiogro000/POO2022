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
import { GeometricFigure, } from './geometric-figure';
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.doPaint = function (ctx) {
        ctx.beginPath();
        //Bottom Right Corner
        ctx.moveTo(this.bbox.x, this.bbox.y + this.bbox.h);
        //Middle Top
        ctx.lineTo(this.bbox.x + (this.bbox.w) / 2, this.bbox.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.bbox.x + (this.bbox.w) / 2, this.bbox.y);
        ctx.lineTo(this.bbox.x + this.bbox.w, this.bbox.y + this.bbox.h);
        ctx.stroke();
        //Bottom line
        ctx.beginPath();
        ctx.moveTo(this.bbox.x + this.bbox.w, this.bbox.y + this.bbox.h);
        ctx.lineTo(this.bbox.x, this.bbox.y + this.bbox.h);
        ctx.stroke();
    };
    return Triangle;
}(GeometricFigure));
export { Triangle };
//# sourceMappingURL=triangle.js.map
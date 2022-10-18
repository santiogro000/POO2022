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
import { Figure } from './figure';
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line(position, size, color) {
        return _super.call(this, position, size, color) || this;
    }
    Line.prototype.paint = function (ctx) {
        ctx.strokeStyle = Figure.colorAsString(this.color);
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x + this.size.w, this.position.y + this.size.h);
        ctx.stroke();
    };
    return Line;
}(Figure));
export { Line };
//# sourceMappingURL=line.js.map
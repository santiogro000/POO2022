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
import { ColorHelper, } from '../util/color-helper';
import { Figure, } from './figure';
var Elipse = /** @class */ (function (_super) {
    __extends(Elipse, _super);
    function Elipse(bbox, color) {
        return _super.call(this, bbox, color) || this;
    }
    Elipse.prototype.doPaint = function (ctx) {
        ctx.strokeStyle = ColorHelper.colorAsString(this.color);
        ctx.beginPath();
        var angle = 0;
        var raidiusX = this.bbox.w / 2;
        var raidiusY = this.bbox.h / 2;
        var centerX = this.bbox.x + raidiusX;
        var centerY = this.bbox.y + raidiusY;
        for (var i = 0 * Math.PI; i < 2 * Math.PI; i += 0.01) {
            var xPos = centerX - (raidiusY * Math.sin(i)) * Math.sin(angle * Math.PI) + (raidiusX * Math.cos(i)) * Math.cos(angle * Math.PI);
            var yPos = centerY + (raidiusX * Math.cos(i)) * Math.sin(angle * Math.PI) + (raidiusY * Math.sin(i)) * Math.cos(angle * Math.PI);
            if (i == 0) {
                ctx.moveTo(xPos, yPos);
            }
            else {
                ctx.lineTo(xPos, yPos);
            }
        }
        ctx.stroke();
        ctx.closePath();
    };
    return Elipse;
}(Figure));
export { Elipse };
//# sourceMappingURL=elipse.js.map
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
import { GeometricFigure } from './geometric-figure';
var GeometricClosedFigure = /** @class */ (function (_super) {
    __extends(GeometricClosedFigure, _super);
    function GeometricClosedFigure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeometricClosedFigure.prototype.doFill = function (ctx) {
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
    };
    ;
    return GeometricClosedFigure;
}(GeometricFigure));
export { GeometricClosedFigure };
//# sourceMappingURL=geometric-closed-figure.js.map
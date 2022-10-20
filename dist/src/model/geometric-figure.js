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
var GeometricFigure = /** @class */ (function (_super) {
    __extends(GeometricFigure, _super);
    function GeometricFigure() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._linewidth = 49;
        return _this;
    }
    GeometricFigure.prototype.doLineStyle = function (ctx) {
        ctx.lineWidth = this.linewidth;
        ctx.setLineDash([this.dashStroke, this.dashSpace]);
    };
    Object.defineProperty(GeometricFigure.prototype, "linewidth", {
        get: function () {
            return this._linewidth;
        },
        set: function (n) {
            this._linewidth = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricFigure.prototype, "dashStroke", {
        get: function () {
            return this._dashStroke;
        },
        set: function (n) {
            this._dashStroke = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricFigure.prototype, "dashSpace", {
        get: function () {
            return this._dashSpace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeometricFigure.prototype, "dash", {
        set: function (n) {
            this._dashSpace = n;
        },
        enumerable: false,
        configurable: true
    });
    return GeometricFigure;
}(Figure));
export { GeometricFigure };
//# sourceMappingURL=geometric-figure.js.map
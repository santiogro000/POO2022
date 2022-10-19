import { Cardinal, ControlPoint } from './control-point';
import { ColorHelper } from '../util/color-helper';
var BoundBox = /** @class */ (function () {
    // public interface -------------------------------
    function BoundBox(position, size) {
        this.position = position;
        this.size = size;
        // non-public members -----------------------------
        this.ctrlPoints = [];
        this.addControlPoints();
    }
    BoundBox.prototype.paint = function (ctx) {
        // draw bound box
        //ctx.setLineDash([4, 14]);
        ctx.strokeStyle = BoundBox.color;
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.size.w, this.size.h);
        ctx.stroke();
        // draw control points
        this.ctrlPoints.forEach(function (cp) { return cp.paint(ctx); });
    };
    Object.defineProperty(BoundBox.prototype, "x", {
        get: function () {
            return this.position.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoundBox.prototype, "y", {
        get: function () {
            return this.position.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoundBox.prototype, "w", {
        get: function () {
            return this.size.w;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoundBox.prototype, "h", {
        get: function () {
            return this.size.h;
        },
        enumerable: false,
        configurable: true
    });
    BoundBox.prototype.addControlPoints = function () {
        // target = ES2017+
        // Object.values(
        //     Cardinal
        // )
        // .map( (cardinal: Cardinal) =>
        //     this.ctrlPoints
        //         .push(
        //             new ControlPoint(
        //                 this,
        //                 cardinal
        //             )
        //         )
        // );
        var _this = this;
        // target = ES5
        Object.keys(Cardinal)
            .map(function (key) {
            var cardinal = Number(key);
            if (!isNaN(cardinal)) {
                _this.ctrlPoints
                    .push(new ControlPoint(_this, cardinal));
            }
        });
    };
    BoundBox.color = ColorHelper.colorAsString({
        r: 28,
        g: 116,
        b: 232,
        a: 255,
    });
    return BoundBox;
}());
export { BoundBox };
//# sourceMappingURL=bound-box.js.map
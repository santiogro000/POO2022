import { ColorHelper } from '../util/color-helper';
var Figure = /** @class */ (function () {
    function Figure(bbox, // NEW
    color) {
        this.bbox = bbox;
        this.color = color;
        this._selected = false;
    }
    ;
    Object.defineProperty(Figure.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (s) {
            this._selected = s;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    // Template Method
    Figure.prototype.paint = function (ctx) {
        // 1. Saves current state of ctx
        ctx.save();
        // 2. Sets Color
        ctx.strokeStyle = ColorHelper.colorAsString(this.color);
        // 3. Paints figure
        this.doPaint(ctx);
        // 4. Restores state of ctx
        ctx.restore();
        // 5. Paint bounding box (if aplicable)
        if (this.selected) {
            this.bbox
                .paint(ctx);
        }
    };
    // NEW
    Figure.prototype.select = function (evDown, evUp) {
        this.selected = this.bbox
            .select(evDown, evUp);
        // non-public members -----------------------------
    };
    return Figure;
}());
export { Figure };
//# sourceMappingURL=figure.js.map
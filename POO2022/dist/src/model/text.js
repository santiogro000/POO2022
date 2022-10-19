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
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(bbox, color) {
        return _super.call(this, bbox, color) || this;
    }
    Text.prototype.doPaint = function (ctx) {
        var lenghtText = ctx.measureText('Hello World');
        ctx.textBaseline = "hanging";
        ctx.font = '48px serif';
        lenghtText.actualBoundingBoxAscent;
        ctx.fillStyle = ColorHelper.colorAsString(this.color);
        ctx.fillText('Hello world sweet world in this October 18th', (this.bbox.x), (this.bbox.h));
    };
    return Text;
}(Figure));
export { Text };
//# sourceMappingURL=text.js.map
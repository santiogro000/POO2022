import { BoundBox, } from './bound-box';
import { Elipse } from './elipse';
var Drawing = /** @class */ (function () {
    function Drawing() {
        this.figures = [];
        this.modified = false;
        this.name = null;
    }
    // polymorphism in action
    Drawing.prototype.paint = function (ctx) {
        this.figures.forEach(function (f) { return f.paint(ctx); });
    };
    // TODO: delete this
    Drawing.prototype.addTestFigures = function () {
        var redElipse = new Elipse(new BoundBox({ x: 100, y: 100 }, { w: 400, h: 100 }), // NEW
        { r: 255, g: 0, b: 0, a: 255 });
        this.figures
            .push(redElipse);
        var greenElipse = new Elipse(new BoundBox({ x: 100, y: 100 }, { w: 400, h: 200 }), // NEW
        { r: 0, g: 255, b: 0, a: 255 });
        this.figures
            .push(greenElipse);
        var blackElipse = new Elipse(new BoundBox({ x: 100, y: 100 }, { w: 400, h: 300 }), // NEW
        { r: 0, g: 0, b: 0, a: 255 });
        this.figures
            .push(blackElipse);
    };
    // NEW
    Drawing.prototype.selectAll = function () {
        this.figures.forEach(function (f) { return f.selected = true; });
    };
    return Drawing;
}());
export { Drawing };
//# sourceMappingURL=drawing.js.map
import { Line } from './line';
var Drawing = /** @class */ (function () {
    function Drawing() {
        this.figures = [];
        this.modified = false;
        this.name = null;
    }
    Drawing.prototype.paint = function (ctx) {
        this.figures.forEach(function (f) { return f.paint(ctx); });
    };
    Drawing.prototype.addTestFigures = function () {
        var redLine = new Line({ x: 10, y: 10 }, { w: 300, h: 100 }, { r: 255, g: 0, b: 0, a: 255 });
        this.figures
            .push(redLine);
        var greenLine = new Line({ x: 10, y: 10 }, { w: 300, h: 200 }, { r: 0, g: 255, b: 0, a: 255 });
        this.figures
            .push(greenLine);
        var blueLine = new Line({ x: 10, y: 10 }, { w: 300, h: 300 }, { r: 0, g: 0, b: 255, a: 255 });
        this.figures
            .push(blueLine);
    };
    return Drawing;
}());
export { Drawing };
//# sourceMappingURL=drawing.js.map
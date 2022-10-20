import app from '../index';
import { BoundBox, } from './bound-box';
import { Triangle } from './triangle';
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
        var redTriangle = new Triangle(new BoundBox({ x: 100, y: 100 }, { w: 400, h: 100 }), // NEW
        { r: 255, g: 0, b: 0, a: 255 });
        this.figures
            .push(redTriangle);
        var greenTriangle = new Triangle(new BoundBox({ x: 100, y: 100 }, { w: 400, h: 200 }), // NEW
        { r: 0, g: 255, b: 0, a: 255 });
        this.figures
            .push(greenTriangle);
        var blackTriangle = new Triangle(new BoundBox({ x: 100, y: 100 }, { w: 400, h: 300 }), // NEW
        { r: 0, g: 0, b: 0, a: 255 });
        this.figures
            .push(blackTriangle);
    };
    /* selectAll(): void {
        this.figures.forEach(
            (f: Figure) => f.selected = true
        );
    } */
    // NEW
    Drawing.prototype.select = function (evDown, evUp) {
        this.figures.forEach(function (f) { return f.select(evDown, evUp); });
        // TODO: something selected?
        app.repaint();
    };
    return Drawing;
}());
export { Drawing };
//# sourceMappingURL=drawing.js.map
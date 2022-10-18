var Drawing = /** @class */ (function () {
    function Drawing() {
        this.figures = [];
        this.modified = false;
        this.name = null;
    }
    Drawing.prototype.paint = function (ctx) {
        this.figures.forEach(function (f) { return f.paint(ctx); });
    };
    return Drawing;
}());
export { Drawing };
//# sourceMappingURL=drawing.js.map
var Figure = /** @class */ (function () {
    function Figure(position, size, color) {
        this.position = position;
        this.size = size;
        this.color = color;
        // non-public members -----------------------------
        this._selected = false;
    }
    Object.defineProperty(Figure.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        enumerable: false,
        configurable: true
    });
    return Figure;
}());
export { Figure };
//# sourceMappingURL=figure.js.map
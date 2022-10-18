var Figure = /** @class */ (function () {
    function Figure(bbox, // NEW
    color) {
        this.bbox = bbox;
        this.color = color;
        // non-public members -----------------------------
        this._selected = false;
    }
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
    return Figure;
}());
export { Figure };
//# sourceMappingURL=figure.js.map
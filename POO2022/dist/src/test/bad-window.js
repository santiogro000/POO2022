var BadWindow = /** @class */ (function () {
    function BadWindow(x, y) {
        this.x = x;
        this.y = y;
        this.w = 320;
        this.h = 240;
    }
    BadWindow.prototype.paint = function (ctx) {
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke();
    };
    return BadWindow;
}());
export { BadWindow };
//# sourceMappingURL=bad-window.js.map
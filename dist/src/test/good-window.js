import { App } from "../controller/app";
// import app from "../index";
var GoodWindow = /** @class */ (function () {
    function GoodWindow(x, y) {
        this.x = x;
        this.y = y;
        this.w = 320;
        this.h = 240;
    }
    GoodWindow.prototype.paint = function (ctx) {
        ctx.strokeStyle = 'darkgreen';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke();
    };
    GoodWindow.prototype.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
        this.repaint();
    };
    // private methods --------------------------------
    GoodWindow.prototype.repaint = function () {
        var ctx = App.getInstance()
            .getContext();
        this.paint(ctx);
    };
    return GoodWindow;
}());
export { GoodWindow };
//# sourceMappingURL=good-window.js.map
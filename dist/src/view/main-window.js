import { BadWindow } from '../test/bad-window';
import { GoodWindow } from '../test/good-window';
var MainWindow = /** @class */ (function () {
    function MainWindow() {
        this.canvas = new Canvas();
    }
    MainWindow.prototype.getContext = function () {
        return this.canvas
            .getContext();
    };
    MainWindow.prototype.windowTest = function () {
        this.canvas
            .windowTest();
    };
    return MainWindow;
}());
export { MainWindow };
// module private -----------------------------------------------------------
var Canvas = /** @class */ (function () {
    function Canvas() {
        this.htmlElement = document.createElement('canvas');
        document.body
            .appendChild(this.htmlElement);
        this.htmlElement.width = Canvas.PAGE_WIDTH;
        this.htmlElement.height = Canvas.PAGE_HEIGHT;
        this.htmlElement.style.backgroundColor = '#FAFAFA';
        this.ctx = this.htmlElement
            .getContext('2d');
    }
    Canvas.prototype.windowTest = function () {
        var _this = this;
        this.drawGrid(this.ctx);
        var bw = new BadWindow(10, 10);
        // initial paint
        bw.paint(this.ctx);
        var gw = new GoodWindow(10, 260);
        // initial paint
        gw.paint(this.ctx);
        // gw.x = 200;
        // gw.y = 100;
        // 5 seconds later...
        setTimeout(function () {
            _this.drawGrid(_this.ctx);
            bw.paint(_this.ctx);
            bw.x = 350; // acceso directo
            bw.y = 10; // acceso directo    
            console.log('BAD => ' + JSON.stringify(bw));
            gw.setPosition(// acceso a través de la IP
            350, 10);
            console.log('GOOD => ' + JSON.stringify(gw));
        }, 5000);
    };
    Canvas.prototype.getContext = function () {
        return this.ctx;
    };
    Object.defineProperty(Canvas.prototype, "width", {
        get: function () {
            return this.htmlElement.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "height", {
        get: function () {
            return this.htmlElement.height;
        },
        enumerable: false,
        configurable: true
    });
    // private methods ------------------------------------------------------
    Canvas.prototype.clear = function (ctx) {
        ctx.fillStyle = '#FAFAFA';
        ctx.fillRect(0, 0, this.width, this.height);
    };
    Canvas.prototype.drawGrid = function (ctx) {
        if (ctx) {
            this.clear(ctx);
            ctx.lineWidth = 1;
            ctx.strokeStyle = Canvas.GRID_COLOR;
            // TODO: use document size
            var numVerticals = this.width / Canvas.GRID_SIZE;
            var numHorizontals = this.height / Canvas.GRID_SIZE;
            // verticals
            for (var v = 1; v < numVerticals; v++) {
                ctx.beginPath();
                ctx.moveTo(v * Canvas.GRID_SIZE, 0);
                ctx.lineTo(v * Canvas.GRID_SIZE, Canvas.PAGE_HEIGHT);
                ctx.stroke();
            }
            // horizontals
            for (var h = 1; h < numHorizontals; h++) {
                ctx.beginPath();
                ctx.moveTo(0, h * Canvas.GRID_SIZE);
                ctx.lineTo(Canvas.PAGE_WIDTH, h * Canvas.GRID_SIZE);
                ctx.stroke();
            }
        }
    };
    Canvas.PAGE_WIDTH = 2000;
    Canvas.PAGE_HEIGHT = 2000;
    Canvas.GRID_SIZE = 100;
    Canvas.GRID_COLOR = '#DDD0DD';
    return Canvas;
}());
//# sourceMappingURL=main-window.js.map
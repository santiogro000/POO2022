import { Drawing } from '../model/drawing';
import { MainWindow } from '../view/main-window';
var App = /** @class */ (function () {
    function App() {
        this.drawing = new Drawing();
        this.mainWindow = new MainWindow();
        document.title = 'Graphics Editor v0.2';
    }
    // lazy loading (preferred)
    App.getInstance = function () {
        if (App.instance) {
            // NOOP
        }
        else {
            App.instance = new App();
        }
        return App.instance;
    };
    App.prototype.getContext = function () {
        return this.mainWindow
            .getContext();
    };
    App.prototype.run = function () {
        this.drawing // NEW // TODO: remove
            .addTestFigures();
        this.repaint();
    };
    App.prototype.repaint = function () {
        this.mainWindow
            .repaint();
    };
    // from view to model
    App.prototype.paint = function (// NEW
    ctx) {
        this.drawing
            .paint(ctx);
    };
    return App;
}());
export { App };
//# sourceMappingURL=app.js.map
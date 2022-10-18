import { Drawing } from '../model/drawing';
import { MainWindow } from '../view/main-window';
// Singleton => Immutable
var App = /** @class */ (function () {
    function App() {
        this.drawing = new Drawing();
        this.mainWindow = new MainWindow();
        document.title = 'Graphics Editor v0.4';
    }
    // lazy initialization (preferred)
    App.getInstance = function () {
        if (App.instance) {
            // NOOP
        }
        else {
            App.instance = new App();
        }
        return App.instance;
    };
    App.prototype.run = function () {
        this.drawing // TODO: remove
            .addTestFigures();
        // NEW
        this.drawing // TODO: remove
            .selectAll();
        this.repaint();
    };
    // from model to view 
    App.prototype.repaint = function () {
        this.mainWindow
            .repaint();
    };
    // from view to model
    App.prototype.paint = function (ctx) {
        this.drawing
            .paint(ctx);
    };
    return App;
}());
export { App };
//# sourceMappingURL=app.js.map
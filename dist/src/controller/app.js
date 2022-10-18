import { Drawing } from '../model/drawing';
import { MainWindow } from '../view/main-window';
var App = /** @class */ (function () {
    function App() {
        this.drawing = new Drawing();
        this.mainWindow = new MainWindow();
        document.title = 'Graphics Editor v0.1';
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
        // TODO: remove in v1.1
        this.mainWindow
            .windowTest();
    };
    return App;
}());
export { App };
//# sourceMappingURL=app.js.map
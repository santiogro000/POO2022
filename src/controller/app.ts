import { Drawing } from '../model/drawing';
import { MainWindow } from '../view/main-window';

export class App {
    private static instance: App;

    private drawing: Drawing;
    private mainWindow: MainWindow;
    
    private constructor() {
        this.drawing = new Drawing();
        this.mainWindow = new MainWindow();

        document.title = 'Graphics Editor v0.1';
    }

    // lazy loading (preferred)
    static getInstance(): App {
        if ( App.instance ) {
            // NOOP
        }
        else {
            App.instance = new App();
        }

        return App.instance;
    }

    getContext(): CanvasRenderingContext2D {
        return this.mainWindow
            .getContext();
    }

    run(): void {
        // TODO: remove in v1.1
        this.mainWindow
            .windowTest();
    }
}

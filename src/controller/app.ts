import { Drawing } from '../model/drawing';
import { MainWindow } from '../view/main-window';

// Singleton => Immutable
export class App {
    private static instance: App;

    private drawing: Drawing;
    private mainWindow: MainWindow;
    
    private constructor() {
        this.drawing = new Drawing();
        this.mainWindow = new MainWindow();

        document.title = 'Graphics Editor v0.4';
    }

    // lazy initialization (preferred)
    static getInstance(): App {
        if ( App.instance ) {
            // NOOP
        }
        else {
            App.instance = new App();
        }

        return App.instance;
    }

    run(): void {
        this.drawing            // TODO: remove
            .addTestFigures();

        // NEW
        this.drawing            // TODO: remove
            .selectAll();

        this.repaint();
    }

    // from model to view 
    repaint(): void {
        this.mainWindow
            .repaint();
    }

    // from view to model
    paint(
        ctx: CanvasRenderingContext2D ): void {

        this.drawing
            .paint(
                ctx
            );
    }
}

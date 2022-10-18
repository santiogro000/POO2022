export interface Position {
    x: number;
    y: number;
}

export interface Dimension {
    w: number;
    h: number;
}

export interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}

export abstract class Figure {

    // public interface -------------------------------
    abstract paint( 
        ctx: CanvasRenderingContext2D ): void;

    constructor(
        protected position: Position,
        protected size: Dimension,
        protected color: Color ) {
    }

    get selected(): boolean {
        return this._selected;
    }

    // non-public members -----------------------------
    protected _selected: boolean = false;
}

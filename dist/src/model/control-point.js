import { BoundBox } from './bound-box';
export var Cardinal;
(function (Cardinal) {
    Cardinal[Cardinal["NORTH"] = 0] = "NORTH";
    Cardinal[Cardinal["NORTH_EAST"] = 1] = "NORTH_EAST";
    Cardinal[Cardinal["EAST"] = 2] = "EAST";
    Cardinal[Cardinal["SOUTH_EAST"] = 3] = "SOUTH_EAST";
    Cardinal[Cardinal["SOUTH"] = 4] = "SOUTH";
    Cardinal[Cardinal["SOUTH_WEST"] = 5] = "SOUTH_WEST";
    Cardinal[Cardinal["WEST"] = 6] = "WEST";
    Cardinal[Cardinal["NORTH_WEST"] = 7] = "NORTH_WEST";
})(Cardinal || (Cardinal = {}));
var ControlPoint = /** @class */ (function () {
    function ControlPoint(owner, cardinal) {
        this.owner = owner;
        this.cardinal = cardinal;
    }
    ControlPoint.prototype.paint = function (ctx) {
        ctx.fillStyle = BoundBox.color;
        var x = 0;
        var y = 0;
        // TODO: complete switch -- COMPLETED
        switch (this.cardinal) {
            case Cardinal.NORTH:
                x = this.owner.x + this.owner.w / 2;
                y = this.owner.y;
                break;
            case Cardinal.NORTH_EAST:
                x = this.owner.x + this.owner.w;
                y = this.owner.y;
                break;
            case Cardinal.EAST:
                x = this.owner.x + this.owner.w;
                y = this.owner.y + this.owner.h / 2;
                break;
            case Cardinal.SOUTH_EAST:
                x = this.owner.x + this.owner.w;
                y = this.owner.y + this.owner.h;
                break;
            case Cardinal.SOUTH:
                x = this.owner.x + this.owner.w / 2;
                y = this.owner.y + this.owner.h;
                break;
            case Cardinal.SOUTH_WEST:
                x = this.owner.x;
                y = this.owner.y + this.owner.h;
                break;
            case Cardinal.WEST:
                x = this.owner.x;
                y = this.owner.y + this.owner.h / 2;
                break;
            case Cardinal.NORTH_WEST:
                x = this.owner.x;
                y = this.owner.y;
                break;
        }
        ctx.fillRect(x - ControlPoint.HSIZE, y - ControlPoint.HSIZE, 2 * ControlPoint.HSIZE, 2 * ControlPoint.HSIZE);
    };
    ControlPoint.HSIZE = 4;
    return ControlPoint;
}());
export { ControlPoint };
//# sourceMappingURL=control-point.js.map
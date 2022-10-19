var MapHelper = /** @class */ (function () {
    function MapHelper() {
    }
    MapHelper.toRadians = function (degrees) {
        return (degrees * Math.PI) / 180;
    };
    MapHelper.distanceInMeters = function (p1Lat, p1Lng, p2Lat, p2Lng) {
        var lat1 = MapHelper.toRadians(p1Lat);
        var lat2 = MapHelper.toRadians(p2Lat);
        var deltaLat = MapHelper.toRadians(p2Lat - p1Lat);
        var deltaLng = MapHelper.toRadians(p2Lng - p1Lng);
        var sinDeltaLat = Math.sin(deltaLat / 2);
        var sinDeltaLng = Math.sin(deltaLng / 2);
        var a = (sinDeltaLat * sinDeltaLat)
            + (Math.cos(lat1) * Math.cos(lat2) * sinDeltaLng * sinDeltaLng);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return (c * MapHelper.EARTH_RADIUS);
    };
    MapHelper.EARTH_RADIUS = 6371e3; // Earth’s mean radius in meters
    return MapHelper;
}());
export { MapHelper };
var d = MapHelper.distanceInMeters(4.6232457, -74.0662649, 10.503212, -73.2599285);
console.log(Math.round(d) + " mts");
//# sourceMappingURL=map-helper.js.map

export class MapHelper {

    static readonly EARTH_RADIUS: number = 6371e3; // Earth’s mean radius in meters

    static toRadians(
        degrees: number ): number {
        
        return (degrees * Math.PI) / 180;
    }
 
    static distanceInMeters(
        p1Lat: number,
        p1Lng: number, 
        p2Lat: number,
        p2Lng: number ): number {

        const lat1 = MapHelper.toRadians(
            p1Lat
        );

        const lat2 = MapHelper.toRadians(
            p2Lat
        );

        const deltaLat = MapHelper.toRadians(
            p2Lat - p1Lat
        );
        const deltaLng = MapHelper.toRadians(
            p2Lng - p1Lng
        );
        
        const sinDeltaLat: number = Math.sin( 
            deltaLat / 2 
        );
        const sinDeltaLng: number = Math.sin( 
            deltaLng / 2 
        );

        const a = (sinDeltaLat * sinDeltaLat) 
            + (Math.cos( lat1 ) * Math.cos( lat2 ) * sinDeltaLng * sinDeltaLng);
        
        const c = 2 * Math.atan2( 
            Math.sqrt( 
                a 
            ), 
            Math.sqrt( 
                1 - a 
            ) 
        );

        return (c * MapHelper.EARTH_RADIUS);
    }
}

const d: number = MapHelper.distanceInMeters(
    4.6232457,-74.0662649, 10.503212,-73.2599285
);

console.log(
    `${Math.round( d )} mts`
);
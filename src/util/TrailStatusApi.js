import ErrorUtil from 'lib/tam/util/ErrorUtil';
import Util from 'lib/tam/util/Util';
import Trail from 'models/components/trails/_trailStatus/Trail';


class Api {

    static async getStatusVersion() {
        let cfg = await (await fetch('/data/trails/tam-trails_status.json')).json();
        return (Util.isObject(cfg) && Util.isNonEmptyString(cfg.version)) ? cfg.version : null;
    }

    static async getTrails() {
        let status = await (await fetch('/data/trails/tam-trails_status.json')).json();
        let trails = []

        if (Util.isObject(status) && Util.isObject(status['trails'])) {
             trails = Object.keys(status['trails']).map((id) => Trail.fromJSON(status['trails'][id]));
        }

        return trails;
    }
}


export default Api;
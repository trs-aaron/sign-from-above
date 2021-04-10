import Util from 'lib/common/util/Util';
import ErrorUtil from 'lib/common/util/ErrorUtil';
import Trail from 'models/components/trails/_trailStatus/Trail';


class TrailStatus {

    constructor() {
        this._trails = [];
    }

    get trails() {
        return this._trails.map((t) => t);
    }

    set trails(val) {
        if (!val || !Array.isArray(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('TrailStatus', 'trails', ErrorUtil.MSG.VALUE_TYPE.ARRAY);
        }

        this._trails = val.map((t) => {
            if (!t || !(t instanceof Trail)) {
                ErrorUtil.raiseInvalidPropertyValueError('TrailStatus', 'trails', 'Array objects must be of type Trail.');
            }

            return t;
        });
    }

    toJSON() {
        return {
            trails: this._trails.map((t) => t.toJSON())
        };
    }

    static fromJSON(json) {
        if (!json || !('trails' in json) || !Array.isArray(json['trails'])) {
            ErrorUtil.raiseInvalidParameterError('TrailStatus', 'fromJSON', 'json', 'Invalid JSON.');
        }

        let obj = new TrailStatus();
        obj._trails = json['trails'].map((t) => Trail.fromJSON(t));

        return obj;
    }
}


export default TrailStatus;
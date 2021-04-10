import ErrorUtil from 'lib/common/util/ErrorUtil';
import Util from 'lib/common/util/Util';


export default class Screen {

    constructor() {
        this._id = null;
        this._name = null;
        this._deviceId = null;
        this._layoutId = null;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get deviceId() {
        return this._deviceId;
    }

    get layoutId() {
        return this._layoutId;
    }

    set id(val) {
        if (!Util.isStringOrNull(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Layout', 'id', ErrorUtil.MSG.VALUE_TYPE.STRING_OR_NULL);
        }

        this._id = val;
    }

    set name(val) {
        if (!Util.isStringOrNull(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Layout', 'name', ErrorUtil.MSG.VALUE_TYPE.STRING_OR_NULL);
        }

        this._name = val;
    }

    set deviceId(val) {
        if (!Util.isStringOrNull(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Layout', 'deviceId', ErrorUtil.MSG.VALUE_TYPE.STRING_OR_NULL);
        }

        this._deviceId = val;
    }

    set layoutId(val) {
        if (!Util.isStringOrNull(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Layout', 'layoutId', ErrorUtil.MSG.VALUE_TYPE.STRING_OR_NULL);
        }

        this._layoutId = val;
    }

    toJSON() {
        return {
            id: this._id,
            name: this._name,
            deviceId: this._deviceId,
            layoutId: this._layoutId
        }
    }

    static fromJSON(json) {
        if (!json || !('id' in json) || !('name' in json) || !('deviceId' in json) || !('layoutId' in json)) {
            ErrorUtil.raiseInvalidParameterError('Layout', 'fromJSON', 'json', ErrorUtil.MSG.VALUE_TYPE.JSON);
        }

        let obj = new Screen();

        obj.id = json['id'];
        obj.name = json['name'];
        obj.deviceId = json['deviceId'];
        obj.layoutId = json['layoutId'];

        return obj;
    }
}
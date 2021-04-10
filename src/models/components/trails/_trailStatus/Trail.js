import Util from 'lib/common/util/Util';
import ErrorUtil from 'lib/common/util/ErrorUtil';


class Trail {

    constructor() {
        this._id = null;
        this._name = null;
        this._type = null;
        this._isOpen = false;
        this._isGroomed = false;
        this._lastGroomed = null;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get isOpen() {
        return (this._isOpen === true);
    }

    get isGroomed() {
        return (this._isGroomed === true);
    }

    get lastGroomed() {
        return this._lastGroomed;
    }

    set id(val) {
        if (!Util.isStringOrNull(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Trail', 'id', ErrorUtil.MSG.VALUE_TYPE.STRING_OR_NULL);
        }

        this._id = val;
    }

    set name(val) {
        if (!Util.isStringOrNull(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Trail', 'name', ErrorUtil.MSG.VALUE_TYPE.STRING_OR_NULL);
        }

        this._name = val;
    }

    set type(val) {
        if (!Util.isStringOrNull(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Trail', 'type', ErrorUtil.MSG.VALUE_TYPE.STRING_OR_NULL);
        }

        this._type = val;
    }

    set isOpen(val) {
        if (!Util.isBoolean(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Trail', 'isOpen', ErrorUtil.MSG.VALUE_TYPE.BOOL);
        }

        this._isOpen = val;
    }

    set isGroomed(val) {
        if (!Util.isBoolean(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Trail', 'isGroomed', ErrorUtil.MSG.VALUE_TYPE.BOOL);
        }

        this._isGroomed = val;
    }

    set lastGroomed(val) {
        if (!Util.isStringOrNull(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Trail', 'lastGroomed', ErrorUtil.MSG.VALUE_TYPE.STRING_OR_NULL);
        }

        this._lastGroomed = val;
    }

    static isValidTypeId(typeId) {
        return (Util.isNonEmptyString(typeId) && (Object.values(Trail.TYPES).find((t) => t === typeId) !== null));
    }

    toJSON() {
        return {
            id: this._id,
            name: this._name,
            type: this._type,
            isOpen: (this._isOpen === true),
            isGroomed: (this._isGroomed === true),
            lastGroomed: this._lastGroomed
        };
    }

    static fromJSON(json) {
        if (!json || !('id' in json) || !('name' in json) || !('type' in json) || !('isOpen' in json) || !('isGroomed' in json) || !('lastGroomed' in json)) {
            ErrorUtil.raiseInvalidParameterError('TrailStatus', 'fromJSON', 'json', 'Invalid JSON.');
        }

        let obj = new Trail();
        obj.id = json['id'];
        obj.name = json['name'];
        obj.type = json['type'];
        obj.isOpen = json['isOpen'];
        obj.isGroomed = json['isGroomed'];
        obj.lastGroomed = json['lastGroomed'];

        return obj;
    }
}

Trail.TYPES = {
    BEGINNER: 'b',
    INTERMEDIATE: 'i',
    EXPERT: 'e',
    TERRAIN_PARK: 'p'
};


export default Trail;
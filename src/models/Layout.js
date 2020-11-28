import ErrorUtil from 'lib/tam/util/ErrorUtil';
import Util from 'lib/tam/util/Util';
import SignFactory from 'models/SignFactory';


class Layout {

    constructor() {
        this._id = null;
        this._name = null;
        this._layoutName = Layout.NAMES.SINGLE;
        this._signIds = [];
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get layoutName() {
        return this._layoutName;
    }

    get signIds() {
        return this._signIds;
    }

    set id(val) {
        if (!Util.isNonEmptyString(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Layout', 'id', ErrorUtil.MSG.VALUE_TYPE.NON_EMPTY_STRING);
        }

        this._id = val;
    }

    set name(val) {
        if (!Util.isNonEmptyString(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Layout', 'name', ErrorUtil.MSG.VALUE_TYPE.NON_EMPTY_STRING);
        }

        this._name = val;
    }

    set layoutName(val) {
        if (!Util.isNonEmptyString(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Layout', 'layoutName', ErrorUtil.MSG.VALUE_TYPE.NON_EMPTY_STRING);
        }

        this._layoutName = val;
    }

    static isValidLayoutName(name) {
        return (Util.isNonEmptyString(name) && (Object.values(Layout.NAMES).find((n) => n === name) !== null));
    }

    toJSON() {
        return {
            id: this._id,
            name: this._name,
            layoutName: this._layoutName,
            singIds: this._signs.map((s) => s)
        }
    }

    static fromJSON(json) {
        if (!json || !('id' in json) || !('name') || !('layoutName' in json) || !('signIds' in json) || !Array.isArray(json['signIds'])) {
            ErrorUtil.raiseInvalidParameterError('Layout', 'fromJSON', 'json', ErrorUtil.MSG.VALUE_TYPE.JSON);
        }

        let obj = new Layout();

        obj.id = json['id'];
        obj.name = json['name'];
        obj.layoutName = json['layoutName'];
        obj._signIds = json['signIds'].map((s) => s);

        return obj;
    }
}

Layout.NAMES = {
    SINGLE: 'single'
};


export default Layout;
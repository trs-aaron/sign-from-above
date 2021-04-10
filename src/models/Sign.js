import ErrorUtil from 'lib/common/util/ErrorUtil';
import Util from 'lib/common/util/Util';


class Sign {
    constructor() {
        this._typeId = null;
        this._data = null;
    }

    get typeId() {
        return this._typeId;
    }

    get data() {
        return this._data;
    }

    set typeId(val) {
        if (!Sign._isValidTypeId(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Sign', 'typeId', 'Not a valid sign type id');
        }

        this._typeId = val;
    }

    set data(val) {
        this._data = val;
    }

    static _isValidTypeId(typeId) {
        return (Util.isNonEmptyString(typeId) && (Object.values(Sign.TYPES).find((t) => t === typeId) !== null));
    }

    toJSON() {
        return {
            _signTypeId: this._signTypeId,
            _data: JSON.parse(JSON.stringify(this._data))
        };
    }

    static fromJSON(json) {
        if (!json || !('_typeId' in json) || !Util.isNonEmptyString(json['_typeId']) || !('_data' in json)) {
            ErrorUtil.raiseInvalidParameterError('Sign', 'fromJSON', 'json', ErrorUtil.MSG.VALUE_TYPE.JSON);
        }

        let obj = new Sign();

        obj.typeId = json['_typeId'];
        obj.data = json['_data'];

        return obj;
    }
}

Sign.TYPES = {
    VECTOR: 'vector',
    PRODUCTS: 'products',
    PRODUCTS_CAROUSEL: 'products-carousel'
}


export default Sign;
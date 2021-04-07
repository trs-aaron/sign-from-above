import ErrorUtil from 'lib/tam/util/ErrorUtil';
import Util from 'lib/tam/util/Util';


class ProductCol {

    constructor() {
        this._type = ProductCol.TYPES.default;
        this._text = null;
    }

    get typeId() {
        return (this._type) ? this._type.id : null;
    }

    get typeClass() {
        return (this._type) ? this._type.class : null;
    }

    get text() {
        return this._text;
    }

    set type(val) {
        if (!Util.isStringOrNull(val) || (Util.isNonEmptyString(val) && !ProductCol._isValidType(val))) {
            ErrorUtil.raiseInvalidPropertyValueError('ProductCol', 'type', 'Not a valid column type.');
        }

        this._type = (val) ? ProductCol._getTypeById(val) : null;
    }

    set text(val) {
        if (!Util.isStringOrNull(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('ProductCol', 'text', ErrorUtil.MSG.VALUE_TYPE.STRING_OR_NULL);
        }

        this._text = val;
    }

    static _isValidType(id) {
        return (ProductCol._getTypeById(id) !== null);
    }

    static _getTypeById(id) {
        return Object.values(ProductCol.TYPES).find((t) => t.id === id);
    }

    toJSON() {
        return {
            type: (this._type) ? this._type.id : null,
            text: this._text
        };
    }

    static fromJSON(json) {
        if (!json) {
            ErrorUtil.raiseInvalidParameterError('Product', 'fromJSON', 'json', ErrorUtil.MSG.VALUE_TYPE.JSON);
        }

        let obj = new ProductCol();

        obj.type = ('type' in json) ? json['type'] : ProductCol.TYPES.default;
        obj.text = ('text' in json) ? json['text'] : null;

        return obj;
    }
}

ProductCol.TYPES = {
    default: {
        id: 'default',
        class: ''
    },
    head: {
        id: 'head',
        class: 'head'
    },
    title: {
        id: 'title',
        class: 'title'
    },
    price: {
        id: 'price',
        class: 'price'
    }
};


export default ProductCol;
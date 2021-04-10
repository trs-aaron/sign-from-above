import ErrorUtil from 'lib/common/util/ErrorUtil';
import Card from 'models/components/products/Card';
import Sign from 'models/Sign';


export default class ProductsSign extends Sign {

    constructor() {
        super();
        this._typeId = Sign.TYPES.PRODUCTS;
    }

    get cardCount() {
        return this.cards.length;
    }

    get cards() {
        return (this._data && 'cards' in this._data && Array.isArray(this._data['cards'])) ? this._data['cards'] : [];
    }

    static convertFromBase(sign) {
        if (!sign || !(sign instanceof Sign)) {
            ErrorUtil.raiseInvalidParameterClassError('ProductSign', '_convertFromBase', 'sign', 'Sign');
        }

        let obj = new ProductsSign();
        obj._data = sign._data;

        if (obj._data && 'cards' in obj._data && Array.isArray(obj._data['cards'])) {
            obj._data['cards'] = obj._data['cards'].map((c) => Card.fromJSON(c));
        }

        return obj;
    }

    toJSON() {
        return super.toJSON();
    }

    static fromJSON(json) {
        let obj = super.fromJSON(json);
        return ProductsSign.convertFromBase(obj);
    }
}
import ErrorUtil from 'lib/tam/util/ErrorUtil';
import Util from 'lib/tam/util/Util';
import Card from 'models/components/products/Card';
import Sign from 'models/Sign';


export default class ProductsCarouselSign extends Sign {

    DEFAULT_TRANSITION_DELAY = 5000;

    constructor() {
        super();
        this._typeId = Sign.TYPES.PRODUCTS_CAROUSEL;
    }

    get cardCount() {
        return this.cards.length;
    }

    get cards() {
        return (this._data && 'cards' in this._data && Array.isArray(this._data['cards'])) ? this._data['cards'] : [];
    }

    get transitionDelay() {
        return (this._data && 'transitionDelay' in this._data && Array.isArray(this._data['transitionDelay'])) ? this._data['transitionDelay'] : ProductsCarouselSign.DEFAULT_TRANSITION_DELAY;
    }

    set transitionDelay(val) {
        if (!Util.isPosInt(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('ProductsCarouselSign', 'transitionDelay', ErrorUtil.MSG.VALUE_TYPE.POS_INT);
        }

        this._data['transitionDelay'] = val;
    }

    static convertFromBase(sign) {
        if (!sign || !(sign instanceof Sign)) {
            ErrorUtil.raiseInvalidParameterClassError('ProductCarouselSign', '_convertFromBase', 'sign', 'Sign');
        }

        let obj = new ProductsCarouselSign();
        obj._data = sign._data;

        if (obj._data && 'cards' in obj._data && Array.isArray(obj._data['cards'])) {
            obj._data['_cards'] = obj._data['cards'].map((c) => Card.fromJSON(c));
        }

        return obj;
    }

    toJSON() {
        return super.toJSON();
    }

    static fromJSON(json) {
        if (!json || !('cards' in json) || !Array.isArray(json['cards'])) {
            ErrorUtil.raiseInvalidParameterError('ProductsCarouselSign', 'fromJSON', 'json', ErrorUtil.MSG.VALUE_TYPE.JSON);
        }

        let obj = super.fromJSON(json);
        return ProductsCarouselSign.convertFromBase(obj);
    }
}
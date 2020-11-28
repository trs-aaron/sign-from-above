import Util from 'lib/tam/util/Util';
import ErrorUtil from 'lib/tam/util/ErrorUtil';
import CardInfo from 'models/components/products/_card/_CardInfo';
import Disclaimer from 'models/components/products/_card/_Disclaimer';
import Product from 'models/components/products/_card/_Product';


class Card {

    constructor() {
        this._hasLogo = false;
        this._isBkgdTransp = false;
        this._title = null;
        this._info = null;
        this._priceColCnt = 0;
        this._prods = [];
        this._disclaimers = [];
    }

    get hasLogo() {
        return this._hasLogo;
    }

    get isBkgdTransp() {
        return this._isBkgdTransp;
    }

    get title() {
        return this._title;
    }

    get info() {
        return this._info;
    }

    get priceColCnt() {
        return this._priceColCnt;
    }

    get products() {
        return this._prods.map((p) => p);
    }

    get disclaimers() {
        return this._disclaimers.map((d) => d);
    }

    set hasLogo(val) {
        if (!Util.isBoolean(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Card', 'hasLogo', ErrorUtil.MSG.VALUE_TYPE.BOOL);
        }

        this._hasLogo = (val === true) ? true : false;
    }

    set isBkgdTransp(val) {
        if (!Util.isBoolean(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Card', 'isBkgTransp', ErrorUtil.MSG.VALUE_TYPE.BOOL);
        }

        this._isBkgdTransp = (val === true) ? true : false;
    }

    set title(val) {
        if (!Util.isStringOrNull(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Card', 'title', ErrorUtil.MSG.VALUE_TYPE.STRING_OR_NULL);
        }

        this._title = val;
    }

    set info(val) {
        if (val !== null && !(val instanceof CardInfo)) {
            ErrorUtil.raiseInvalidPropertyValueError('Card', 'info', 'Expected CardInfo object.');
        }

        this._info = val;
    }

    set priceColCnt(val) {
        if (!Util.isNonNegInt(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Card', 'priceColCnt', ErrorUtil.MSG.VALUE_TYPE.NON_NEG_INT);
        }

        this._priceColCnt = val;
    }

    toJSON() {
        return {
            hasLogo: this._hasLogo,
            isBkgdTransp: this._isBkgdTransp,
            title: this._title,
            info: this._info,
            priceColCnt: this._priceColCnt,
            products: this._prods,
            disclaimers: this._disclaimers
        };
    }

    static fromJSON(json) {
        if (!json || !('priceColCnt' in json) || isNaN(json['priceColCnt']) || json['priceColCnt'] < 0) {
            ErrorUtil.raiseInvalidParameterError('Card', 'fromJSON', 'json', 'Invalid JSON.');
        }

        let obj = new Card();

        obj.hasLogo = ('hasLogo' in json) ? json['hasLogo'] : false;
        obj.isBkgdTransp = ('hasLogo' in json) ? json['isBkgdTransp'] : false;
        obj.title = ('title' in json) ? json['title'] : null;
        obj.info = ('info' in json && json['info']) ? CardInfo.fromJSON(json['info']) : null;
        obj.priceColCnt = json['priceColCnt'];
        obj._prods = ('products' in json && Array.isArray(json['products'])) ? json['products'].map((p) => Product.fromJSON(p)) : [];
        obj._disclaimers = ('disclaimers' in json && Array.isArray(json['disclaimers'])) ? json['disclaimers'].map((d) => Disclaimer.fromJSON(d)) : [];

        return obj;
    }
}

Card.POSITIONS = {
    queue: 'Q',
    entry: 'E',
    exit: 'X',
    pos1: 'P1',
    pos2: 'P2'
};


export default Card;
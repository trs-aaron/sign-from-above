import ErrorUtil from 'lib/tam/util/ErrorUtil';
import ProductCol from 'models/components/signs/products/ProductCol';


export default class Product {

    constructor() {
        this._cols = [];
    }

    get cols() {
        return this._cols.map((c) => c);
    }

    toJSON() {
        return {
            cols: this._cols.map((c) => c.toJSON())
        };
    }

    static fromJSON(json) {
        if (!json || !('cols' in json) || !Array.isArray(json['cols'])) {
            ErrorUtil.raiseInvalidParameterError('Product', 'fromJSON', 'json', ErrorUtil.MSG.valueType.json);
        }

        let obj = new Product();

        obj._cols = json['cols'].map((c) => ProductCol.fromJSON(c));

        return obj;
    }
}
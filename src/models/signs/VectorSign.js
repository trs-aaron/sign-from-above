import ErrorUtil from 'lib/tam/util/ErrorUtil';
import Util from 'lib/tam/util/Util';
import Sign from 'models/Sign';
import Vector from 'lib/tam/models/Vector';


export default class VectorSign extends Sign {

    ASSETS_BASE_PATH = '/assets/svg/';

    constructor() {
        super();
        this._typeId = Sign.TYPES.VECTOR;
        this._vector = null;
    }

    get contain() {
        return ('contain' in this._data && this._data['contain'] === true);
    }

    get assetName() {
        return ('assetName' in this._data && Util.isNonEmptyString(this._data['assetName'])) ? this._data['assetName'] : null;
    }

    get vector() {
        if (this._vector === null) {
            let assetName = this.assetName;
            let path = (Util.isNonEmptyString(assetName)) ? `${this.ASSETS_BASE_PATH}${assetName}.svg` : null;
            this._vector = (path) ? new Vector(path) : null;
        }

        return this._vector;
    }

    get vectorPath() {
        return (this.vector) ? this.vector.path : null;
    }

    /*async getVectorHtml() {
        return (this.vector) ? await this.vector.getHtml() : null;
    }*/
 
    static convertFromBase(sign) {
        if (!sign || !(sign instanceof Sign)) {
            ErrorUtil.raiseInvalidParameterClassError('VectorSign', '_convertFromBase', 'sign', 'Sign');
        }

        let obj = new VectorSign();
        obj._data = sign._data;

        return obj;
    }

    toJSON() {
        return super.toJSON();
    }

    static fromJSON(json) {
        let obj = super.fromJSON(json);
        return VectorSign.convertFromBase(obj);
    }
}
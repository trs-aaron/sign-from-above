import ErrorUtil from 'lib/common/util/ErrorUtil';
import Util from 'lib/common/util/Util';


export default class Vector {

    constructor(path=null) {
        this._path = null;
        this._html = null;
        this.path = path;
    }

    get path() {
        return this._path;
    }

    async getHtml() {
        return new Promise((resolve) => {
            if (this._html) {
                resolve(this._html);
            } else {
                fetch(this._path)
                .then((resp) => resp.text())
                .then((respText) => {
                    this._html = respText;
                    resolve(this._html);
                })
                .catch(() => resolve(null));
            }
        });
    }

    set path(val) {
        if (!Util.isStringOrNull(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Vector', 'path', ErrorUtil.MSG.VALUE_TYPE.STRING_OR_NULL);
        }

        if (this._path !== val) {
            this._path = val;
            this._html = null;
        }
    }

    toJSON() {
        return {
            path: this._path
        };
    }

    static fromJSON(json) {
        if (!json || !('path' in json)) {
            ErrorUtil.raiseInvalidParameterError('Vector', 'fromJSON', 'json', ErrorUtil.MSG.VALUE_TYPE.JSON);
        }

        let obj = new Vector();
        obj.path = json['path']

        return obj;
    }
}
import ErrorUtil from 'lib/common/util/ErrorUtil';
import Util from 'lib/common/util/Util';


export default class Disclaimer {

    constructor() {
        this._text = null;
    }

    get text() {
        return this._text;
    }

    set text(val) {
        if (!Util.isStringOrNull(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('Disclaimer', 'text', ErrorUtil.MSG.VALUE_TYPE.STRING_OR_NULL);
        }

        this._text = val;
    }

    toJSON() {
        return {
            text: this._text
        };
    }

    static fromJSON(json) {
        if (!json) {
            ErrorUtil.raiseInvalidParameterError('Disclaimer', 'fromJSON', 'json', ErrorUtil.MSG.VALUE_TYPE.JSON);
        }

        let obj = new Disclaimer();

        obj.text = ('text' in json) ? json['text'] : null;

        return obj;
    }
}
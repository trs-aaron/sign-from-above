import ErrorUtil from 'lib/tam/util/ErrorUtil';
import Util from 'lib/tam/util/Util';


export default class CardInfo {

    constructor() {
        this._title = null;
        this._subTitle = null;
        this._desc = null;
    }

    get title() {
        return this._title;
    }

    get subTitle() {
        return this._subTitle;
    }

    get desc() {
        return this._desc;
    }

    set title(val) {
        if (!Util.isStringOrNull(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('CardInfo', 'title', ErrorUtil.MSG.valueType.stringOrNull);
        }

        this._title = val;
    }

    set subTitle(val) {
        if (!Util.isStringOrNull(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('CardInfo', 'subTitle', ErrorUtil.MSG.valueType.stringOrNull);
        }

        this._subTitle = val;
    }

    set desc(val) {
        if (!Util.isStringOrNull(val)) {
            ErrorUtil.raiseInvalidPropertyValueError('CardInfo', 'desc', ErrorUtil.MSG.valueType.stringOrNull);
        }

        this._desc = val;
    }

    toJSON() {
        return {
            title: this._title,
            subTitle: this._subTitle,
            desc: this._desc
        };
    }

    static fromJSON(json) {
        if (!json) {
            ErrorUtil.raiseInvalidParameterError('CardInfo', 'fromJSON', 'json', ErrorUtil.MSG.valueType.object);
        }

        let obj = new CardInfo();

        obj.title = (json['title']) ? json['title'] : null;
        obj.subTitle = (json['subTitle']) ? json['subTitle'] : null;
        obj.desc = (json['desc']) ? json['desc'] : null;

        return obj;
    }
}
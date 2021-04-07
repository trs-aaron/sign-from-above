export default class Util {

    static getBaseUrl() {
        return `${window.location.protocol}://${window.location.host}`
    }

    static buildUrl(path) {
        let url = `${Util.getBaseUrl()}/${path}`;
        return url;
    }

    static convertToSlug(text) {
        let slug = '';

        if (text && text !== '') {
            slug = text.toLowerCase();
            slug = slug.replace(/[^a-zA-Z0-9\s]/g, '');
            slug = slug.replace(/\s/g, '-');
        }

        return slug;
    }

    static isObject(val) {
        return (val && val instanceof Object);
    }

    static isBoolean(val) {
        return (val === true || val === false);
    }

    static isString(val) {
        return (val && typeof val === 'string');
    }

    static isStringOrNull(val) {
        return (val === null || Util.isString(val));
    }

    static isNonEmptyString(val) {
        return (Util.isString(val) && val !== '');
    }

    static isNumber(val) {
        return !isNaN(val);
    }

    static isInt(val) {
        return (Util.isNumber(val) && Number.isInteger(val));
    }

    static isPosInt(val) {
        return Util.isIntAbove(val, 0);
    }

    static isNonNegInt(val) {
        return Util.isIntAbove(val, -1);
    }

    static isNegInt(val) {
        return Util.isIntBelow(val, 0);
    }

    static isIntAbove(val, lowerBound) {
        return (Util.isInt(val) && Util.isNumber(lowerBound) && val > lowerBound);
    }

    static isIntBelow(val, upperBound) {
        return (Util.isInt(val) && Util.isNumber(upperBound) && val < upperBound);
    }

    static isIntBetween(val, lowerBound, upperBound) {
        return (Util.isInt(val) && Util.isNumber(lowerBound) && Util.isNumber(upperBound) && val > lowerBound && val < upperBound);
    }
}
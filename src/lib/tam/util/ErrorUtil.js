import Util from './Util';


class ErrorUtil {

    static raiseError(className, funcName, msg, title=null) {
        if (Util.isNonEmptyString(title)) {
            throw new Error(`[${className}->${funcName}] ${title}: ${msg}`);
        } else {
            throw new Error(`[${className}->${funcName}]: ${msg}`);
        }
    }

    static raiseInvalidParameterError(className, funcName, paramName, msg) {
        ErrorUtil.raiseError(className, funcName, msg, `Invalid Parameter '${paramName}'`);
    }

    static raiseInvalidPropertyValueError(className, propName, msg) {
        ErrorUtil.raiseError(className, propName, msg, `Invalid Property Value '${propName}'`);
    }
}


ErrorUtil.MSG = {
    valueType: {
        object: 'Expected Object.',
        bool: 'Expected boolean.',
        string: 'Expected string.',
        stringOrNull: 'Expected string or null.',
        nonEmptyString: 'Expected non empty string.',
        int: 'Expected integer.',
        nonNegInt: 'Expected non negative integer.',
        posInt: 'Expected a positive integer.',
        negInt: 'Expected a negative integer.',
    }

}


export default ErrorUtil;
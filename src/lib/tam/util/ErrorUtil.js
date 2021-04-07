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

    static raiseInvalidParameterClassError(className, funcName, paramName, paramClass) {
        ErrorUtil.raiseInvalidParamater(className, funcName, `Expected instance of type ${paramClass}`, `Invalid Parameter '${paramName}'`);
    }

    static raiseInvalidPropertyValueError(className, propName, msg) {
        ErrorUtil.raiseError(className, propName, msg, `Invalid Property Value '${propName}'`);
    }
}

ErrorUtil.MSG = {
    VALUE_TYPE: {
        OBJECT: 'Expected Object.',
        ARRAY: 'Expected array.',
        BOOL: 'Expected boolean.',
        STRING: 'Expected string.',
        STRING_OR_NULL: 'Expected string or null.',
        NON_EMPTY_STRING: 'Expected non empty string.',
        INT: 'Expected integer.',
        NON_NEG_INT: 'Expected non negative integer.',
        POS_INT: 'Expected a positive integer.',
        NEG_INT: 'Expected a negative integer.',
    }
}


export default ErrorUtil;
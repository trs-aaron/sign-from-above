import ErrorUtil from 'lib/tam/util/ErrorUtil';
import Sign from 'models/Sign';
import ProductsSign from 'models/signs/products/ProductsSign';
import ProductsCarouselSign from 'models/signs/products/ProductsCarouselSign';
import VectorSign from 'models/signs/VectorSign';


export default class SignFactory {

    static buildFromJSON(json) {
        let sign = Sign.fromJSON(json);
        return SignFactory.convertFromBase(sign);
    }

    static convertFromBase(sign) {
        if (!sign) {
            ErrorUtil.raiseInvalidParameterClassError('SignFactory', 'buildFromJSON', 'sign', 'Sign');
        }

        switch(sign.typeId) {
            case Sign.TYPES.VECTOR:
                return VectorSign.convertFromBase(sign);

            case Sign.TYPES.PRODUCTS:
                return ProductsSign.convertFromBase(sign);

            case Sign.TYPES.PRODUCTS_CAROUSEL:
                return ProductsCarouselSign.convertFromBase(sign);

            default:
                ErrorUtil.raiseInvalidParameterError('SignFactory', 'buildFromJSON', 'signType', 'Invalid sign type');
                break;
        }
    }
}
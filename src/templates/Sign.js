import Util from 'lib/common/util/Util';
import Model from 'models/Sign';
import * as styles from 'sass/Sign.scss';

// Signs
import VectorSign from 'signs/VectorSign';
import ProductsSign from 'signs/products/ProductsSign';
import ProductsCarouselSign from 'signs/products/ProductsCarouselSign';


const template = (props) => {
    props = {
        id: (Util.isNonEmptyString(props.id)) ? props.id : '',
        isVisble: (props.isVisible === true) ? 1 : 0,
        model: (props.model && props.model instanceof Model) ? props.model : null
    };

    let Sign = () => '';

    if (props.model) {
        switch(props.model.typeId) {
            case Model.TYPES.VECTOR:
                Sign = () => <VectorSign model={props.model} />;
                break;
            case Model.TYPES.PRODUCTS:
                Sign = () => <ProductsSign model={props.model} />;
                break;
            case Model.TYPES.PRODUCTS_CAROUSEL:
                Sign = () => <ProductsCarouselSign model={props.model} />;
                break;
        }
    }

    return (
        <div className="sign_sign" data-id={props.id} data-is-visible={props.isVisble}>
            <Sign />
        </div>
    );
};


export default template;
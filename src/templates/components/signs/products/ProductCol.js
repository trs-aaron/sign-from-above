import Util from 'lib/tam/util/Util';
import * as styles from 'sass/components/signs/products/ProductCol.scss';


const tmpl = (props) => {
    props = {
        text: (Util.isNonEmptyString(props.text)) ? props.text : null,
        class: `tam-sign_products_card_product_col ${props.class}`
    }

    return (
        <div className={props.class}>{props.text}</div>
    );
};


export default tmpl;
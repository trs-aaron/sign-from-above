import Util from 'lib/common/util/Util';
import * as styles from 'sass/components/products/_card/_ProductCol.scss';


const template = (props) => {
    props = {
        text: (Util.isNonEmptyString(props.text)) ? props.text : null,
        class: `sign_products_card_product_col ${props.class}`
    }

    return (
        <div className={props.class}>{props.text}</div>
    );
};


export default template;
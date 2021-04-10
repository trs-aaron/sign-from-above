import ProductCol from 'components/products/_card/_ProductCol';
import * as styles from 'sass/components/products/_card/_Product.scss';


const template = (props) => {
    props = {
        cols: (Array.isArray(props.cols)) ? props.cols.map((c) => c) : []
    }

    return (
        <div className="sign_products_card_product">{props.cols.map((c, i) => <ProductCol key={i} model={c} />)}</div>
    );
};


export default template;
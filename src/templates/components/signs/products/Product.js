import ProductCol from 'components/signs/products/ProductCol';
import * as styles from 'sass/components/signs/products/Product.scss';


const tmpl = (props) => {
    props = {
        cols: (Array.isArray(props.cols)) ? props.cols.map((c) => c) : []
    }

    return (
        <div className="tam-sign_products_card_product">{props.cols.map((c, i) => <ProductCol key={i} model={c} />)}</div>
    );
};


export default tmpl;
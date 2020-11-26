import * as styles from 'sass/components/signs/products/Disclaimer.scss';


const tmpl = (props) => {
    props = {
        text: props.text
    }

    return (
        <div className="tam-sign_products_card_disclaimer">{props.text}</div>
    );
};


export default tmpl;
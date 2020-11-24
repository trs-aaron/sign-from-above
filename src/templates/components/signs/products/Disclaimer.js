import * as styles from 'sass/pages/signs/sign_products.scss';


const tmpl = (props) => {
    props = {
        text: props.text
    }

    return (
        <div className="tam-sign_products_card_disclaimer">{props.text}</div>
    );
};


export default tmpl;
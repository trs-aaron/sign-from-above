import * as styles from 'sass/components/products/_card/_Disclaimer.scss';


const template = (props) => {
    props = {
        text: props.text
    }

    return (
        <div className="sign_products_card_disclaimer">{props.text}</div>
    );
};


export default template;
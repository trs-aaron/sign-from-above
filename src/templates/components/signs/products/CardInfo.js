import Util from 'lib/tam/util/Util';
import * as styles from 'sass/components/signs/products/CardInfo.scss';


const tmpl = (props) => {
    props = {
        title: (Util.isNonEmptyString(props.title)) ? props.title : null,
        subTitle: (Util.isNonEmptyString(props.subTitle)) ? props.subTitle : null,
        desc: (Util.isNonEmptyString(props.desc)) ? props.desc : null
    }

    return(
        <div className="tam-sign_products_card_info">
            <div className="tam-sign_products_card_info_title">{props.title}</div>
            <div className="tam-sign_products_card_info_sub-title">{props.subTitle}</div>
            <div className="tam-sign_products_card_info_desc">{props.desc}</div>
        </div>
    );
};


export default tmpl;
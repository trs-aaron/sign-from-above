import Util from 'lib/common/util/Util';
import * as styles from 'sass/components/products/_card/_CardInfo.scss';


const template = (props) => {
    props = {
        title: (Util.isNonEmptyString(props.title)) ? props.title : null,
        subTitle: (Util.isNonEmptyString(props.subTitle)) ? props.subTitle : null,
        desc: (Util.isNonEmptyString(props.desc)) ? props.desc : null
    }

    return(
        <div className="sign_products_card_info">
            <div className="sign_products_card_info_title">{props.title}</div>
            <div className="sign_products_card_info_sub-title">{props.subTitle}</div>
            <div className="sign_products_card_info_desc">{props.desc}</div>
        </div>
    );
};


export default template;
import Util from 'lib/common/util/Util';
import CardInfo from 'components/products/_card/_CardInfo';
import Disclaimer from 'components/products/_card/_Disclaimer';
import Product from 'components/products/_card/_Product';
import * as styles from 'sass/components/products/Card.scss';

 
const template = (props) => {
    props = {
        hasLogo: (props.hasLogo === true) ? 1 : 0,
        isBkgdTransp: (props.isBkgdTransp === true) ? 1 : 0,
        title: (Util.isNonEmptyString(props.title)) ? props.title : null,
        info: (props.info) ? props.info : null,
        priceColCnt: (Util.isNonNegInt(props.priceColCnt)) ? props.priceColCnt : 0,
        products: (Array.isArray(props.products)) ? props.products.map((p) => p) : [],
        disclaimers: (Array.isArray(props.disclaimers)) ? props.disclaimers.map((d) => d) : []
    }

    return (
        <div className="sign_products_card size-reg" data-has-logo={props.hasLogo} data-transp-bkgd={props.isBkgdTransp}>
            <div className="sign_products_card_header">
                <div className="sign_products_card_title">{props.title}</div>
                <div className="sign_products_card_logo"></div>
            </div>
            <div className="sign_products_card_content">
                {(props.info) && <CardInfo model={props.info} />}
                <div className="sign_products_card_products" data-price-cols={props.priceColCnt}>
                    {props.products.map((p, i) => <Product key={i} model={p} />)}
                </div>
                <div className="sign_products_card_disclaimers">
                    {props.disclaimers.map((d, i) => <Disclaimer key={i} model={d} />)}
                </div>
            </div>
        </div>
    );
 };


export default template;
import Util from 'lib/tam/util/Util';
import Card from 'components/signs/products/Card';
import * as styles from 'sass/pages/signs/sign_products.scss';


const tmpl = (props) => {
    props = {
        isVisble: (props.isVisible === true) ? 1 : 0,
        cardCnt: (Util.isPosInt(props.cardCnt) || true) ? props.cardCnt : 0,
        cards: (Array.isArray(props.cards)) ? props.cards : []
    };

    return (
        <div className="tam-sign_products">
            <div className="tam-sign_products_bkgd"></div>
            <div className="tam-sign_products_ctnr" data-is-visible={props.isVisble} data-card-cnt={props.cardCnt}>
                <div className="tam-sign_products_cards">{props.cards.map((c, i) => <Card key={i} model={c} />)}</div>
            </div>
        </div>
    );
};


export default tmpl;
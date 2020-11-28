import Util from 'lib/tam/util/Util';
import Card from 'components/products/Card';
import * as styles from 'sass/signs/products/ProductsCarouselSign.scss';


const template = (props) => {
    props = {
        cardCnt: (Util.isPosInt(props.cardCnt) || true) ? props.cardCnt : 0,
        cards: (Array.isArray(props.cards)) ? props.cards : []
    };

    return (
        <div className="tam-sign_products-carousel">
            <div className="tam-sign_products-carousel_bkgd"></div>
            <div className="tam-sign_products-carousel_ctnr" data-is-visible={props.isVisble} data-card-cnt={props.cardCnt}>
                <div className="tam-sign_products-carousel_cards">{props.cards.map((c, i) => <Card key={i} model={c} />)}</div>
            </div>
        </div>
    );
};


export default template;
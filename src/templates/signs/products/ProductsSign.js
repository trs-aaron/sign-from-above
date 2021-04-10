import Util from 'lib/common/util/Util';
import Card from 'components/products/Card';
import * as styles from 'sass/signs/products/ProductsSign.scss';


const template = (props) => {
    props = {
        isVisible: props.isVisble,
        cardCnt: (Util.isPosInt(props.cardCnt) || true) ? props.cardCnt : 0,
        cards: (Array.isArray(props.cards)) ? props.cards : []
    };

    return (
        <div className="sign_products">
            <div className="sign_products_bkgd"></div>
            <div className="sign_products_ctnr" data-is-visible={props.isVisble} data-card-cnt={props.cardCnt}>
                <div className="sign_products_cards">
                {
                    props.cards.map((c, i) => {
                        return (
                            <div key={i} className="sign_products_card-wrapper">
                                <Card model={c} />
                            </div>
                        );
                    })
                }
                </div>
            </div>
        </div>
    );
};


export default template;
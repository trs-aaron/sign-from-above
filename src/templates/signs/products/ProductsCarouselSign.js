import Util from 'lib/common/util/Util';
import Card from 'components/products/Card';
import Carousel from 'components/Carousel';
import * as styles from 'sass/signs/products/ProductsCarouselSign.scss';


const template = (props) => {
    props = {
        isVisible: props.isVisble,
        cardCnt: (Util.isPosInt(props.cardCnt) || true) ? props.cardCnt : 0,
        cards: (Array.isArray(props.cards)) ? props.cards : [],
        transitionDelay: (Util.isPosInt(props.transitionDelay)) ? props.transitionDelay : Carousel.DEFAULT_TRANSITION_DELAY
    };

    return (
        <div className="sign_products-carousel">
            <div className="sign_products-carousel_bkgd"></div>
            <div className="sign_products-carousel_ctnr" data-is-visible={props.isVisble} data-card-cnt={props.cardCnt}>
                <div className="sign_products-carousel_cards">
                    <Carousel autoRotate={true} transitionDelay={props.transitionDelay}>
                    {
                        props.cards.map((c, i) => {
                            return (
                                <div key={i} className="sign_products-carousel_card-wrapper">
                                    <Card model={c} />
                                </div>
                            );
                        })
                    }
                    </Carousel>
                </div>
            </div>
        </div>
    );
};


export default template;
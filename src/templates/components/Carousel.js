import ContentContainer from 'components/_carousel/_ContentContainer';
import Util from 'lib/tam/util/Util';
import * as styles from 'sass/components/Carousel.scss';


const template = (props) => {
    props = {
        visibleCntrCnt: Util.isPosInt(props.visibleCntrCnt) ? props.visibleCardCnt : 1,
        onDeckCntrIndex: (Util.isNonNegInt(props.onDeckCntrIndex)) ? props.onDeckCntrIndex : null,
        pos1CntrIndex: (Util.isNonNegInt(props.pos1CntrIndex)) ? props.pos1CntrIndex: null,
        pos2CntrIndex: (Util.isNonNegInt(props.pos2CntrIndex)) ? props.pos2CntrIndex : null,
        exitCntrIndex: (Util.isNonNegInt(props.exitCntrIndex)) ? props.exitCntrIndex : null,
        children: props.children
    };


    return (
        <div className="tam-sign_carousel" data-visible-cntr-cnt={props.visibleCntrCnt}>
        {
            props.children.map((c, i) => {
                if (i === props.pos2CntrIndex) {
                    return <ContentContainer key={i} position={ContentContainer.POSITIONS.POS_2}>{c}</ContentContainer>;
                } else if (i === props.pos1CntrIndex) {
                    return <ContentContainer key={i} position={ContentContainer.POSITIONS.POS_1}>{c}</ContentContainer>;
                } else if (i === props.onDeckCntrIndex) {
                    return <ContentContainer key={i} position={ContentContainer.POSITIONS.ON_DECK}>{c}</ContentContainer>;
                } else if (i === props.exitCntrIndex) {
                    return <ContentContainer key={i} position={ContentContainer.POSITIONS.EXIT}>{c}</ContentContainer>;
                } else {
                    return <ContentContainer key={i} position={ContentContainer.POSITIONS.QUEUE}>{c}</ContentContainer>;
                }
            })
        }
        </div>
    );
};


export default template;
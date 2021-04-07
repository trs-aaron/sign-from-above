import ContentContainer from 'components/_carousel/_ContentContainer';
import * as styles from 'sass/components/_carousel/_ContentContainer.scss';


const template = (props) => {
    props = {
        position: (ContentContainer.isValidPosition(props.position)) ? props.position : ContentContainer.POSITIONS.QUEUE,
        children: props.children
    };

    return (
        <div className="tam-sign_carousel_content-cntr" data-position={props.position}>
            {props.children}
        </div>
    );
};


export default template;
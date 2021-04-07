import Util from 'lib/tam/util/Util';
import * as styles from 'sass/signs/VectorSign.scss';


const template = (props) => {
    props = {
        isVisible: props.isVisble,
        contain: (props.contain === true) ? '1' : '0',
        vectorPath: (Util.isNonEmptyString(props.vectorPath)) ? props.vectorPath : '',
        style: (Util.isNonEmptyString(props.vectorPath)) ? `background-image: url(${props.vectorPath});` : ''
    };

    return (
        <div className="tam-sign_vector" data-contain={props.contain}>
            <div className="tam-sign_vector_cntr">
                <div className="tam-sign_vector_img" style={{backgroundImage: "url(" + props.vectorPath + ")"}}/>
            </div>
        </div>
    );
};


export default template;
import Util from 'lib/tam/util/Util';
import * as styles from 'sass/signs/VectorSign.scss';


const template = (props) => {
    props = {
        isVisible: props.isVisble,
        vectorPath: (Util.isNonEmptyString(props.vectorPath)) ? props.vectorPath : ''
    };

    return (
        <div className="tam-sign_vector">
            <div className="tam-sign_vector_cntr">
                <img className="tam-sign_vector_img" src={props.vectorPath}/> 
            </div>
        </div>
    );
};


export default template;
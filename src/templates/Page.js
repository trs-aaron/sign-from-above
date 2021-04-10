import Util from 'lib/common/util/Util';
import * as styles from 'sass/Page.scss';


const template = (props) => {
    props = {
        isVisble: (props.isVisible === true) ? 1 : 0,
        children: props.children
    };

    return (
        <div className="sign_page" data-is-visible={props.isVisble}>
            {props.children}
        </div>
    );
};


export default template;
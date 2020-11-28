import Sign from 'Sign';
import * as styles from 'sass/layouts/SingleLayout.scss';


const template = (props) => {
    props = {
        signIds: (props.signIds && Array.isArray(props.signIds)) ? props.signIds : []
    };

    return (
        <div className="tam-sign_layout_single">
            {props.signIds.map((id) => <Sign key={id} id={id} />)}
        </div>
    );
};


export default template;
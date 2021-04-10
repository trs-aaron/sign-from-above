import Util from 'lib/common/util/Util';
import * as styles from 'sass/components/trails/_trailStatus/Trail.scss';


const template = (props) => {
    props = {
        id: (Util.isNonEmptyString(props.id)) ? props.id : '',
        name: (Util.isNonEmptyString(props.name)) ? props.name : '',
        type: (Util.isNonEmptyString(props.type)) ? props.type : '',
        status: (Util.isNonEmptyString(props.status)) ? props.status : '',
        isOpen: (props.isOpen === true) ? '1' : '0',
        isGroomed: (props.isGroomed === true) ? '1' : '0'
    };

    return (
        <div className="sign_trail-status_trail">
            <div className="sign_trail-status_trail_type" data-trail-type={props.type}></div>
            <div className="sign_trail-status_trail_name">{props.name}</div>
            <div className="sign_trail-status_trail_groomed" data-is-visible={props.isGroomed}></div>
            <div className="sign_trail-status_trail_status" data-is-open={props.isOpen}>{props.status}</div>
        </div>
    );
};


export default template;
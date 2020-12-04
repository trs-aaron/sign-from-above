import Util from 'lib/tam/util/Util';
import Sign from 'Sign';
import TrailStatus from 'components/trails/TrailStatus';
import * as styles from 'sass/layouts/TrailStatusLayout.scss';


const template = (props) => {
    props = {
        signId: (Util.isNonEmptyString(props.signId)) ? props.signId : ''
    };

    return (
        <div className="tam-sign_layout_trail-status">
            <div className="tam-sign_layout_trail-status_sign">
                <Sign id={props.signId} />
            </div>
            <div className="tam-sign_layout_trail-status_trails">
                <TrailStatus />
            </div>
        </div>
    );
};


export default template;
import Util from 'lib/tam/util/Util';
import Page from 'Page';
import Model from 'models/Layout';
import * as styles from 'sass/Layout.scss';

// Layouts
import SingleLayout from 'layouts/SingleLayout';
import TrailStatusLayout from 'layouts/TrailStatusLayout';


const template = (props) => {
    props = {
        id: (Util.isNonEmptyString(props.id)) ? props.id : '',
        layoutName: (Model.isValidLayoutName(props.layoutName)) ? props.layoutName : null,
        isVisible: (props.isVisible === true) ? 1 : 0,
        signIds: (props.signIds && Array.isArray(props.signIds)) ? props.signIds : null
    };

    let Layout = () => '';

    switch(props.layoutName) {
        case Model.NAMES.SINGLE:
            Layout = () => <SingleLayout signIds={props.signIds} />;
            break;

        case Model.NAMES.TRAIL_STATUS:
            Layout = () => <TrailStatusLayout signIds={props.signIds} />;
            break;
    }

    return (
        <Page>
            <div className="tam-sign_layout" data-id={props.id} data-is-visible={props.isVisible}>
                <Layout />
            </div>
        </Page>
    );
};


export default template;
import React from 'react';
import PropTypes from 'prop-types';
import Api from 'util/Api';
import Model from 'models/Layout';
import Template from 'templates/Layout';
import Util from 'lib/tam/util/Util';


class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            model: null
        }
    }

    async componentDidMount() {
        let layout = null;

        if (Util.isNonEmptyString(this.props.idType) && Util.isNonEmptyString(this.props.id)) {
            switch(this.props.idType) {
                case Layout.ID_TYPE.LAYOUT:
                    layout = await Api.getLayoutById(this.props.id);
                    break;
                case Layout.ID_TYPE.SCREEN:
                    layout = await Api.getLayoutForScreenId(this.props.id);
                    break;
                case Layout.ID_TYPE.DEVICE:
                    layout = await Api.getLayoutForDeviceId(this.props.id);
                    break;
                default:
                    layout = null;
                    break;
            }
        }

        this.setState({ 
            model: (layout && layout instanceof Model) ? layout : null
        });
    }

    render() {
        let props = {
            id: (Util.isNonEmptyString(this.props.idType) && this.props.idType === Layout.ID_TYPE.LAYOUT) ? this.props.id : null,
            layoutName: null,
            isVisible: this.props.isVisible,
            signIds: null
        };

        if (this.state.model && this.state.model instanceof Model) {
            props.id = this.state.model.id;
            props.layoutName = this.state.model.layoutName;
            props.signIds = this.state.model.signIds;
        }

        return Template(props);
    }
}

Layout.ID_TYPE = {
    LAYOUT: 'L',
    SCREEN: 'S',
    DEVICE: 'D'
}

Layout.defaultProps = {
    id: null,
    idType: Layout.ID_TYPE.LAYOUT,
    isVisible: true
};

Layout.propTypes = {
    id: PropTypes.string.isRequired,
    idType: PropTypes.string,
    isVisible: PropTypes.bool
};


export default Layout;
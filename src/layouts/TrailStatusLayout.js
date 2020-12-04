import React from 'react';
import PropTypes from 'prop-types';
import Template from 'templates/layouts/TrailStatusLayout.js';


class TrailStatusLayout extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let props = {
            signId: (Array.isArray(this.props.signIds) && this.props.signIds.length > 0) ? this.props.signIds[0] : null
        };

        return Template(props);
    }
}

TrailStatusLayout.defaultProps = {
    signIds: []
};

TrailStatusLayout.propTypes = {
    signIds: PropTypes.array
};


export default TrailStatusLayout;
import React from 'react';
import PropTypes from 'prop-types';
import Template from 'templates/layouts/SingleLayout.js';


class SingleLayout extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let props = {
            signIds: (Array.isArray(this.props.signIds)) ? this.props.signIds.map((s) => s) : null
        };

        return Template(props);
    }
}

SingleLayout.defaultProps = {
    signIds: []
};

SingleLayout.propTypes = {
    signIds: PropTypes.array
};


export default SingleLayout;
import React from 'react';
import PropTypes from 'prop-types';
import Template from 'templates/Page';


class Page extends React.Component {

    render() {
        let props = {
            isVisible: this.props.isVisible,
            children: this.props.children
        };

        return Template(props);
    }
}

Page.defaultProps = {
    isVisible: true
};

Page.propTypes = {
    isVisible: PropTypes.bool
};


export default Page;
import React from 'react';
import PropTypes from 'prop-types';
import Template from 'templates/components/_pagedScroll/_ContentContainer';
import Util from 'lib/common/util/Util';


class ContentContainer extends React.Component {

    constructor(props) {
        super(props);

        this._ref = React.createRef();

        this.state = {
            visible: false
        }
    }

    get top() {
        return (this._ref && this._ref.current) ? this._ref.current.getBoundingClientRect().top : 0;
    }

    get bottom() {
        return (this._ref && this._ref.current) ? this._ref.current.getBoundingClientRect().bottom : 0;
    }

    hide() {
        this._ref.current.setAttribute('data-visible', 0);
        /*return new Promise((resolve) => {
            this.setState({
                visible: false
            }, resolve);
        });*/
    }

    show() {
        this._ref.current.setAttribute('data-visible', 1);
        /*return new Promise((resolve) => {
            this.setState({
                visible: true
            }, resolve);
        });*/
    }

    render() {
        let props = {
            ref: this._ref,
            visible: (this.state.visible === true),
            children: this.props.children
        };

        return Template(props);
    }
}

ContentContainer.defaultProps = {
    isVisible: true
};

ContentContainer.propTypes = {
    isVisible: PropTypes.bool
};


export default ContentContainer;
import React from 'react';
import PropTypes from 'prop-types';
import Util from 'lib/tam/util/Util';
import Model from 'models/signs/VectorSign'
import Template from 'templates/signs/VectorSign';


class VectorSign extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        }
    }

    // Leaving this to reference when switching from img tag to embeded svg.
    /*componentDidMount() {
        if (this.props.model) {
            this.props.model.getVectorHtml()
            .then((html) => {
                this.setState({
                    vectorHtml: html
                });
            });
        }
    }*/

    render() {
        let props = {
            isVisible: this.state.isVisible,
            contain: false,
            vectorPath: null
        };

        if (this.props.model) {
            props.contain = (this.props.model.contain === true);
            props.vectorPath = (Util.isNonEmptyString(this.props.model.vectorPath)) ? this.props.model.vectorPath : null;
        }

        return Template(props);
    }
}

VectorSign.defaultProps = {
    isVisible: true,
    contain: false,
    model: null
};

VectorSign.propTypes = {
    isVisible: PropTypes.bool,
    contain: PropTypes.bool,
    model: PropTypes.instanceOf(Model)
};


export default VectorSign;
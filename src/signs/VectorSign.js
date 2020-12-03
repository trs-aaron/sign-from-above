import React from 'react';
import PropTypes from 'prop-types';
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
            vectorPath: (this.props.model) ? this.props.model.vectorPath : null
        };

        return Template(props);
    }
}

VectorSign.defaultProps = {
    isVisible: true,
    model: null
};

VectorSign.propTypes = {
    isVisible: PropTypes.bool,
    model: PropTypes.instanceOf(Model)
};


export default VectorSign;
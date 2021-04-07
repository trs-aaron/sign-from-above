import React from 'react';
import PropTypes from 'prop-types';
import Model from 'models/components/products/_card/_Disclaimer'
import Template from 'templates/components/products/_card/_Disclaimer';


class Disclaimer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let props = {
            text: null
        };

        if (this.props.model && this.props.model instanceof Model) {
            props.text = this.props.model.text;
        }

        return Template(props);
    }
}

Disclaimer.defaultProps = {
    model: null
};

Disclaimer.propTypes = {
    model: PropTypes.instanceOf(Model)
};


export default Disclaimer;
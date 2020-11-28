import React from 'react';
import PropTypes from 'prop-types';
import Model from 'models/components/products/_card/_ProductCol'
import Template from 'templates/components/products/_card/_ProductCol';
import Product from 'models/components/products/_card/_Product';


class ProductCol extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            model: (props.model) ? props.model : new Model()
        }
    }

    render() {
        let props = {
            class: null,
            text: null
        };

        if (this.props.model && this.props.model instanceof Model) {
            props.class = this.props.model.typeClass;
            props.text = this.props.model.text;
        }

        return Template(props);
    }
}

ProductCol.defaultProps = {
    model: null
};

ProductCol.propTypes = {
    model: PropTypes.instanceOf(Model)
};


export default ProductCol;
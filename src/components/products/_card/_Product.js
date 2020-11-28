import React from 'react';
import PropTypes from 'prop-types';
import Model from 'models/components/products/_card/_Product'
import Template from 'templates/components/products/_card/_Product';


class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            model: (props.model) ? props.model : new Model()
        }
    }

    render() {
        let props = {
            cols: null
        };

        if (this.props.model && this.props.model instanceof Model) {
            props.cols = this.props.model.cols;
        }

        return Template(props);
    }
}

Product.defaultProps = {
    model: null
};

Product.propTypes = {
    model: PropTypes.instanceOf(Model)
};


export default Product;
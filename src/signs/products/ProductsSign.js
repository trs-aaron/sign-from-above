import React from 'react';
import PropTypes from 'prop-types';
import Model from 'models/signs/products/ProductsSign'
import Template from 'templates/signs/products/ProductsSign';


class ProductsSign extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            model: (props.model) ? props.model : new Model()
        }
    }

    render() {
        let props = {
            isVisible: this.state.isVisible,
            cardCnt: this.state.model.cardCount,
            cards: this.state.model.cards
        };

        return Template(props);
    }
}

ProductsSign.defaultProps = {
    isVisible: true,
    model: null
};

ProductsSign.propTypes = {
    isVisible: PropTypes.bool,
    model: PropTypes.instanceOf(Model)
};


export default ProductsSign;
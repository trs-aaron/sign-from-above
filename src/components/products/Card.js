import React from 'react';
import PropTypes from 'prop-types';
import Model from 'models/components/products/Card'
import Template from 'templates/components/products/Card';


class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let props = {
            hasLogo: false,
            isBkgdTransp: false,
            title: null,
            info: null,
            priceColCnt: null,
            products: null,
            disclaimers: null
        };

        if (this.props.model && this.props.model instanceof Model) {
            props.hasLogo = this.props.model.hasLogo;
            props.isBkgdTransp = this.props.model.isBkgdTransp;
            props.title = this.props.model.title;
            props.info = this.props.model.info;
            props.priceColCnt = this.props.model.priceColCnt;
            props.products = this.props.model.products;
            props.disclaimers = this.props.model.disclaimers;
        }

        return Template(props);
    }
}

Card.defaultProps = {
    isVisible: true,
    model: null
};

Card.propTypes = {
    isVisible: PropTypes.bool,
    model: PropTypes.instanceOf(Model)
};


export default Card;
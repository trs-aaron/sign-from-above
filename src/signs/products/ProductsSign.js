import React from 'react';
import Model from 'models/signs/products/ProductsSign'
import Template from 'templates/signs/products/ProductsSign';


export default class ProductsSign extends React.Component {

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
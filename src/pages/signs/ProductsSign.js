import React from 'react';
import Model from 'models/pages/signs/ProductsSign'
import Template from 'templates/pages/signs/ProductsSign';


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
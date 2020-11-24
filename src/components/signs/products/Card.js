import React from 'react';
import Model from 'models/components/signs/products/Card'
import Template from 'templates/components/signs/products/Card';


export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            model: (props.model) ? props.model : new Model()
        }
    }

    render() {
        let props = {
            hasLogo: this.state.model.hasLogo,
            isBkgdTransp: this.state.model.isBkgdTransp,
            title: this.state.model.title,
            info: this.state.model.info,
            priceColCnt: this.state.model.priceColCnt,
            products: this.state.model.products,
            disclaimers: this.state.model.disclaimers,
        };

        return Template(props);
    }
}
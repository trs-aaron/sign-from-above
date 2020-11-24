import React from 'react';
import Model from 'models/components/signs/products/ProductCol'
import Template from 'templates/components/signs/products/ProductCol';


export default class ProductCol extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            model: (props.model) ? props.model : new Model()
        }
    }

    render() {
        let props = {
            class: this.state.model.typeClass,
            text: this.state.model.text
        };

        return Template(props);
    }
}
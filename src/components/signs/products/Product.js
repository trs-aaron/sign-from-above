import React from 'react';
import Model from 'models/components/signs/products/Product'
import Template from 'templates/components/signs/products/Product';


export default class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            model: (props.model) ? props.model : new Model()
        }
    }

    render() {
        let props = {
            cols: this.state.model.cols
        };

        return Template(props);
    }
}
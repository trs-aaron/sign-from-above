import React from 'react';
import Model from 'models/components/signs/products/Disclaimer'
import Template from 'templates/components/signs/products/Disclaimer';


export default class Disclaimer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            model: (props.model) ? props.model : new Model()
        }
    }

    render() {
        let props = {
            text: this.state.model.text
        };

        return Template(props);
    }
}
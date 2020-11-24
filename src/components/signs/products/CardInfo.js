import React from 'react';
import Model from 'models/components/signs/products/CardInfo'
import Template from 'templates/components/signs/products/CardInfo';


export default class CardInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            model: (props.model) ? props.model : new Model()
        }
    }

    render() {
        let props = {
            title: this.state.model.title,
            subTitle: this.state.model.subTitle,
            desc: this.state.model.desc
        };

        return Template(props);
    }
}
import React from 'react';
import PropTypes from 'prop-types';
import Model from 'models/components/products/_card/_CardInfo'
import Template from 'templates/components/products/_card/_CardInfo';


class CardInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let props = {
            title: null,
            subTitle: null,
            desc: null
        };

        if (this.props.model && this.props.model instanceof Model) {
            props.title = this.props.model.title;
            props.subTitle = this.props.model.subTitle;
            props.desc = this.props.model.desc;
        }

        return Template(props);
    }
}

CardInfo.defaultProps = {
    model: null
};

CardInfo.propTypes = {
    model: PropTypes.instanceOf(Model)
};


export default CardInfo;
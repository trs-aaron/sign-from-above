import React from 'react';
import PropTypes from 'prop-types';
import Api from 'util/Api';
import Model from 'models/Sign';
import Template from 'templates/Sign';


class Sign extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            model: null
        }
    }

    async componentDidMount() {
        const sign = await Api.getSignById(this.props.id);
        this.setState({ 
            model: (sign && sign instanceof Model) ? sign : null
        });
    }

    render() {
        let props = {
            isVisible: this.props.isVisible,
            id: this.props.id,
            model: (this.state.model && this.state.model instanceof Model) ? this.state.model : null
        };

        return Template(props);
    }
}

Sign.defaultProps = {
    id: null,
    isVisible: true,
    model: null
};

Sign.propTypes = {
    id: PropTypes.string.isRequired,
    isVisible: PropTypes.bool,
    model: PropTypes.instanceOf(Model)
};


export default Sign
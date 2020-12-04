import React from 'react';
import PropTypes from 'prop-types';
import Model from 'models/components/trails/_trailStatus/Trail'
import Template from 'templates/components/trails/_trailStatus/Trail';


class Trail extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let props = {
            id: '',
            name: '',
            type: '',
            isOpen: false,
            isGroomed: false,
        };

        if (this.props.model && this.props.model instanceof Model) {
            props.id = this.props.model.id;
            props.name = this.props.model.name;
            props.type = this.props.model.type;
            props.status = (this.props.model.isOpen === true) ? Trail.STATUS.OPEN : Trail.STATUS.CLOSED;
            props.isOpen = (this.props.model.isOpen === true);
            props.isGroomed = (this.props.model.isGroomed === true);
        }

        return Template(props);
    }
}

Trail.STATUS = {
    OPEN: 'open',
    CLOSED: 'closed'
}

Trail.defaultProps = {
    isVisible: true,
    model: null
};

Trail.propTypes = {
    isVisible: PropTypes.bool,
    model: PropTypes.instanceOf(Model)
};


export default Trail;
import React from 'react';
import PropTypes from 'prop-types';
import Model from 'models/components/trails/TrailStatus'
import Template from 'templates/components/trails/TrailStatus';
import TrailStatusApi from 'util/TrailStatusApi';


class TrailStatus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            model: null
        }
    }

    async componentDidMount() {
        let model = new Model();
        model.trails = await TrailStatusApi.getTrails();

        this.setState({
            model: model
        });
    }

    render() {
        let props = {
            isVisible: this.state.isVisible,
            trails: []
        };

        if (this.state.model) {
            props.trails = this.state.model.trails;
        }

        return Template(props);
    }
}

TrailStatus.defaultProps = {
    isVisible: true,
};

TrailStatus.propTypes = {
    isVisible: PropTypes.bool,
};


export default TrailStatus;
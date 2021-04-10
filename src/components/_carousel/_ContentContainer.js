import React from 'react';
import PropTypes from 'prop-types';
import Template from 'templates/components/_carousel/_ContentContainer';
import Util from 'lib/common/util/Util';


class ContentContainer extends React.Component {

    static isValidPosition(position) {
        return (Util.isNonEmptyString(position) && (Object.values(ContentContainer.POSITIONS).find((p) => p === position) !== null));
    }

    render() {
        let props = {
            position: this.props.position,
            children: this.props.children
        };

        return Template(props);
    }
}

ContentContainer.POSITIONS = {
    QUEUE: 'Q',
    ON_DECK: 'OD',
    POS_1: 'P1',
    POS_2: 'P2',
    EXIT: 'X'
}

ContentContainer.defaultProps = {
    position: ContentContainer.POSITIONS.QUEUE
};

ContentContainer.propTypes = {
    position: PropTypes.string
};


export default ContentContainer;
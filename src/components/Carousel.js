import React from 'react';
import PropTypes from 'prop-types';
import Template from 'templates/components/Carousel';
import Util from 'lib/tam/util/Util';


class Carousel extends React.Component {
    VIS_CARDS = 2;
    ROTATE_STEP_TIMEOUT = 100;

    constructor(props) {
        super(props);

        let pos1CntrIndex = null;
        let pos2CnterIndex = null;

        switch (this._getContainerCount()) {
            case 0:
                break;
            case 1:
                pos1CntrIndex = 0;
                break;
            default:
                pos1CntrIndex = 1;
                pos2CnterIndex = 0;
        }

        this.state = {
            visibleCntrCnt: this.VIS_CARDS,
            onDeckCntrIndex: null,
            pos1CntrIndex: pos1CntrIndex,
            pos2CntrIndex: pos2CnterIndex,
            exitCntrIndex: null
        }
    }

    async rotate() {

        this._clearExiting().then(() => {
            setTimeout(() => {
                this._moveNextOnDeck().then(() => {
                    setTimeout(() => { this._shift() }, this.ROTATE_STEP_TIMEOUT);
                });
            }, this.ROTATE_STEP_TIMEOUT);
        });
    }

    _getContainerCount() {
        return (Array.isArray(this.props.children)) ? this.props.children.length : 0;
    }

    _clearExiting() {
        return new Promise((resolve) => {
            this.setState({
                exitCntrIndex: null
            }, resolve);
        });
    }

    _moveNextOnDeck() {
        return new Promise((resolve) => {
            let onDeck = (Util.isNonNegInt(this.state.pos1CntrIndex)) ? (this.state.pos1CntrIndex + 1) : 0;
            onDeck = (Util.isIntBelow(onDeck, this._getContainerCount())) ? onDeck : 0;
    
            if (onDeck === this.state.pos1CntrIndex) {
                resolve();
            }

            this.setState({
                onDeckCntrIndex: onDeck
            }, resolve);
        });
    }

    _shift() {
        return new Promise((resolve) => {
            let exiting = (Util.isNonNegInt(this.state.pos2CntrIndex)) ? this.state.pos2CntrIndex : null;
            let nextP2 = (Util.isNonNegInt(this.state.pos1CntrIndex)) ? this.state.pos1CntrIndex : null;
            let nextP1 = (Util.isNonNegInt(this.state.onDeckCntrIndex)) ? this.state.onDeckCntrIndex : 0;
            nextP1 = (Util.isIntBelow(nextP1, this._getContainerCount())) ? nextP1 : 0;

            if (nextP1 === this.state.pos1CntrIndex) {
                resolve();
            }

            this.setState({
                pos1CntrIndex: nextP1,
                pos2CntrIndex: nextP2,
                exitCntrIndex: exiting
            }, resolve);
        });
    }

    _startAutoRotating() {
        const transitionDelay = (Util.isPosInt(this.props.transitionDelay)) ? this.props.transitionDelay : Carousel.DEFAULT_TRANSITION_DELAY;
        this._startTime = new Date().getTime();

        let func = async () => {
            if (this.props.autoRotate !== true) {
                clearInterval(runner);
                return;
            }

            await this.rotate();
        }

        let runner = setInterval(func, transitionDelay);
    }
 
    async componentDidMount() {
        if (this.props.autoRotate === true) {
            this._startAutoRotating();
        }
    }

    render() {
        let props = {
            visibleCntrCnt: this.state.visibleCntrCnt,
            onDeckCntrIndex: this.state.onDeckCntrIndex,
            pos1CntrIndex: this.state.pos1CntrIndex,
            pos2CntrIndex: this.state.pos2CntrIndex,
            exitCntrIndex: this.state.exitCntrIndex,
            children: this.props.children
        };

        return Template(props);
    }
}

Carousel.DEFAULT_TRANSITION_DELAY = 5000;

Carousel.defaultProps = {
    autoRotate: false,
    transitionDelay: Carousel.DEFAULT_TRANSITION_DELAY
};

Carousel.propTypes = {
    autoRotate: PropTypes.bool,
    transitionDelay: PropTypes.number
};


export default Carousel;
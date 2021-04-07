import React from 'react';
import PropTypes from 'prop-types';
import Template from 'templates/components/PagedScroll';
import Util from 'lib/tam/util/Util';
import ContentContainer from 'components/_pagedScroll/_ContentContainer';


class PagedScroll extends React.Component {
    OPACITY_TRANSITION_DURATION = 800;

    constructor(props) {
        super(props);

        this._ref = React.createRef();
        this._itemsRef = React.createRef();
        this._firstVisibleIndex = null;
        this._lastVisibleIndex = null;

        this.state = {
            items: []
        }
    }

    get top() {
        return this._ref.current.getBoundingClientRect().top;
    }

    get bottom() {
        return this._ref.current.getBoundingClientRect().bottom;
    }

    get itemsTop() {
        return this._itemsRef.current.getBoundingClientRect().top;
    }

    get itemsBottom() {
        return this._itemsRef.current.getBoundingClientRect().bottom;
    }

    get firstVisibleIndex() {
        return this._firstVisibleIndex;
    }

    get lastVisibleIndex() {
        return this._lastVisibleIndex;
    }

    get allItemsVisible() {
        return (this._firstVisibleIndex === 0 && this._lastVisibleIndex === (this.state.items.length - 1));
    }

    async progressItems() {
        if (this.allItemsVisible) {
            return;
        }

        let moveToItemIndex = this._lastVisibleIndex + 1;
        moveToItemIndex = (moveToItemIndex < this.state.items.length) ? moveToItemIndex : 0;

        await this._hideItems();
        await this._moveToItem(moveToItemIndex);
        this._setVisibleIndexes();
        await this._showItems();
    }

    _getItem(index) {
        return (this.state.items[index] && this.state.items[index].ref && this.state.items[index].ref.current) ? this.state.items[index].ref.current : null;
    }

    _getItemTop(index) {
        const item = this._getItem(index);
        return (item) ? item.top : 0;
    }

    _getItemBottom(index) {
        const item = this._getItem(index);
        return (item) ? item.bottom : 0;
    }

    _isItemInFocus(index) {
        return (this._getItemTop(index) >= this.top && this._getItemBottom(index) <= this.bottom);
    }

    _hideItem(index) {
        const item = this._getItem(index);

        if (item) {
            item.hide();
        }
    }

    _showItem(index) {
        const item = this._getItem(index);

        if (item) {
            item.show();
        }
    }

    async _hideItems(delay=this.DEFAULT_TRANSITION_DURATION) {
        return new Promise((resolve) => {
            this.state.items.forEach((item, i) => this._hideItem(i));
            setTimeout(resolve, this.OPACITY_TRANSITION_DURATION);
        });
    }

    async _showItems() {
        return new Promise((resolve) => {
            this.state.items.forEach((item, i) => {
                if (this._isItemInFocus(i)) {
                    this._showItem(i);
                }
            });

            setTimeout(resolve, this.OPACITY_TRANSITION_DURATION);
        });
    }

    _setVisibleIndexes() {
        for (let i = 0; i <= this.state.items.length; i++) {
            if (i >= this.state.items.length) {
                this._firstVisibleIndex = 0;
                break;
            }

            if (this._isItemInFocus(i)) {
                this._firstVisibleIndex = i;
                break;
            }
        }

        for (let i = this._firstVisibleIndex; i <= this.state.items.length; i++) {
            if (i >= this.state.items.length) {
                this._lastVisibleIndex = (this.state.items.length - 1)
                break;
            }

            if (!this._isItemInFocus(i)) {
                this._lastVisibleIndex = Math.max((i - 1), 0);
                break;
            }
        }
    }

    async _setItemsTransform(y) {
        return new Promise((resolve, reject) => {
            if (isNaN(y)) {
                reject();
            }

            const newTransform = `translateY(${y}px)`;

            window.requestAnimationFrame(() => {
                this._itemsRef.current.style.transform = newTransform;
                this._itemsRef.current.style.MozTransform = newTransform;
                this._itemsRef.current.style.webkitTransform = newTransform;
                this._itemsRef.current.style.msTransform = newTransform;
                resolve();
            });
        });
    }

    async _moveToItem(index) {
        return new Promise(async (resolve, reject) => {
            if (index === null || isNaN(index)) {
                reject();
            }

            let newTop = (this._getItemTop(index) - this.itemsTop);
            this._setItemsTransform(-newTop).then(resolve).catch(reject);
        });
    }

    _startAutoScrolling() {
        const transitionDelay = (Util.isPosInt(this.props.transitionDelay)) ? this.props.transitionDelay : PagedScroll.DEFAULT_TRANSITION_DELAY;
        this._startTime = new Date().getTime();

        let func = async () => {
            if (this.props.autoScroll !== true) {
                clearInterval(runner);
                return;
            }

            await this.progressItems();
        }

        let runner = setInterval(func, transitionDelay);
    }

    async componentDidUpdate() {
        this._setVisibleIndexes();
        await this._showItems();

        if (this.props.autoScroll === true) {
            this._startAutoScrolling();
        }
    }

    static getDerivedStateFromProps(props, state) {
        state.items = props.children.map((c) => {
            return {
                component: c,
                ref: React.createRef()
            };
        });

        return state;
    }

    render() {
        const items = this.props

        let props = {
            ref: this._ref,
            itemsRef: this._itemsRef,
            items: this.state.items
        };

        return Template(props);
    }
}

PagedScroll.DEFAULT_TRANSITION_DELAY = 10000;

PagedScroll.defaultProps = {
    autoScroll: false,
    transitionDelay: PagedScroll.DEFAULT_TRANSITION_DELAY
};

PagedScroll.propTypes = {
    autoScroll: PropTypes.bool,
    transitionDelay: PropTypes.number
};


export default PagedScroll;
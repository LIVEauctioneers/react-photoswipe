import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import PhotoSwipe from './PhotoSwipe';
import { pick } from 'lodash';
import events from './events';

export default class PhotoSwipeGallery extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        options: PropTypes.object,
        thumbnailContent: PropTypes.func,
        id: PropTypes.string,
        className: PropTypes.string
    };

    static defaultProps = {
        options: {},
        thumbnailContent: (item) => {
            return (
                <img src={item.src} width="100" height="100"/>
            );
        }
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            isOpen: false,
            options: props.options
        };

        this.showPhotoSwipe = this.showPhotoSwipe.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    showPhotoSwipe(itemIndex) {
        return (e) => {
            e.preventDefault();
            let { options } = this.state;
            options.index = itemIndex;
            options.getThumbBoundsFn = options.getThumbBoundsFn || ((index) => {
                let thumbnail = ReactDOM.findDOMNode(this.refs['thumbnail' + index]);
                let img = thumbnail.getElementsByTagName('img')[0];
                let pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                let rect = img.getBoundingClientRect();
                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            });
            this.setState({
                isOpen: true,
                options: options
            });
        };
    };

    handleClose() {
        this.setState({
            isOpen: false
        });
    };

    render() {
        const { id, className, items, thumbnailContent, ...other } = this.props;
        const classes = [...className.split(' '), 'pswp-gallery'].join(' ');
        const eventProps = pick(other, events);
        const { isOpen, options } = this.state;
        return (
            <div id={id} className={classes}>
                <div className="pswp-thumbnails">
                    {items.map((item, index) => {
                        return (
                            <div key={index} ref={'thumbnail' + index}
                                className="pswp-thumbnail"
                                onClick={ this.showPhotoSwipe(index) }>
                                { thumbnailContent(item) }
                            </div>
                        );
                    }) }
                </div>
                <PhotoSwipe {...eventProps}
                    isOpen={isOpen}
                    items={items}
                    options={options}
                    onClose={this.handleClose}/>
            </div>
        );
    }
}

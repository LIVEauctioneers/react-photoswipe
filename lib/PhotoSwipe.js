'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _class, _temp2, _initialiseProps;

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _photoswipe = require('photoswipe');

var _photoswipe2 = _interopRequireDefault(_photoswipe);

var _photoswipeUiDefault = require('photoswipe/dist/photoswipe-ui-default');

var _photoswipeUiDefault2 = _interopRequireDefault(_photoswipeUiDefault);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    PhotoSwipe: {
        displayName: 'PhotoSwipe'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'src/PhotoSwipe.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var PhotoSwipe = _wrapComponent('PhotoSwipe')((_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(PhotoSwipe, _React$Component);

    function PhotoSwipe() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PhotoSwipe);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PhotoSwipe.__proto__ || (0, _getPrototypeOf2.default)(PhotoSwipe)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(PhotoSwipe, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var id = _props.id;
            var className = _props.className;

            className = (0, _classnames2.default)(['pswp', className]).trim();
            return _react3.default.createElement(
                'div',
                { id: id,
                    className: className,
                    tabIndex: '-1',
                    role: 'dialog',
                    'aria-hidden': 'true' },
                _react3.default.createElement('div', { className: 'pswp__bg' }),
                _react3.default.createElement(
                    'div',
                    { className: 'pswp__scroll-wrap' },
                    _react3.default.createElement(
                        'div',
                        { className: 'pswp__container' },
                        _react3.default.createElement('div', { className: 'pswp__item' }),
                        _react3.default.createElement('div', { className: 'pswp__item' }),
                        _react3.default.createElement('div', { className: 'pswp__item' })
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: 'pswp__ui pswp__ui--hidden' },
                        _react3.default.createElement(
                            'div',
                            { className: 'pswp__top-bar' },
                            _react3.default.createElement('div', { className: 'pswp__counter' }),
                            _react3.default.createElement('button', { className: 'pswp__button pswp__button--close',
                                title: 'Close (Esc)' }),
                            _react3.default.createElement('button', { className: 'pswp__button pswp__button--share',
                                title: 'Share' }),
                            _react3.default.createElement('button', { className: 'pswp__button pswp__button--fs',
                                title: 'Toggle fullscreen' }),
                            _react3.default.createElement('button', { className: 'pswp__button pswp__button--zoom',
                                title: 'Zoom in/out' }),
                            _react3.default.createElement(
                                'div',
                                { className: 'pswp__preloader' },
                                _react3.default.createElement(
                                    'div',
                                    { className: 'pswp__preloader__icn' },
                                    _react3.default.createElement(
                                        'div',
                                        { className: 'pswp__preloader__cut' },
                                        _react3.default.createElement('div', { className: 'pswp__preloader__donut' })
                                    )
                                )
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            {
                                className: 'pswp__share-modal pswp__share-modal--hidden pswp__single-tap' },
                            _react3.default.createElement('div', { className: 'pswp__share-tooltip' })
                        ),
                        _react3.default.createElement('button', { className: 'pswp__button pswp__button--arrow--left',
                            title: 'Previous (arrow left)' }),
                        _react3.default.createElement('button', { className: 'pswp__button pswp__button--arrow--right',
                            title: 'Next (arrow right)' }),
                        _react3.default.createElement(
                            'div',
                            { className: 'pswp__caption' },
                            _react3.default.createElement('div', { className: 'pswp__caption__center' })
                        )
                    )
                )
            );
        }
    }]);
    return PhotoSwipe;
}(_react3.default.Component), _class.propTypes = {
    isOpen: _react3.default.PropTypes.bool.isRequired,
    items: _react3.default.PropTypes.array.isRequired,
    options: _react3.default.PropTypes.object,
    onClose: _react3.default.PropTypes.func,
    id: _react3.default.PropTypes.string,
    className: _react3.default.PropTypes.string
}, _class.defaultProps = {
    items: [],
    options: {}
}, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.state = {
        isOpen: false
    };

    this.componentDidMount = function () {
        var isOpen = _this2.state.isOpen;

        if (isOpen) {
            _this2.openPhotoSwipe(_this2.props);
        }
    };

    this.componentWillReceiveProps = function (nextProps) {
        var isOpen = _this2.state.isOpen;

        if (nextProps.isOpen) {
            if (!isOpen) {
                _this2.openPhotoSwipe(nextProps);
            } else {
                _this2.updateItems(nextProps.items);
            }
        } else if (isOpen) {
            _this2.closePhotoSwipe();
        }
    };

    this.componentWillUnmount = function () {
        _this2.closePhotoSwipe();
    };

    this.openPhotoSwipe = function (props) {
        var items = props.items;
        var options = props.options;
        var other = (0, _objectWithoutProperties3.default)(props, ['items', 'options']);

        var pswpElement = _reactDom2.default.findDOMNode(_this2);
        _this2.photoSwipe = new _photoswipe2.default(pswpElement, _photoswipeUiDefault2.default, items, options);
        _events2.default.forEach(function (event) {
            var callback = props[event];
            if (callback || event === 'destroy') {
                (function () {
                    var self = _this2;
                    _this2.photoSwipe.listen(event, function () {
                        if (callback) {
                            var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
                            args.unshift(this);
                            callback.apply(undefined, (0, _toConsumableArray3.default)(args));
                        }
                        if (event === 'destroy') {
                            self.handleClose();
                        }
                    });
                })();
            }
        });
        _this2.setState({
            isOpen: true
        }, function () {
            _this2.photoSwipe.init();
        });
    };

    this.updateItems = function () {
        var items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        _this2.photoSwipe.items.length = 0;
        items.forEach(function (item) {
            _this2.photoSwipe.items.push(item);
        });
        _this2.photoSwipe.invalidateCurrItems();
        _this2.photoSwipe.updateSize(true);
    };

    this.closePhotoSwipe = function () {
        if (!_this2.photoSwipe) {
            return;
        }
        _this2.photoSwipe.close();
    };

    this.handleClose = function () {
        var onClose = _this2.props.onClose;

        _this2.setState({
            isOpen: false
        }, function () {
            if (onClose) {
                onClose();
            }
        });
    };
}, _temp2));

exports.default = PhotoSwipe;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _class, _temp;

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _photoswipe = require('photoswipe');

var _photoswipe2 = _interopRequireDefault(_photoswipe);

var _photoswipeUiDefault = require('photoswipe/dist/photoswipe-ui-default');

var _photoswipeUiDefault2 = _interopRequireDefault(_photoswipeUiDefault);

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

var PhotoSwipe = _wrapComponent('PhotoSwipe')((_temp = _class = function (_Component) {
    (0, _inherits3.default)(PhotoSwipe, _Component);

    function PhotoSwipe(props, context) {
        (0, _classCallCheck3.default)(this, PhotoSwipe);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PhotoSwipe.__proto__ || (0, _getPrototypeOf2.default)(PhotoSwipe)).call(this, props, context));

        _this.state = {
            isOpen: false
        };

        _this.closePhotoSwipe = _this.closePhotoSwipe.bind(_this);

        if (!(typeof _this.closePhotoSwipe === 'function')) {
            throw new TypeError('Value of "this.closePhotoSwipe" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.closePhotoSwipe));
        }

        _this.openPhotoSwipe = _this.openPhotoSwipe.bind(_this);

        if (!(typeof _this.openPhotoSwipe === 'function')) {
            throw new TypeError('Value of "this.openPhotoSwipe" violates contract.\n\nExpected:\n(any) => any\n\nGot:\n' + _inspect(_this.openPhotoSwipe));
        }

        _this.updateItems = _this.updateItems.bind(_this);

        if (!(typeof _this.updateItems === 'function')) {
            throw new TypeError('Value of "this.updateItems" violates contract.\n\nExpected:\n(any) => any\n\nGot:\n' + _inspect(_this.updateItems));
        }

        _this.handleClose = _this.handleClose.bind(_this);

        if (!(typeof _this.handleClose === 'function')) {
            throw new TypeError('Value of "this.handleClose" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.handleClose));
        }

        return _this;
    }

    (0, _createClass3.default)(PhotoSwipe, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var isOpen = this.state.isOpen;

            if (isOpen) {
                this.openPhotoSwipe(this.props);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var isOpen = this.state.isOpen;

            if (nextProps.isOpen) {
                if (!isOpen) {
                    this.openPhotoSwipe(nextProps);
                } else {
                    this.updateItems(nextProps.items);
                }
            } else if (isOpen) {
                this.closePhotoSwipe();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.closePhotoSwipe();
        }
    }, {
        key: 'openPhotoSwipe',
        value: function openPhotoSwipe(props) {
            var _this2 = this;

            var items = props.items;
            var options = props.options;
            var other = (0, _objectWithoutProperties3.default)(props, ['items', 'options']);

            var pswpElement = _reactDom2.default.findDOMNode(this);
            this.photoSwipe = new _photoswipe2.default(pswpElement, _photoswipeUiDefault2.default, items, options);
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
            this.setState({
                isOpen: true
            }, function () {
                _this2.photoSwipe.init();
            });
        }
    }, {
        key: 'updateItems',
        value: function updateItems() {
            var _this3 = this;

            var items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

            this.photoSwipe.items.length = 0;
            items.forEach(function (item) {
                _this3.photoSwipe.items.push(item);
            });
            this.photoSwipe.invalidateCurrItems();
            this.photoSwipe.updateSize(true);
        }
    }, {
        key: 'closePhotoSwipe',
        value: function closePhotoSwipe() {
            if (!this.photoSwipe) {
                return;
            }
            this.photoSwipe.close();
        }
    }, {
        key: 'handleClose',
        value: function handleClose() {
            var onClose = this.props.onClose;

            this.setState({
                isOpen: false
            }, function () {
                if (onClose) {
                    onClose();
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var id = _props.id;
            var className = _props.className;

            var classes = [].concat((0, _toConsumableArray3.default)(className.split(' ')), ['pswp']).join(' ');
            return _react3.default.createElement(
                'div',
                { id: id,
                    className: classes,
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
}(_react2.Component), _class.propTypes = {
    isOpen: _react2.PropTypes.bool.isRequired,
    items: _react2.PropTypes.array.isRequired,
    options: _react2.PropTypes.object,
    onClose: _react2.PropTypes.func,
    id: _react2.PropTypes.string,
    className: _react2.PropTypes.string
}, _class.defaultProps = {
    items: [],
    options: {}
}, _temp));

exports.default = PhotoSwipe;

function _inspect(input, depth) {
    var maxDepth = 4;
    var maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            var _ret2 = function () {
                if (depth > maxDepth) return {
                        v: '[...]'
                    };

                var first = _inspect(input[0], depth);

                if (input.every(function (item) {
                    return _inspect(item, depth) === first;
                })) {
                    return {
                        v: first.trim() + '[]'
                    };
                } else {
                    return {
                        v: '[' + input.slice(0, maxKeys).map(function (item) {
                            return _inspect(item, depth);
                        }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
                    };
                }
            }();

            if ((typeof _ret2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret2)) === "object") return _ret2.v;
        } else {
            return 'Array';
        }
    } else {
        var keys = (0, _keys2.default)(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        var indent = '  '.repeat(depth - 1);
        var entries = keys.slice(0, maxKeys).map(function (key) {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}

module.exports = exports['default'];
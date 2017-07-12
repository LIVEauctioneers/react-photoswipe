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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _ReactPhotoSwipe = require('./ReactPhotoSwipe');

var _ReactPhotoSwipe2 = _interopRequireDefault(_ReactPhotoSwipe);

var _lodash = require('lodash.pick');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
    ReactPhotoSwipeGallery: {
        displayName: 'ReactPhotoSwipeGallery'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'src/ReactPhotoSwipeGallery.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var ReactPhotoSwipeGallery = _wrapComponent('ReactPhotoSwipeGallery')((_temp = _class = function (_Component) {
    (0, _inherits3.default)(ReactPhotoSwipeGallery, _Component);

    function ReactPhotoSwipeGallery(props, context) {
        (0, _classCallCheck3.default)(this, ReactPhotoSwipeGallery);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ReactPhotoSwipeGallery.__proto__ || (0, _getPrototypeOf2.default)(ReactPhotoSwipeGallery)).call(this, props, context));

        _this.state = {
            isOpen: false,
            options: props.options
        };

        _this.showPhotoSwipe = _this.showPhotoSwipe.bind(_this);

        if (!(typeof _this.showPhotoSwipe === 'function')) {
            throw new TypeError('Value of "this.showPhotoSwipe" violates contract.\n\nExpected:\n(any) => any\n\nGot:\n' + _inspect(_this.showPhotoSwipe));
        }

        _this.handleClose = _this.handleClose.bind(_this);

        if (!(typeof _this.handleClose === 'function')) {
            throw new TypeError('Value of "this.handleClose" violates contract.\n\nExpected:\n() => any\n\nGot:\n' + _inspect(_this.handleClose));
        }

        return _this;
    }

    (0, _createClass3.default)(ReactPhotoSwipeGallery, [{
        key: 'showPhotoSwipe',
        value: function showPhotoSwipe(itemIndex) {
            var _this2 = this;

            return function (e) {
                e.preventDefault();
                var options = _this2.state.options;

                options.index = itemIndex;
                options.getThumbBoundsFn = options.getThumbBoundsFn || function (index) {
                    var thumbnail = _reactDom2.default.findDOMNode(_this2.refs['thumbnail' + index]);
                    var img = thumbnail.getElementsByTagName('img')[0];
                    var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                    var rect = img.getBoundingClientRect();
                    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                };
                _this2.setState({
                    isOpen: true,
                    options: options
                });
            };
        }
    }, {
        key: 'handleClose',
        value: function handleClose() {
            this.setState({
                isOpen: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                id = _props.id,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                items = _props.items,
                thumbnailContent = _props.thumbnailContent,
                other = (0, _objectWithoutProperties3.default)(_props, ['id', 'className', 'items', 'thumbnailContent']);

            var classes = [].concat((0, _toConsumableArray3.default)(className.split(' ')), ['pswp-gallery']).join(' ');
            var eventProps = (0, _lodash2.default)(other, _events2.default);
            var _state = this.state,
                isOpen = _state.isOpen,
                options = _state.options;

            return _react3.default.createElement(
                'div',
                { id: id, className: classes },
                _react3.default.createElement(
                    'div',
                    { className: 'pswp-thumbnails' },
                    items.map(function (item, index) {
                        return _react3.default.createElement(
                            'div',
                            { key: index, ref: 'thumbnail' + index,
                                className: 'pswp-thumbnail',
                                onClick: _this3.showPhotoSwipe(index) },
                            thumbnailContent(item)
                        );
                    })
                ),
                _react3.default.createElement(_ReactPhotoSwipe2.default, (0, _extends3.default)({}, eventProps, {
                    isOpen: isOpen,
                    items: items,
                    options: options,
                    onClose: this.handleClose }))
            );
        }
    }]);
    return ReactPhotoSwipeGallery;
}(_react2.Component), _class.propTypes = {
    items: _propTypes2.default.array.isRequired,
    options: _propTypes2.default.object,
    thumbnailContent: _propTypes2.default.func,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string
}, _class.defaultProps = {
    options: {},
    thumbnailContent: function thumbnailContent(item) {
        return _react3.default.createElement('img', { src: item.src, width: '100', height: '100' });
    }
}, _temp));

exports.default = ReactPhotoSwipeGallery;

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
            if (depth > maxDepth) return '[...]';

            var first = _inspect(input[0], depth);

            if (input.every(function (item) {
                return _inspect(item, depth) === first;
            })) {
                return first.trim() + '[]';
            } else {
                return '[' + input.slice(0, maxKeys).map(function (item) {
                    return _inspect(item, depth);
                }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
            }
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
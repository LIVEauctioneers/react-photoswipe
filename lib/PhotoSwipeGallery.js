'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _class, _temp2;

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _PhotoSwipe = require('./PhotoSwipe.js');

var _PhotoSwipe2 = _interopRequireDefault(_PhotoSwipe);

var _lodash = require('lodash.pick');

var _lodash2 = _interopRequireDefault(_lodash);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  PhotoSwipeGallery: {
    displayName: 'PhotoSwipeGallery'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/PhotoSwipeGallery.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var PhotoSwipeGallery = _wrapComponent('PhotoSwipeGallery')((_temp2 = _class = function (_React$Component) {
  (0, _inherits3.default)(PhotoSwipeGallery, _React$Component);

  function PhotoSwipeGallery() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PhotoSwipeGallery);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PhotoSwipeGallery.__proto__ || (0, _getPrototypeOf2.default)(PhotoSwipeGallery)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false,
      options: _this.props.options
    }, _this.showPhotoSwipe = function (itemIndex) {
      return function (e) {
        e.preventDefault();
        var options = _this.state.options;

        options.index = itemIndex;
        options.getThumbBoundsFn = options.getThumbBoundsFn || function (index) {
          var thumbnail = _reactDom2.default.findDOMNode(_this.refs['thumbnail' + index]);
          var img = thumbnail.getElementsByTagName('img')[0];
          var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
          var rect = img.getBoundingClientRect();
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
        };
        _this.setState({
          isOpen: true,
          options: options
        });
      };
    }, _this.handleClose = function () {
      _this.setState({
        isOpen: false
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PhotoSwipeGallery, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var id = _props.id;
      var className = _props.className;
      var items = _props.items;
      var thumbnailContent = _props.thumbnailContent;
      var other = (0, _objectWithoutProperties3.default)(_props, ['id', 'className', 'items', 'thumbnailContent']);

      className = (0, _classnames2.default)(['pswp-gallery', className]).trim();
      var eventProps = (0, _lodash2.default)(other, _events2.default);
      var _state = this.state;
      var isOpen = _state.isOpen;
      var options = _state.options;

      return _react3.default.createElement(
        'div',
        { id: id, className: className },
        _react3.default.createElement(
          'div',
          { className: 'pswp-thumbnails' },
          items.map(function (item, index) {
            return _react3.default.createElement(
              'div',
              { key: index, ref: 'thumbnail' + index,
                className: 'pswp-thumbnail',
                onClick: _this2.showPhotoSwipe(index) },
              thumbnailContent(item)
            );
          })
        ),
        _react3.default.createElement(_PhotoSwipe2.default, (0, _extends3.default)({}, eventProps, {
          isOpen: isOpen,
          items: items,
          options: options,
          onClose: this.handleClose }))
      );
    }
  }]);
  return PhotoSwipeGallery;
}(_react3.default.Component), _class.propTypes = {
  items: _react3.default.PropTypes.array.isRequired,
  options: _react3.default.PropTypes.object,
  thumbnailContent: _react3.default.PropTypes.func,
  id: _react3.default.PropTypes.string,
  className: _react3.default.PropTypes.string
}, _class.defaultProps = {
  options: {},
  thumbnailContent: function thumbnailContent(item) {
    return _react3.default.createElement('img', { src: item.src, width: '100', height: '100' });
  }
}, _temp2));

exports.default = PhotoSwipeGallery;
module.exports = exports['default'];
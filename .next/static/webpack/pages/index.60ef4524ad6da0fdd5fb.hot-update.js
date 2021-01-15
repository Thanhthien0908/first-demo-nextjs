webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "C:\\Users\\Dell's Thien\\Desktop\\Intern\\Week5\\pjNext\\components\\Prices.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Prices = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Prices, _React$Component);

  var _super = _createSuper(Prices);

  function Prices(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Prices);

    _this = _super.call(this, props);
    _this.state = {
      currency: 'USD'
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Prices, [{
    key: "render",
    value: function render() {
      var list = '';

      if (this.state.currency === 'USD') {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "list-group-item",
          children: ["Bitcoin rate for ", this.props.bpi.USD.code, ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "badge badge-primary",
            children: this.props.bpi.USD.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: this.props.bpi.USD.rate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, this);
      } else if (this.state.currency === 'GBP') {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "list-group-item",
          children: ["Bitcoin rate for ", this.props.bpi.USD.code, ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "badge badge-primary",
            children: this.props.bpi.USD.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: this.props.bpi.USD.rate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this);
      } else if (this.state.currency === 'EUR') return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "list-group"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, this);
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbmN5IiwibGlzdCIsImJwaSIsIlVTRCIsImNvZGUiLCJyYXRlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLE07Ozs7O0FBQ0Ysa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxjQUFRLEVBQUc7QUFERixLQUFiO0FBRmU7QUFLbEI7Ozs7NkJBRVE7QUFDTCxVQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxVQUFHLEtBQUtGLEtBQUwsQ0FBV0MsUUFBWCxLQUF3QixLQUEzQixFQUFpQztBQUM3QjtBQUFBO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBLDBDQUNrQixLQUFLRixLQUFMLENBQVdJLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkMsSUFEckMscUJBRUU7QUFBTSxxQkFBUyxFQUFDLHFCQUFoQjtBQUFBLHNCQUF1QyxLQUFLTixLQUFMLENBQVdJLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdBO0FBQUEsc0JBQVMsS0FBS04sS0FBTCxDQUFXSSxHQUFYLENBQWVDLEdBQWYsQ0FBbUJFO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0gsT0FORCxNQU1NLElBQUcsS0FBS04sS0FBTCxDQUFXQyxRQUFYLEtBQXdCLEtBQTNCLEVBQWlDO0FBQ25DO0FBQUE7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUEsMENBQ2tCLEtBQUtGLEtBQUwsQ0FBV0ksR0FBWCxDQUFlQyxHQUFmLENBQW1CQyxJQURyQyxxQkFFRTtBQUFNLHFCQUFTLEVBQUMscUJBQWhCO0FBQUEsc0JBQXVDLEtBQUtOLEtBQUwsQ0FBV0ksR0FBWCxDQUFlQyxHQUFmLENBQW1CQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0E7QUFBQSxzQkFBUyxLQUFLTixLQUFMLENBQVdJLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkU7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLSCxPQU5LLE1BTUEsSUFBRyxLQUFLTixLQUFMLENBQVdDLFFBQVgsS0FBd0IsS0FBM0IsRUFDTixvQkFDSTtBQUFBLCtCQUNJO0FBQUksbUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFRSDs7OztFQS9CZ0JNLDRDQUFLLENBQUNDLFM7O0FBa0NaVixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MGVmNDUyNGFkNmRhMGZkZDVmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjdXJyZW5jeSA6ICdVU0QnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSAnJztcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnVVNEJyl7XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuVVNELmNvZGV9XHJcbiAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnt0aGlzLnByb3BzLmJwaS5VU0QuY29kZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLlVTRC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgPC9saT5cclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnR0JQJyl7XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuVVNELmNvZGV9XHJcbiAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnt0aGlzLnByb3BzLmJwaS5VU0QuY29kZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLlVTRC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgPC9saT5cclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnRVVSJylcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlcztcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
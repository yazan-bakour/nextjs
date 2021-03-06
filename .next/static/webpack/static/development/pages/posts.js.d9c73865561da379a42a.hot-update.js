webpackHotUpdate("static/development/pages/posts.js",{

/***/ "./pages/posts/index.js":
/*!******************************!*\
  !*** ./pages/posts/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _comps_Mainlayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../comps/Mainlayout */ "./comps/Mainlayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_11__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;





var Post =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Post, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Post, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                return _context.abrupt("return", query);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Post(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Post);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Post).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Post, [{
    key: "render",
    value: function render() {
      // console.log(this.props)
      return __jsx(_comps_Mainlayout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx("div", {
        className: "jsx-3339616612" + " " + "markdown"
      }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_11___default.a, {
        source: "\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n      "
      }), __jsx("h1", {
        className: "jsx-3339616612"
      }, "Post: ", this.props.id), __jsx("p", {
        className: "jsx-3339616612"
      }, "This is the blog post content. Hello: ", this.props.id)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3339616612"
      }, ".markdown p{color:gray;}.markdown{font-family:'Arial';}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3liL3Byb2plY3RzL3BlcnNvbmFsL25leHRqcy9wYWdlcy9wb3N0cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QnlCLEFBR3NCLEFBSVMsQUFJQyxBQUtULEFBSUgsU0FDQyxFQWpCWixDQWFBLE9BSzJCLENBZDNCLHdCQWVBLE1BWGEsV0FDYiIsImZpbGUiOiIvaG9tZS95Yi9wcm9qZWN0cy9wZXJzb25hbC9uZXh0anMvcGFnZXMvcG9zdHMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBzL01haW5sYXlvdXQnO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtxdWVyeX0pIHtcbiAgICByZXR1cm4gcXVlcnlcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcylcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duXCI+XG4gICAgICAgIDxNYXJrZG93blxuICAgICAgICAgIHNvdXJjZT17YFxuVGhpcyBpcyBvdXIgYmxvZyBwb3N0LlxuWWVzLiBXZSBjYW4gaGF2ZSBhIFtsaW5rXSgvbGluaykuXG5BbmQgd2UgY2FuIGhhdmUgYSB0aXRsZSBhcyB3ZWxsLlxuICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgIDxoMT5Qb3N0OiB7dGhpcy5wcm9wcy5pZH08L2gxPlxuICAgICAgPHA+VGhpcyBpcyB0aGUgYmxvZyBwb3N0IGNvbnRlbnQuIEhlbGxvOiB7dGhpcy5wcm9wcy5pZH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5tYXJrZG93biBwIHtcbiAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXJrZG93biB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgIH1cblxuICAgICAgICAubWFya2Rvd24gYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1hcmtkb3duIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXJrZG93biBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTsgIFxuICB9XG59XG5cbi8vIGNvbnN0IFBvc3QgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4vLyAgIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlci5xdWVyeVxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxMYXlvdXQ+XG4vLyAgICAgICA8aDE+UG9zdDoge3F1ZXJ5fTwvaDE+XG4vLyAgICAgICA8cD5UaGlzIGlzIHRoZSBibG9nIHBvc3QgY29udGVudC4gSGVsbG86IHtxdWVyeX08L3A+XG4vLyAgICAgPC9MYXlvdXQ+XG4vLyAgICk7XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFBvc3QiXX0= */\n/*@ sourceURL=/home/yb/projects/personal/nextjs/pages/posts/index.js */"));
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]); // const Post = () => {
//   const router = useRouter()
//   const { query } = router.query
//   return (
//     <Layout>
//       <h1>Post: {query}</h1>
//       <p>This is the blog post content. Hello: {query}</p>
//     </Layout>
//   );
// }
// export default Post




/***/ })

})
//# sourceMappingURL=posts.js.d9c73865561da379a42a.hot-update.js.map
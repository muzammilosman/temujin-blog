/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/article/[slug]",{

/***/ "./pages/article/[slug].js":
/*!*********************************!*\
  !*** ./pages/article/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/image */ \"./components/image.js\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/seo */ \"./components/seo.js\");\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/media */ \"./lib/media.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/muzammilosman/Documents/codelearn/my-project/frontend/pages/article/[slug].js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\nvar Article = function Article(_ref) {\n  var article = _ref.article,\n      categories = _ref.categories;\n  var imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_6__.getStrapiMedia)(article.attributes.image);\n  var author = article.attributes.author.data.attributes;\n  var seo = {\n    metaTitle: article.attributes.title,\n    metaDescription: article.attributes.description,\n    shareImage: article.attributes.image,\n    article: true\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    categories: categories.data,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_5__.default, {\n      seo: seo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"blog-title\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: article.attributes.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      id: \"banner\",\n      className: \"uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin\",\n      \"data-src\": imageUrl,\n      \"data-srcset\": imageUrl,\n      \"data-uk-img\": true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"uk-section\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"uk-container uk-container-small\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {\n          source: article.attributes.content,\n          escapeHtml: false\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n          className: \"uk-divider-small\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"uk-grid-small uk-flex-left\",\n          \"data-uk-grid\": \"true\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: article.attributes.author.picture && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_4__.default, {\n              image: article.attributes.author.picture\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"uk-width-expand\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"uk-margin-remove-bottom\",\n              children: [\"By \", author.name ? author.name : \"Anonymous\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"uk-text-meta uk-margin-remove-top\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {\n                format: \"MMM Do YYYY\",\n                children: article.attributes.published_at\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Article;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS9bc2x1Z10uanM/MzZkOCJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXJ0aWNsZSIsImNhdGVnb3JpZXMiLCJpbWFnZVVybCIsImdldFN0cmFwaU1lZGlhIiwiYXR0cmlidXRlcyIsImltYWdlIiwiYXV0aG9yIiwiZGF0YSIsInNlbyIsIm1ldGFUaXRsZSIsInRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJzaGFyZUltYWdlIiwiY29udGVudCIsInBpY3R1cmUiLCJuYW1lIiwicHVibGlzaGVkX2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBNkI7QUFBQSxNQUExQkMsT0FBMEIsUUFBMUJBLE9BQTBCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUMzQyxNQUFNQyxRQUFRLEdBQUdDLDBEQUFjLENBQUNILE9BQU8sQ0FBQ0ksVUFBUixDQUFtQkMsS0FBcEIsQ0FBL0I7QUFDQSxNQUFNQyxNQUFNLEdBQUdOLE9BQU8sQ0FBQ0ksVUFBUixDQUFtQkUsTUFBbkIsQ0FBMEJDLElBQTFCLENBQStCSCxVQUE5QztBQUVBLE1BQU1JLEdBQUcsR0FBRztBQUNWQyxhQUFTLEVBQUVULE9BQU8sQ0FBQ0ksVUFBUixDQUFtQk0sS0FEcEI7QUFFVkMsbUJBQWUsRUFBRVgsT0FBTyxDQUFDSSxVQUFSLENBQW1CUSxXQUYxQjtBQUdWQyxjQUFVLEVBQUViLE9BQU8sQ0FBQ0ksVUFBUixDQUFtQkMsS0FIckI7QUFJVkwsV0FBTyxFQUFFO0FBSkMsR0FBWjtBQU9BLHNCQUNFLDhEQUFDLHVEQUFEO0FBQVEsY0FBVSxFQUFFQyxVQUFVLENBQUNNLElBQS9CO0FBQUEsNEJBQ0UsOERBQUMsb0RBQUQ7QUFBSyxTQUFHLEVBQUVDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNJO0FBQUEsa0JBQUtSLE9BQU8sQ0FBQ0ksVUFBUixDQUFtQk07QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUtFO0FBQ0UsUUFBRSxFQUFDLFFBREw7QUFFRSxlQUFTLEVBQUMsMEdBRlo7QUFHRSxrQkFBVVIsUUFIWjtBQUlFLHFCQUFhQSxRQUpmO0FBS0U7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFhRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUEsZ0NBQ0UsOERBQUMsdURBQUQ7QUFDRSxnQkFBTSxFQUFFRixPQUFPLENBQUNJLFVBQVIsQ0FBbUJVLE9BRDdCO0FBRUUsb0JBQVUsRUFBRTtBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFJLG1CQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBTUU7QUFBSyxtQkFBUyxFQUFDLDRCQUFmO0FBQTRDLDBCQUFhLE1BQXpEO0FBQUEsa0NBQ0U7QUFBQSxzQkFDR2QsT0FBTyxDQUFDSSxVQUFSLENBQW1CRSxNQUFuQixDQUEwQlMsT0FBMUIsaUJBQ0MsOERBQUMsc0RBQUQ7QUFBVyxtQkFBSyxFQUFFZixPQUFPLENBQUNJLFVBQVIsQ0FBbUJFLE1BQW5CLENBQTBCUztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU1FO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBQyx5QkFBYjtBQUFBLGdDQUNPVCxNQUFNLENBQUNVLElBQVAsR0FBY1YsTUFBTSxDQUFDVSxJQUFyQixjQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUcsdUJBQVMsRUFBQyxtQ0FBYjtBQUFBLHFDQUNFLDhEQUFDLHFEQUFEO0FBQVEsc0JBQU0sRUFBQyxhQUFmO0FBQUEsMEJBQ0doQixPQUFPLENBQUNJLFVBQVIsQ0FBbUJhO0FBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMENELENBckREOztLQUFNbEIsTzs7QUFrRk4sK0RBQWVBLE9BQWYiLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIlxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ltYWdlXCJcbmltcG9ydCBTZW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VvXCJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uLy4uL2xpYi9tZWRpYVwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBBcnRpY2xlID0gKHsgYXJ0aWNsZSwgY2F0ZWdvcmllcyB9KSA9PiB7XG4gIGNvbnN0IGltYWdlVXJsID0gZ2V0U3RyYXBpTWVkaWEoYXJ0aWNsZS5hdHRyaWJ1dGVzLmltYWdlKVxuICBjb25zdCBhdXRob3IgPSBhcnRpY2xlLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcztcblxuICBjb25zdCBzZW8gPSB7XG4gICAgbWV0YVRpdGxlOiBhcnRpY2xlLmF0dHJpYnV0ZXMudGl0bGUsXG4gICAgbWV0YURlc2NyaXB0aW9uOiBhcnRpY2xlLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb24sXG4gICAgc2hhcmVJbWFnZTogYXJ0aWNsZS5hdHRyaWJ1dGVzLmltYWdlLFxuICAgIGFydGljbGU6IHRydWUsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllcy5kYXRhfT5cbiAgICAgIDxTZW8gc2VvPXtzZW99IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctdGl0bGVcIj5cbiAgICAgICAgICA8aDE+e2FydGljbGUuYXR0cmlidXRlcy50aXRsZX08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPVwiYmFubmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidWstaGVpZ2h0LW1lZGl1bSB1ay1mbGV4IHVrLWZsZXgtY2VudGVyIHVrLWZsZXgtbWlkZGxlIHVrLWJhY2tncm91bmQtY292ZXIgdWstbGlnaHQgdWstcGFkZGluZyB1ay1tYXJnaW5cIlxuICAgICAgICBkYXRhLXNyYz17aW1hZ2VVcmx9XG4gICAgICAgIGRhdGEtc3Jjc2V0PXtpbWFnZVVybH1cbiAgICAgICAgZGF0YS11ay1pbWdcbiAgICAgID5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1zbWFsbFwiPlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICBzb3VyY2U9e2FydGljbGUuYXR0cmlidXRlcy5jb250ZW50fVxuICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidWstZGl2aWRlci1zbWFsbFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1ncmlkLXNtYWxsIHVrLWZsZXgtbGVmdFwiIGRhdGEtdWstZ3JpZD1cInRydWVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHthcnRpY2xlLmF0dHJpYnV0ZXMuYXV0aG9yLnBpY3R1cmUgJiYgKFxuICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2FydGljbGUuYXR0cmlidXRlcy5hdXRob3IucGljdHVyZX0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay13aWR0aC1leHBhbmRcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidWstbWFyZ2luLXJlbW92ZS1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICBCeSB7IGF1dGhvci5uYW1lID8gYXV0aG9yLm5hbWUgOiBgQW5vbnltb3VzYH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1ay10ZXh0LW1ldGEgdWstbWFyZ2luLXJlbW92ZS10b3BcIj5cbiAgICAgICAgICAgICAgICA8TW9tZW50IGZvcm1hdD1cIk1NTSBEbyBZWVlZXCI+XG4gICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5hdHRyaWJ1dGVzLnB1Ymxpc2hlZF9hdH1cbiAgICAgICAgICAgICAgICA8L01vbWVudD5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBhcnRpY2xlc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2FydGljbGVzXCIsIHsgZmllbGRzOiBbXCJzbHVnXCJdIH0pXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGFydGljbGVzUmVzLmRhdGEubWFwKChhcnRpY2xlKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWc6IGFydGljbGUuYXR0cmlidXRlcy5zbHVnLFxuICAgICAgfSxcbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IGFydGljbGVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIiwge1xuICAgIGZpbHRlcnM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnLFxuICAgIH0sXG4gICAgcG9wdWxhdGU6IFwiKlwiLFxuICB9KVxuICBjb25zdCBjYXRlZ29yaWVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYXJ0aWNsZTogYXJ0aWNsZXNSZXMuZGF0YVswXSwgY2F0ZWdvcmllczogY2F0ZWdvcmllc1JlcyB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/article/[slug].js\n");

/***/ })

});
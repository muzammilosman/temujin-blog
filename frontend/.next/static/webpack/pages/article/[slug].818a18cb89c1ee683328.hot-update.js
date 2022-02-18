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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/image */ \"./components/image.js\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/seo */ \"./components/seo.js\");\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/media */ \"./lib/media.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/muzammilosman/Documents/codelearn/my-project/frontend/pages/article/[slug].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Article = function Article(_ref) {\n  _s();\n\n  var article = _ref.article,\n      categories = _ref.categories,\n      paths = _ref.paths;\n  var imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_6__.getStrapiMedia)(article.attributes.image);\n  var author = article.attributes.author.data.attributes;\n  var seo = {\n    metaTitle: article.attributes.title,\n    metaDescription: article.attributes.description,\n    shareImage: article.attributes.image,\n    article: true\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {\n    var currentArticleSlug = paths.find(function (path) {\n      return path === article.attributes.slug;\n    });\n    console.log(currentArticleSlug);\n  }, [paths]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    categories: categories.data,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_5__.default, {\n      seo: seo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"blog-title text-center py-5\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: article.attributes.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"col-md-6 m-auto\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"blog-banner py-1 w-100\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: imageUrl,\n          alt: \"blog banner\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"uk-section\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"uk-container uk-container-small\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {\n          source: article.attributes.content,\n          escapeHtml: false\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n          className: \"uk-divider-small\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"uk-grid-small uk-flex-left\",\n          \"data-uk-grid\": \"true\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: article.attributes.author.picture && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_4__.default, {\n              image: article.attributes.author.picture\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"uk-width-expand\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"uk-margin-remove-bottom\",\n              children: [\"By \", author.name ? author.name : \"Anonymous\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"uk-text-meta uk-margin-remove-top\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {\n                format: \"MMM Do YYYY\",\n                children: article.attributes.published_at\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"nav-blogs-section row py-4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 nav-blog-item previous-blog text-left\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"nav-label\",\n              children: \"Previous blog\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n              href: \"/article/\".concat(paths[0]),\n              className: \"nav-name text-decoration-none\",\n              children: paths[0]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 nav-blog-item next-blog text-right\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"nav-label\",\n              children: \"Next blog\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n              href: \"/article/\".concat(paths[2]),\n              className: \"nav-name text-decoration-none\",\n              children: paths[2]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Article, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Article;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS9bc2x1Z10uanM/MzZkOCJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXJ0aWNsZSIsImNhdGVnb3JpZXMiLCJwYXRocyIsImltYWdlVXJsIiwiZ2V0U3RyYXBpTWVkaWEiLCJhdHRyaWJ1dGVzIiwiaW1hZ2UiLCJhdXRob3IiLCJkYXRhIiwic2VvIiwibWV0YVRpdGxlIiwidGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInNoYXJlSW1hZ2UiLCJ1c2VFZmZlY3QiLCJjdXJyZW50QXJ0aWNsZVNsdWciLCJmaW5kIiwicGF0aCIsInNsdWciLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsInBpY3R1cmUiLCJuYW1lIiwicHVibGlzaGVkX2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFvQztBQUFBOztBQUFBLE1BQWpDQyxPQUFpQyxRQUFqQ0EsT0FBaUM7QUFBQSxNQUF4QkMsVUFBd0IsUUFBeEJBLFVBQXdCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2xELE1BQU1DLFFBQVEsR0FBR0MsMERBQWMsQ0FBQ0osT0FBTyxDQUFDSyxVQUFSLENBQW1CQyxLQUFwQixDQUEvQjtBQUNBLE1BQU1DLE1BQU0sR0FBR1AsT0FBTyxDQUFDSyxVQUFSLENBQW1CRSxNQUFuQixDQUEwQkMsSUFBMUIsQ0FBK0JILFVBQTlDO0FBRUEsTUFBTUksR0FBRyxHQUFHO0FBQ1ZDLGFBQVMsRUFBRVYsT0FBTyxDQUFDSyxVQUFSLENBQW1CTSxLQURwQjtBQUVWQyxtQkFBZSxFQUFFWixPQUFPLENBQUNLLFVBQVIsQ0FBbUJRLFdBRjFCO0FBR1ZDLGNBQVUsRUFBRWQsT0FBTyxDQUFDSyxVQUFSLENBQW1CQyxLQUhyQjtBQUlWTixXQUFPLEVBQUU7QUFKQyxHQUFaO0FBT0FlLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLGtCQUFrQixHQUFHZCxLQUFLLENBQUNlLElBQU4sQ0FBVyxVQUFDQyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxLQUFLbEIsT0FBTyxDQUFDSyxVQUFSLENBQW1CYyxJQUF0QztBQUFBLEtBQVgsQ0FBM0I7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLGtCQUFaO0FBQ0QsR0FIUSxFQUdOLENBQUNkLEtBQUQsQ0FITSxDQUFUO0FBS0Esc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxjQUFVLEVBQUVELFVBQVUsQ0FBQ08sSUFBL0I7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFLLFNBQUcsRUFBRUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyw2QkFBZjtBQUFBLDZCQUNJO0FBQUEsa0JBQUtULE9BQU8sQ0FBQ0ssVUFBUixDQUFtQk07QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUtFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUVSLFFBQVY7QUFBb0IsYUFBRyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBVUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxpQ0FBZjtBQUFBLGdDQUNFLDhEQUFDLHVEQUFEO0FBQ0UsZ0JBQU0sRUFBRUgsT0FBTyxDQUFDSyxVQUFSLENBQW1CaUIsT0FEN0I7QUFFRSxvQkFBVSxFQUFFO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUksbUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRTtBQUFLLG1CQUFTLEVBQUMsNEJBQWY7QUFBNEMsMEJBQWEsTUFBekQ7QUFBQSxrQ0FDRTtBQUFBLHNCQUNHdEIsT0FBTyxDQUFDSyxVQUFSLENBQW1CRSxNQUFuQixDQUEwQmdCLE9BQTFCLGlCQUNDLDhEQUFDLHNEQUFEO0FBQVcsbUJBQUssRUFBRXZCLE9BQU8sQ0FBQ0ssVUFBUixDQUFtQkUsTUFBbkIsQ0FBMEJnQjtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU1FO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBQyx5QkFBYjtBQUFBLGdDQUNPaEIsTUFBTSxDQUFDaUIsSUFBUCxHQUFjakIsTUFBTSxDQUFDaUIsSUFBckIsY0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFHLHVCQUFTLEVBQUMsbUNBQWI7QUFBQSxxQ0FDRSw4REFBQyxxREFBRDtBQUFRLHNCQUFNLEVBQUMsYUFBZjtBQUFBLDBCQUNHeEIsT0FBTyxDQUFDSyxVQUFSLENBQW1Cb0I7QUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQXVCRTtBQUFLLG1CQUFTLEVBQUMsNEJBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsZ0RBQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUkscUJBQWN2QixLQUFLLENBQUMsQ0FBRCxDQUFuQixDQUFWO0FBQW9DLHVCQUFTLEVBQUMsK0JBQTlDO0FBQUEsd0JBQStFQSxLQUFLLENBQUMsQ0FBRDtBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQU0scUJBQVMsRUFBQyw2Q0FBaEI7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUkscUJBQWNBLEtBQUssQ0FBQyxDQUFELENBQW5CLENBQVY7QUFBb0MsdUJBQVMsRUFBQywrQkFBOUM7QUFBQSx3QkFBK0VBLEtBQUssQ0FBQyxDQUFEO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaURELENBakVEOztHQUFNSCxPOztLQUFBQSxPOztBQW9HTiwrREFBZUEsT0FBZiIsImZpbGUiOiIuL3BhZ2VzL2FydGljbGUvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW1hZ2VcIlxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZW9cIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vLi4vbGliL21lZGlhXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuY29uc3QgQXJ0aWNsZSA9ICh7IGFydGljbGUsIGNhdGVnb3JpZXMsIHBhdGhzIH0pID0+IHtcbiAgY29uc3QgaW1hZ2VVcmwgPSBnZXRTdHJhcGlNZWRpYShhcnRpY2xlLmF0dHJpYnV0ZXMuaW1hZ2UpXG4gIGNvbnN0IGF1dGhvciA9IGFydGljbGUuYXR0cmlidXRlcy5hdXRob3IuZGF0YS5hdHRyaWJ1dGVzO1xuXG4gIGNvbnN0IHNlbyA9IHtcbiAgICBtZXRhVGl0bGU6IGFydGljbGUuYXR0cmlidXRlcy50aXRsZSxcbiAgICBtZXRhRGVzY3JpcHRpb246IGFydGljbGUuYXR0cmlidXRlcy5kZXNjcmlwdGlvbixcbiAgICBzaGFyZUltYWdlOiBhcnRpY2xlLmF0dHJpYnV0ZXMuaW1hZ2UsXG4gICAgYXJ0aWNsZTogdHJ1ZSxcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEFydGljbGVTbHVnID0gcGF0aHMuZmluZCgocGF0aCkgPT4gcGF0aCA9PT0gYXJ0aWNsZS5hdHRyaWJ1dGVzLnNsdWcpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRBcnRpY2xlU2x1Zyk7XG4gIH0sIFtwYXRoc10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzLmRhdGF9PlxuICAgICAgPFNlbyBzZW89e3Nlb30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy10aXRsZSB0ZXh0LWNlbnRlciBweS01XCI+XG4gICAgICAgICAgPGgxPnthcnRpY2xlLmF0dHJpYnV0ZXMudGl0bGV9PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtLWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWJhbm5lciBweS0xIHctMTAwXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJibG9nIGJhbm5lclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLXNtYWxsXCI+XG4gICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgIHNvdXJjZT17YXJ0aWNsZS5hdHRyaWJ1dGVzLmNvbnRlbnR9XG4gICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ1ay1kaXZpZGVyLXNtYWxsXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWdyaWQtc21hbGwgdWstZmxleC1sZWZ0XCIgZGF0YS11ay1ncmlkPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2FydGljbGUuYXR0cmlidXRlcy5hdXRob3IucGljdHVyZSAmJiAoXG4gICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17YXJ0aWNsZS5hdHRyaWJ1dGVzLmF1dGhvci5waWN0dXJlfSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXdpZHRoLWV4cGFuZFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1ay1tYXJnaW4tcmVtb3ZlLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgIEJ5IHsgYXV0aG9yLm5hbWUgPyBhdXRob3IubmFtZSA6IGBBbm9ueW1vdXNgfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVrLXRleHQtbWV0YSB1ay1tYXJnaW4tcmVtb3ZlLXRvcFwiPlxuICAgICAgICAgICAgICAgIDxNb21lbnQgZm9ybWF0PVwiTU1NIERvIFlZWVlcIj5cbiAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmF0dHJpYnV0ZXMucHVibGlzaGVkX2F0fVxuICAgICAgICAgICAgICAgIDwvTW9tZW50PlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1ibG9ncy1zZWN0aW9uIHJvdyBweS00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG5hdi1ibG9nLWl0ZW0gcHJldmlvdXMtYmxvZyB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1sYWJlbFwiPlByZXZpb3VzIGJsb2c8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FydGljbGUvJHtwYXRoc1swXX1gfSBjbGFzc05hbWU9XCJuYXYtbmFtZSB0ZXh0LWRlY29yYXRpb24tbm9uZVwiPntwYXRoc1swXX08L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImNvbC1tZC02IG5hdi1ibG9nLWl0ZW0gbmV4dC1ibG9nIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1sYWJlbFwiPk5leHQgYmxvZzwvZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYXJ0aWNsZS8ke3BhdGhzWzJdfWB9IGNsYXNzTmFtZT1cIm5hdi1uYW1lIHRleHQtZGVjb3JhdGlvbi1ub25lXCI+e3BhdGhzWzJdfTwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgYXJ0aWNsZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9hcnRpY2xlc1wiLCB7IGZpZWxkczogW1wic2x1Z1wiXSB9KTtcbiAgY29uc3QgcGF0aHMgPSBhcnRpY2xlc1Jlcy5kYXRhLm1hcCgoYXJ0aWNsZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2x1ZzogYXJ0aWNsZS5hdHRyaWJ1dGVzLnNsdWdcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBhcnRpY2xlc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2FydGljbGVzXCIsIHtcbiAgICBmaWx0ZXJzOiB7XG4gICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgICB9LFxuICAgIHBvcHVsYXRlOiBcIipcIixcbiAgfSlcbiAgY29uc3QgY2F0ZWdvcmllc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIilcblxuICBjb25zdCBhcnRpY2xlTGlzdCA9IGF3YWl0IGZldGNoQVBJKFwiL2FydGljbGVzXCIsIHsgZmllbGRzOiBbXCJzbHVnXCJdIH0pO1xuICBjb25zdCBwYXRocyA9IGFydGljbGVMaXN0LmRhdGEubWFwKChhcnRpY2xlKSA9PiBhcnRpY2xlLmF0dHJpYnV0ZXMuc2x1Zyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhcnRpY2xlOiBhcnRpY2xlc1Jlcy5kYXRhWzBdLCBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzUmVzLCBwYXRocyB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/article/[slug].js\n");

/***/ })

});